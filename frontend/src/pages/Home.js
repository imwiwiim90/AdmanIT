import React, { Component } from 'react';
import './Home.css'
import Api from '../services/Api'
import { Link } from "react-router-dom";


class Home extends Component {
  
  constructor() {
  	super();
  	this.state = {
  		'users' : [],
  		'page' : 1,
  		'total_pages': 10,
  	}
  	this.api = new Api();

  	this.previousPage = this.previousPage.bind(this);
  	this.nextPage = this.nextPage.bind(this);
  	this.getPage = this.getPage.bind(this);
  }

  componentDidMount() {
  	this.getPage(this.state.page);
  }

  getPage(page) {
  	this.api.getUserBatch(page)
  	.then((data) => this.setState({
  		'total_pages' : data.total_pages,
  		'users' : data.data
  	}))
  }

  nextPage() {
  	let page = this.state.page;
  	if (page === this.state.total_pages) return;
  	page += 1;
  	this.setState({
  		page: page,
  	});
  	this.getPage(page);
  }

  previousPage() {
  	let page = this.state.page;
  	if (page === 1) return;
  	page -= 1;
  	this.setState({
  		page: page,
  	});
  	this.getPage(page);
  }

  render() {
    return (
      <div className="container">
        <ul className='user-list' >
        	{
        		this.state.users.map( (user) => (
        			<Link key={user.id} to={'/user/' + user.id}>
	        			<li className='row align-items-center'>
	        				<div className='avatar' >
	        					<img src={user.avatar} alt="avatar"/>
	        				</div>
	        				<div className='col-md-auto'>
	    						{user.first_name + " " + user.last_name}
	        				</div>
	        			</li>
        			</Link>
        		))
        	}
        </ul>
        <div className='row pager'>
        	<div className='col' onClick={this.previousPage}>
        		previous
        	</div>
        	<div className='col'>
        		{ this.state.page }
        	</div>
        	<div className='col' onClick={this.nextPage}>
        		next
        	</div>
        </div>
      </div>
    );
  }
}

export default Home;