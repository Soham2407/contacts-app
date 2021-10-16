import React from "react";
import pic from "../images/pic.png";

const ContactCard = ({ contact, getId }) => {
  return (
    <div className="mt-3">
      <div className="card">
        <div className="card-body d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <img src={pic} alt="avatar" style={{ width: "60px" }} />
            <div>
              <h5 className="card-title">{contact.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{contact.email}</h6>
            </div>
          </div>
          <button
            className="btn btn-danger"
            onClick={() => {
              getId(contact.id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
