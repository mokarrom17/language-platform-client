import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";

export default function EditProfile() {
  const auth = getAuth();
  const currentUser = auth.currentUser;
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const storedData = localStorage.getItem("profileData");
    if (storedData) {
      setFormData(JSON.parse(storedData)); // Set data from localStorage
      setLoading(false); // ✅ Data loaded, stop loading
    } else {
      if (currentUser?.email) {
        axios
          .get(`http://localhost:3000/profile?email=${currentUser.email}`)
          .then((res) => {
            setFormData(res.data);
            localStorage.setItem("profileData", JSON.stringify(res.data)); // Save to localStorage
            setLoading(false); // ✅ Data fetched, stop loading
          })
          .catch((err) => {
            console.error("Error fetching data:", err);
            setLoading(false); // ❌ Stop loading even if error occurs
          });
      }
    }
  }, [currentUser]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Remove the _id field before sending to the backend
    const { _id, ...updateData } = formData;

    console.log("Sending request to update profile with data:", updateData);

    try {
      // Send the update request
      const response = await axios.put("http://localhost:3000/profile/update", {
        email: currentUser.email,
        ...updateData,
      });

      // Log the response from the backend
      console.log("Profile update response:", response.data);

      if (response.data.success) {
        alert("Profile updated successfully!");
        navigate(-1); // Navigate to profile page on success
      } else {
        alert("Profile update failed.");
      }
    } catch (err) {
      console.error("Update failed:", err);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="w-10/12 mx-auto mt-20">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Update Your Profile
      </h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div>
          <label className="block mb-1 font-medium" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            className="w-full p-3 border rounded"
            name="name"
            placeholder="Name"
            value={formData.name || ""}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block mb-1 font-medium" htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            className="w-full p-3 border rounded"
            name="phone"
            placeholder="Phone"
            value={formData.phone || ""}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block mb-1 font-medium" htmlFor="dateOfBirth">
            Date of Birth
          </label>
          <input
            id="dateOfBirth"
            className="w-full p-3 border rounded"
            name="dateOfBirth"
            type="date"
            value={formData.dateOfBirth || ""}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block mb-1 font-medium" htmlFor="gender">
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            value={formData.gender || ""}
            onChange={handleChange}
            className="w-full p-3 border rounded"
          >
            <option value="">Choose Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block mb-1 font-medium" htmlFor="address">
            Address
          </label>
          <textarea
            id="address"
            className="w-full p-3 border rounded"
            name="address"
            placeholder="Address"
            value={formData.address || ""}
            onChange={handleChange}
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded col-span-2"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}
