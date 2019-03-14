import React, { Component } from 'react';
import Api from '../services/Api';
import { Link } from "react-router-dom";

import './User.css';
class User extends Component {
  
  constructor() {
  	super();
  	this.state = {
    		'user' : {
          "first_name": "",
          "last_name": "",
        }
,  	}
  	this.api = new Api();

  }

  componentDidMount() {
    let { id } = this.props.match.params;
    let api = new Api();
    api.getOne(id).then((user) => this.setState({user: user}))
  }


  render() {
    return (
      <div className="container">
        <img className='profile-picture' src={this.state.user.avatar} alt='profile'/>
        <h3 className='user-name'>{this.state.user.first_name + " " + this.state.user.last_name}</h3>
        <Link to="/">
          <button className='btn'>Ir atrás</button>
        </Link>
      </div>
    );
  }
}

export default User;