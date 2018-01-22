import React, { Component } from 'react';
import '../App.css';

class UsersContainer extends Component {

  constructor(props) {
  super(props)
  this.state = {
    users: []
  }
}

componentDidMount() {
  fetch('http://localhost:3001/api/v1/users.json')
  .then(response => {
    console.log(response)
    this.setState({users: response.data})
  })
  .catch(error => console.log(error))
}

  render() {
    return (
      <div className="userlist">
        Users
      </div>
    )
  }
}

export default UsersContainer
