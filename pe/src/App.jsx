import { useEffect, useState } from "react";
import AddEntryModal from "./Components/AddEntryModal";
import EntryList from "./Components/Entrylist";

function App() {
  const [isAddEntryModalOpen, setIsAddEntryModalOpen] = useState(false);
  const [entries, setEntries] = useState([]);
  const [oldest, setByOldest] = useState([]);


  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem("diaryEntries")) || [];
    setEntries(savedEntries);
  }, []);


  const handleSave = (newEntry) => {
    const updatedEntries = [...entries, newEntry];
    setEntries(updatedEntries);
    localStorage.getItem("diaryEntries", JSON.stringify(updatedEntries));
  };

  const sortAsc = () => {
    const sortedAsc = entries.toSorted(function(a,b){
      // Turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.
      //sorts by newest date
      return new Date(b.date) - new Date(a.date);
    });
    console.log(sortedAsc);
    setEntries(sortedAsc);
    
    
  }

  
  const sortDesc = () => {
    const sortedDesc = entries.toSorted(function(a,b){
      // Turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.
      //sorts by oldest date
      return new Date(a.date) - new Date(b.date);
    });
    console.log(sortedDesc);
    setEntries(sortedDesc);
    
  }
    
  
  
  return (
    <div>
      <header
        className="mx-0 flex justify-between items-center p-4 h-32"
        style={{
          backgroundImage:
            'url("https://hopegrows.org/wp-content/uploads/2020/07/Calming-Influence-Of-Nature.jpg")',
        }}
      >
        <h1 className="text-2xl text-white">Personal Diary</h1>
        <div>
        <button
          className="px-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          onClick={() => setIsAddEntryModalOpen(true)}
        >
          Add Entry
        </button>
        <button className='bg-px-4 mx-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-700' onClick={() => sortAsc()}>
          Sort By Newest 
        </button>
        <button className='bg-px-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-700' onClick={() => sortDesc()}>
          Sort By Oldest
        </button></div>
      </header>
      <main >
        
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
