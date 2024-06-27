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

    const existingEntries =
      JSON.parse(localStorage.getItem("diaryEntries")) || [];
    existingEntries.push(newEntry);
    localStorage.setItem("diaryEntries", JSON.stringify(existingEntries));

    onSave(newEntry);
    onClose();
  };

  return (
    <div className="">
      <div className="">
        <span className="" onClick={onClose}>
          &times;
        </span>
        <h2>Add New Entry</h2>
        <form onSubmit={handleSubmit}>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <label>Image URL:</label>
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
          <label>Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
          <button type="submit">Add Entry</button>
        </form>
      </div>
    </div>
  );
};

export default AddEntryModal;
