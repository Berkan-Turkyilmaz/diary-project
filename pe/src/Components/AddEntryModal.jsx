import React, { useState } from "react";

const AddEntryModal = ({ onClose, onSave }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEntry = {
      title,
      date,
      imageUrl,
      content,
    };

    onSave(newEntry);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
        <span className="" onClick={onClose}>
          &times;
        </span>
        <h2 className="text-xl font-bold mb-4">Add New Entry</h2>
        {/* <form onSubmit={handleSubmit}> */}
        <label className="block mb-2">Title:</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className="w-full p-2 border rounded"
          required
          placeholder="Please enter your title"
        />
        <label className="block mb-2">Date:</label>
        <input
          value={date}
          onChange={(e) => setDate(e.target.value)}
          type="date"
          className="w-full p-2 border rounded"
          required
          placeholder="Please enter your date"
        />
        <label className="block mb-2">Image URL:</label>
        <input
          type="url"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Please enter your image url"
        />
        <label className="block mb-2">Content:</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 rounded border"
          rows="4"
          required
        />
        <button
          onClick={onClose}
          className="px-4 py-2 bg-gray-300 rounded mr-2"
        >
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Save
        </button>
        {/* </form> */}
      </div>
    </div>
  );
};

export default AddEntryModal;
