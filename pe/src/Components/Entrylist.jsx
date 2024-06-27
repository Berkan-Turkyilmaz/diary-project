import { useState } from "react";
import EntryModal from "./EntryModal.jsx";
const EntryList = ({ entries }) => {
  const [selectedEntry, setSelectedEntry] = useState(null);


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
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
