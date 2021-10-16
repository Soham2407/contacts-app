import React from "react";
import ContactCard from "./ContactCard";

const ContactList = ({ contacts, deleteContact }) => {
  const getId = (id) => {
    deleteContact(id);
  };
  const renderContacts = contacts.map((contact) => {
    return <ContactCard contact={contact} getId={getId} key={contact.id} />;
  });
  return <div>{renderContacts}</div>;
};

export default ContactList;
