import React from "react";
import { Link } from "react-router-dom";
import pic from "../images/pic.png";

const ContactDetail = (props) => {
  const { name, email } = props.location.state.contact;
  return (
    <div className="d-flex justify-content-center">
      <div className="card" style={{ width: "18rem" }}>
        <img src={pic} className="card-img-top" alt="pic" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{email}</p>
          <Link to="/">
            <button className="btn btn-primary">Go Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
