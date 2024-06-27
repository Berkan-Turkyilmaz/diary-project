import { useState } from "react";

const EntryList = ({ entries }) => {
  const [selectedEntry, setSelectedEntry] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:gird-cols-3 gap-4">
      {entries.map((entry, index) => (
        <div
          key={index}
          onClick={() => setSelectedEntry(entry)}
          className="p-4 border rounded shadow hover:shadow-lg cursor-pointer"
        >
          <h2 className="text-xl font-bold mb-2">{entry.title}</h2>
          <p className="text-gray-500">Date: {entry.date}</p>
          <img
            className="w-[60%] h-40 object-cover rounded"
            src={entry.imageUrl}
            alt="Preview"
          />
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
            View Details
          </button>
        </div>
      ))}
      {selectedEntry && (
        <EntryModal
          entry={selectedEntry}
          onClose={() => setSelectedEntry(null)}
        />
      )}
    </div>
  );
};

export default EntryList;
