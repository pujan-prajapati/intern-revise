import React, { Component } from "react";

export class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: null,
      users: [],
      counter: 0,
    };
  }

  componentDidMount = () => {
    let Data = [
      {
        name: "Pujan",
        email: "abc123@example.com",
        role: "Admin",
        phone: "1234567890",
      },
    ];

    setTimeout(() => {
      this.setState({
        users: Data,
      });
    }, 2000);
  };

  render() {
    return (
      <>
        <h2>Table</h2>
        <table>
          <thead>
            <tr>
              <th>S.N.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.role}</td>
                <td>{item.phone}</td>
                <td>Edit/Delete</td>
              </tr>
            ))}
          </tbody>
        </table>

        <br />
        <br />

        <h2>Counter</h2>
        <div>
          <h3>{this.state.counter}</h3>
          <button
            onClick={() => {
              this.setState({
                counter: this.state.counter + 1,
              });
            }}
          >
            Increase
          </button>
          <button
            onClick={() => {
              this.setState({
                counter: this.state.counter - 1,
              });
            }}
          >
            Decrease
          </button>
        </div>
      </>
    );
  }
}
