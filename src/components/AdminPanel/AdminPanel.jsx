import { useState } from "react";

export default function AdminPanel() {
  const [type, setType] = useState("");
  const [subtype, setSubtype] = useState("");
  const [formData, setFormData] = useState({
    packageName: "",
    question: "",
    options: ["", "", "", ""],
    correctAnswer: "",
    image: null,
    audio: null,
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...formData.options];
    newOptions[index] = value;
    setFormData({ ...formData, options: newOptions });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("packageName", formData.packageName);
    data.append("type", type);
    if (type === "reading") data.append("subtype", subtype);
    if (formData.image) data.append("image", formData.image);
    if (formData.audio) data.append("audio", formData.audio);
    data.append("question", formData.question);
    formData.options.forEach((opt, i) => data.append(`options[${i}]`, opt));
    data.append("correctAnswer", formData.correctAnswer);

    await fetch("/api/upload-question", {
      method: "POST",
      body: data,
    });

    alert("Question uploaded!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow space-y-4"
    >
      <h2 className="text-2xl font-semibold">Upload Question</h2>

      <input
        type="text"
        name="packageName"
        placeholder="Package Name"
        value={formData.packageName}
        onChange={handleInputChange}
        className="w-full border p-2 rounded"
        required
      />

      <select
        value={type}
        onChange={(e) => {
          setType(e.target.value);
          setSubtype("");
        }}
        className="w-full border p-2 rounded"
        required
      >
        <option value="">Select Type</option>
        <option value="reading">Reading</option>
        <option value="listening">Listening</option>
      </select>

      {type === "reading" && (
        <select
          value={subtype}
          onChange={(e) => setSubtype(e.target.value)}
          className="w-full border p-2 rounded"
          required
        >
          <option value="">Select Subtype</option>
          <option value="img">Image Based</option>
          <option value="multiplebased">Multiple Choice</option>
        </select>
      )}

      {type === "reading" && subtype === "img" && (
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleInputChange}
          className="w-full"
          required
        />
      )}

      {(subtype === "multiplebased" || type === "listening") && (
        <>
          {type === "listening" && (
            <input
              type="file"
              name="audio"
              accept="audio/*"
              onChange={handleInputChange}
              className="w-full"
              required
            />
          )}

          <input
            type="text"
            name="question"
            placeholder="Enter question"
            value={formData.question}
            onChange={handleInputChange}
            className="w-full border p-2 rounded"
            required
          />

          {[0, 1, 2, 3].map((idx) => (
            <input
              key={idx}
              type="text"
              placeholder={`Option ${idx + 1}`}
              value={formData.options[idx]}
              onChange={(e) => handleOptionChange(idx, e.target.value)}
              className="w-full border p-2 rounded"
              required
            />
          ))}

          <input
            type="text"
            name="correctAnswer"
            placeholder="Correct Answer"
            value={formData.correctAnswer}
            onChange={handleInputChange}
            className="w-full border p-2 rounded"
            required
          />
        </>
      )}

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        Upload
      </button>
    </form>
  );
}
