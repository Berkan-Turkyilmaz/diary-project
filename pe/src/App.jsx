import { useEffect, useState } from 'react'
import './App.css'
import AddEntryModal from './Components/AddEntryModal'
import EntryList from './Components/Entrylist';

function App() {
  const [isAddEntryModalOpen, setIsAddEntryModalOpen] = useState(false);
  const [entries, setEntries] = useState([]) ;

  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem('diaryEntries')) || [];
    setEntries(savedEntries);
  }, []);

  const handleSave = (newEntry) => {
    const updatedEntries = [...entries, newEntry] ;
    setEntries(updatedEntries);
    localStorage.getItem('diaryEntries', JSON.stringify(updatedEntries));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Personal Diary</h1>
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