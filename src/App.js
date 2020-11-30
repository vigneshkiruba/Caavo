import React, { Component } from "react";
import axios from "axios";
import Creategroup from "./component/createGroup";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isUsersLoaded: false,
      token: "",
    };
  }
  callusersAPI = (usersAPI) => {
    usersAPI
      .then((result) => result.data)
      .then((json) => {
        this.setState({
          isUsersLoaded: true,
          users: json,
        });
      });
  };

  componentDidMount() {
    const usersAPI = axios.get(
      "https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json"
    );
    this.callusersAPI(usersAPI);
  }

  render() {
    var { users, isUsersLoaded, token } = this.state;
    return (
      <div className="App">
        <h1 style={{ textAlign: "center" }}> Caavo </h1>
        {this.state.isUsersLoaded ? (
          <Creategroup
            isUsersLoaded={isUsersLoaded}
            token={token.token}
            AllUsers={users}
          />
        ) : (
          <div> Loading.... </div>
        )}

        <footer></footer>
      </div>
    );
  }
}

export default App;
