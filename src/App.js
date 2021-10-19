import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import api from "./api/contacts";
import AddContact from "./components/AddContact";
import ContactDetail from "./components/ContactDetail";
import ContactList from "./components/ContactList";
import EditContact from "./components/EditContact";
import Header from "./components/Header";

function App() {
  const [contacts, setContacts] = useState([]);

  // Retrived contacts
  const retrivedContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  };

  const addContactHandler = async (contact) => {
    const request = {
      id: uuidv4(),
      ...contact,
    };
    const response = await api.post("/contacts", request);
    console.log(response);
    setContacts([...contacts, response.data]);
  };

  const deleteContact = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContacts = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContacts);
  };

  const updateContactHandler = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact);
    const editContacts = contacts.map((data) => {
      if (data.id === contact.id) {
        return response.data;
      } else {
        return data;
      }
    });
    setContacts(editContacts);
  };

  useEffect(() => {
    // const retrivedContacts = localStorage.getItem("contacts");
    // if (retrivedContacts) {
    //   setContacts(JSON.parse(retrivedContacts));
    // }
    const getAllContacts = async () => {
      const allContacts = await retrivedContacts();
      if (allContacts) setContacts(allContacts);
    };

    getAllContacts();
  }, []);

  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);

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

        <Route
          path="/edit"
          render={(props) => (
            <EditContact
              {...props}
              updateContactHandler={updateContactHandler}
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
