import React, { useRef } from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = ({ contacts, deleteContact, term, onChangeHandler }) => {
  const inputEl = useRef("");

  const getId = (id) => {
    deleteContact(id);
  };

  const getSearchTerm = () => {
    onChangeHandler(inputEl.current.value);
  };

  const renderContacts = contacts.map((contact) => {
    return <ContactCard contact={contact} getId={getId} key={contact.id} />;
  });
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <h2>Contact List</h2>
        <Link to="/add">
          <button className="btn btn-primary">Add Contact</button>
        </Link>
      </div>
      <div className="mt-3">
        <input
          ref={inputEl}
          type="text"
          className="form-control"
          placeholder="Search..."
          value={term}
          onChange={getSearchTerm}
        />
      </div>

      {renderContacts.length > 0 ? (
        renderContacts
      ) : (
        <div className="mt-2">No Contacts Found</div>
      )}
    </div>
  );
};

export default ContactList;
