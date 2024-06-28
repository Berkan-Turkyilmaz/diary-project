import React from "react";

const EntryModal = ({ entry, onClose }) => {
  if (!entry) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex  items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg h-screen w-screen max-w-md max-h-md overflow-auto">
        <h2 className="text-xl font-bold mb-4 text-center">{entry.title}</h2>
        <p className="text-m font-semibold mb-4 text-gray-500">
          Date: {entry.date}
        </p>
        <img
          className=" w-[100%] h-60 object-cover rounded mb-4"
          src={entry.imageUrl}
          alt="Full entry"
        />
        <p className="w-[100%] h-fit p-2 border rounded text-pretty mb-6 shrink whitespace-normal break-words">
          {entry.content}
        </p>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-gray-300 rounded mr-2 w-[100%]"
        >
          Close
        </button>
        /* <p className="text-m font-semibold mb-4">Date: {entry.date}</p>
      </div>
      <div className="w-full mb-4 border rounded mx-1 flex justify-center">
        {entry.imageUrl ? (
          <img
            className="w-full h-40 object-cover rounded"
            src={entry.imageUrl}
            alt={entry.title}
          />
        ) : (
          <div className="w-full h-40 bg-gray-200 flex items-center justify-center rounded">
            <span className="text-gray-500">No Image Available</span>
          </div>
        )}
      </div>
      <p className=" mx-1 w-full p-2 border rounded whitespace-normal break-words">
        {entry.content}
      </p>
      <div className="flex justify-end mx-1 mt-2">
        <button
          onClick={onClose}
          className="close-button px-4 py-2 bg-red-400 text-white rounded-[0.4rem] hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-opacity-50"
        >
          Close
        </button>
      </div>{" "}
      */
    </div>
  );
};

export default EntryModal;
