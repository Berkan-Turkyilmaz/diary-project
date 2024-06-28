import { useState } from "react";
import EntryModal from "./EntryModal";

const EntryList = ({ entries }) => {
  const [selectedEntry, setSelectedEntry] = useState(null);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4 bg-white">
      {entries.map((entry, index) => (
        <div
          key={index}
          onClick={() => setSelectedEntry(entry)}
          className="p-4 border rounded shadow hover:shadow-lg cursor-pointer"
        >
          <h2 className="text-xl font-bold mb-2">{entry.title}</h2>
          <p className="text-gray-500">Date: {entry.date}</p>
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
