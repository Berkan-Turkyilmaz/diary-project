import { useState } from "react";

const EntryList = ({ entries }) => {
  const [selectedEntry, setSelectedEntry] = useState(null);

  return (
    <div className="">
      {entries.map((entry, index) => (
        <div key={index} className="" onClick={() => setSelectedEntry(entry)}>
          <h2>{entry.title}</h2>
          <p>Date: {entry.date}</p>
          <img src={entry.imageUrl} alt="Preview" />
          <button>View Details</button>
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
