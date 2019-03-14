const axios = require('axios');

class Api {

	constructor() {
		this.BASE_URL = 'http://localhost:5000';

		this.paths = {
			'users' : '/users',
		}
	}

	getUserBatch(page) {
		return axios.get(this.BASE_URL + this.paths['users'] + '?page=' + page).then((res) => res.data);
	}

	getOne(id) {
		return axios.get(this.BASE_URL + this.paths['users'] + '/' + id).then((res) => res.data.data);
	}
}

export default Api;