import { useState, useEffect } from 'react';
import initialContacts from './contacts.json';
import ContactForm from './components/contactForm/ContactForm';
import SearchBox from './components/searchBox/SearchBox';
import ContactList from './components/contactList/ContactList';
import './App.css';

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContact = window.localStorage.getItem("saved-contact");
    if (savedContact !== null) {
      return JSON.parse(savedContact);
    }
    return initialContacts;
  });

  const [searchValue, setsearchValue] = useState("");

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId)
    });
  };

  const visibleContacts = contacts.filter((contact) => 
    contact.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  useEffect(() => {
    window.localStorage.setItem("saved-contact", JSON.stringify(contacts));
  }, [contacts]);

  return (  
      <div>
        <h1 className='title'>Phonebook</h1>
        <ContactForm onAdd={addContact} />
        <SearchBox value={searchValue} onSearch={setsearchValue} />
        <ContactList contacts={visibleContacts} onDelete={deleteContact}/>
      </div>
  );
}

export default App;
