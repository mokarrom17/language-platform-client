import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Dashboard/Header/Header";
import SideBar from "../Dashboard/SideBar/SideBar";
import axios from "axios";
import { getAuth } from "firebase/auth";

export default function Profile() {
  const auth = getAuth();
  const currentUser = auth.currentUser;

  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!currentUser?.email) {
      setError("User not logged in or email not available.");
      setLoading(false);
      return;
    }

    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/profile?email=${currentUser.email}`
        );
        setUserData(response.data);
      } catch (err) {
        setError("Failed to fetch user data.");
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [currentUser]);

  if (loading)
    return <div className="mt-20 text-center text-lg">Loading...</div>;
  if (error)
    return <div className="mt-20 text-center text-red-600">{error}</div>;

  return (
    <>
      <Header />
      <SideBar />
      <div className="flex flex-col">
        <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
          <div className="w-10/12 mx-auto rounded-lg pb-5 mb-1 mt-10 shadow-sm shadow-gray-400 bg-gray-100">
            <div className="text-right my-0">
              <button className="bg-blue-400 py-2 hover:bg-blue-300 text-white m-2 rounded-lg px-4">
                Change Password
              </button>
              <Link to={`/edit-profile`}>
                <button className="bg-blue-400 py-2 hover:bg-blue-300 text-white m-2 rounded-lg px-4">
                  Edit
                </button>
              </Link>
            </div>

            <img
              className="w-32 h-32 rounded-full mx-auto"
              src={`http://localhost:3000${
                userData?.photoURL || "/uploads/placeholder.jpg"
              }`}
              alt="Profile"
            />
            <h2 className="text-center text-2xl font-semibold mt-3 text-black">
              {userData?.name || "No Name"}
            </h2>
          </div>

          <div>
            <div className="w-10/12 mx-auto py-3 text-black">
              <div className="grid md:grid-cols-2 gap-4 w-full ">
                <InfoCard label="Email" value={userData?.email} />
                <InfoCard label="Phone No" value={userData?.phone} />
                <InfoCard label="Date of Birth" value={userData?.dateOfBirth} />
                <InfoCard label="Gender" value={userData?.gender} />
              </div>

              <div className="flex flex-col items-start justify-center my-4 shadow-sm shadow-gray-400 rounded-2xl bg-gray-100 p-4">
                <p className="text-sm text-gray-600">Address</p>
                <p className="text-base font-medium text-navy-700">
                  {userData?.address || "Address not available"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function InfoCard({ label, value }) {
  return (
    <div className="flex flex-col items-start justify-center shadow-sm shadow-gray-400 rounded-2xl bg-gray-100 p-4">
      <p className="text-sm text-gray-600">{label}</p>
      <p className="text-base font-medium text-navy-700">
        {value || "Data not available"}
      </p>
    </div>
  );
}
