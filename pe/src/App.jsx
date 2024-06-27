import { useEffect, useState } from "react";
import AddEntryModal from "./Components/AddEntryModal";
import EntryList from "./Components/Entrylist";

function App() {
  const [isAddEntryModalOpen, setIsAddEntryModalOpen] = useState(false);
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem("diaryEntries")) || [];
    setEntries(savedEntries);
  }, []);

  const handleSave = (newEntry) => {
    const updatedEntries = [...entries, newEntry];
    setEntries(updatedEntries);
    localStorage.getItem("diaryEntries", JSON.stringify(updatedEntries));
  };

  return (
    <div className="">
      <header className="container mx-auto p-4">
        <h1 className="">Personal Diary Project</h1>
        <button onClick={() => setIsAddEntryModalOpen(true)}>Add Entry</button>
      </header>
      <main>
        <EntryList entries={entries} />
        {isAddEntryModalOpen && (
          <AddEntryModal
            onClose={() => setIsAddEntryModalOpen(false)}
            onSave={handleSave}
          />
        )}
      </main>
    </div>
  );
}

export default App;
