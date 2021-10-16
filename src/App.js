import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import Header from "./components/Header";

function App() {
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuidv4(), ...contact }]);
  };

  const deleteContact = (id) => {
    const newContacts = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContacts);
  };

  useEffect(() => {
    const retrivedContacts = localStorage.getItem("contacts");
    if (retrivedContacts) {
      setContacts(JSON.parse(retrivedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} deleteContact={deleteContact} />
    </div>
  );
}

export default App;
