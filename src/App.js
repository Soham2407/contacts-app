import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import AddContact from "./components/AddContact";
import ContactDetail from "./components/ContactDetail";
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
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <ContactList
              {...props}
              contacts={contacts}
              deleteContact={deleteContact}
            />
          )}
        />

        <Route
          exact
          path="/add"
          render={(props) => (
            <AddContact {...props} addContactHandler={addContactHandler} />
          )}
        />

        <Route path="/details/:id" component={ContactDetail} />
      </Switch>
    </div>
  );
}

export default App;
