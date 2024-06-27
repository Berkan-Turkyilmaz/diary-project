import React from "react";

const EntryModal = ({ entry, onClose }) => {
  if (!entry) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg h-screen w-screen max-w-md max-h-md">
        <div>
          <h2 className="text-xl font-bold mb-4 text-center">{entry.title}</h2>
          <p className="text-m font-semibold mb-4">Date: {entry.date}</p>
        </div>
        
        <div className=" w-screen mb-4">
          <img  src={entry.imageUrl} alt="Full entry" />
        </div>
        <p className='w-full p-2 border rounded'>{entry.content}</p>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-gray-300 rounded mr-2"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default EntryModal;
