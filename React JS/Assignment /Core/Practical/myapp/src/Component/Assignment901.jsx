import React, { Component } from "react";

class Assignment901 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        this.setState({
          users: data,
          loading: false,
        });
      })
      .catch((error) => {
        this.setState({
          error: error.message,
          loading: false,
        });
      });
  }

  render() {
    const { users, loading, error } = this.state;

    if (loading) {
      return <h2>Loading...</h2>;
    }

    if (error) {
      return <h2>Error: {error}</h2>;
    }

    return (
      <div>
        <h1>User List</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Assignment901;
