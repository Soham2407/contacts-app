import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = ({ contacts, deleteContact }) => {
  const getId = (id) => {
    deleteContact(id);
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
      {renderContacts}
    </div>
  );
};

export default ContactList;
