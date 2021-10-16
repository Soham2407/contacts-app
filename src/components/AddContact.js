import React from "react";

class AddContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
    };
  }

  addHandler = (e) => {
    e.preventDefault();
    this.props.addContactHandler(this.state);
    this.setState({
      name: "",
      email: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addHandler}>
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
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default AddContact;
