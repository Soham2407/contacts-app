import React from "react";
import { Link } from "react-router-dom";
import pic from "../images/pic.png";

const ContactCard = ({ contact, getId }) => {
  return (
    <div className="mt-3">
      <div className="card">
        <div className="card-body d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <img src={pic} alt="avatar" style={{ width: "60px" }} />
            <div>
              <Link
                to={{
                  pathname: `/details/${contact.id}`,
                  state: { contact: contact },
                }}
              >
                <h5 className="card-title">{contact.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {contact.email}
                </h6>
              </Link>
            </div>
          </div>
          <div>
            <button
              className="btn btn-danger me-3"
              onClick={() => {
                getId(contact.id);
              }}
            >
              Delete
            </button>

            <Link
              to={{
                pathname: `/edit`,
                state: { contact: contact },
              }}
            >
              <button className="btn btn-primary">Edit</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
