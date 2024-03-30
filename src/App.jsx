import { useState } from 'react';
import contacts from './contacts.json';
import ContactForm from './components/contactForm/ContactForm';
import ContactList from './components/contactList/ContactList';
import './App.css';

function App() {
  const [contakts, setContakts] = useState(contacts);

  const addContact = (newContact) => {
    setContakts((prevContacts) => {
      return [...prevContacts, newContact];
    })
  };

  const deleteContact = (contactId) => {
    setContakts(prevContacts => {
      return prevContacts.filter((contact) => contact.id !== contactId)
    })
  }

  return (  
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAdd={addContact}/>
        <ContactList contakts={contakts} onDelete={deleteContact}/>
      </div>)
}

export default App;
