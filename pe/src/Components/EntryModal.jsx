import './EntryModal.css';
import React from 'react';


const EntryModal = ({ entry, onClose }) => {
    if (!entry) return null;
  
    return (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}>&times;</span>
          <h2>{entry.title}</h2>
          <p>Date: {entry.date}</p>
          <img src={entry.imageUrl} alt="Full entry" />
          <p>{entry.content}</p>
        </div>
      </div>
    );
  };
  
  export default EntryModal;