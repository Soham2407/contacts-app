import React from "react";

class EditContact extends React.Component {
  constructor(props) {
    super(props);
    const { id, name, email } = props.location.state.contact;
    this.state = {
      id: id,
      name: name,
      email: email,
    };
  }

  updateHandler = (e) => {
    e.preventDefault();
    this.props.updateContactHandler(this.state);
    this.setState({
      name: "",
      email: "",
    });
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <h2>Edit Contact</h2>
        <form onSubmit={this.updateHandler}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </form>
      </div>
    );
  }
}

export default EditContact;
