// App component
import React, { useState } from 'react';
import ContactList from "./components/ContactList";
import SelectedContact from "./components/SelectedContact";
import './App.css';

function App() {
  const [selectedContact, setSelectedContact] = useState(null);// Initializing selectedContact state with null
  const handleReturn = () => {
    setSelectedContact(null);

  };


  return (
    <>
      {selectedContact ? (
        <SelectedContact contact={selectedContact} onReturn={handleReturn} />
      ) : (
        <ContactList setSelectedContact={setSelectedContact} />
      )}
    </>
  )
}

export default App;