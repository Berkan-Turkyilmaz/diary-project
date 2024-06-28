import { useEffect, useState } from "react";
import AddEntryModal from "./Components/AddEntryModal";
import EntryList from "./Components/Entrylist";

function App() {
  const [isAddEntryModalOpen, setIsAddEntryModalOpen] = useState(false);
  const [entries, setEntries] = useState([]);

  //Set data from localStorage
  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem("diaryEntries")) || [];
    //Sorts the date to list entries newest to first
    setEntries(
      savedEntries.sort((a, b) => new Date(b.date) - new Date(a.date))
    );
  }, []);

  //Create new entry
  const handleSave = (newEntry) => {
    //Condition compares old entries to check current entry, if yes alerts message to comeback nex day
    if (
      entries.some(
        (e) =>
          new Date(e.date).toDateString() ===
          new Date(newEntry.date).toDateString()
      )
    ) {
      alert("An entry already exists for this date, please come back tomorrow");
      return;
    }
    const updatedEntries = [...entries, newEntry];
    setEntries(updatedEntries);
    localStorage.getItem("diaryEntries", JSON.stringify(updatedEntries));
  };

  return (
    <div className="bg-[#E5E5E5]">
      <header
        className="mx-0 flex justify-between items-center p-4 h-32"
        style={{
          backgroundImage:
            'url("https://hopegrows.org/wp-content/uploads/2020/07/Calming-Influence-Of-Nature.jpg")',
        }}
      >
        <h1 className="text-2xl text-white">Personal Diary</h1>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          onClick={() => setIsAddEntryModalOpen(true)}
        >
          Add Entry
        </button>
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
