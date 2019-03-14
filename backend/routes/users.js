const express = require('express');
const router = express.Router();
const request = require('request');

const users_api_url =  'https://reqres.in/api';

/* GET users listing. */
router.get('/', function(req, res, next) {
	const { page } = req.query;

	request.get({
		url: users_api_url + "/users",
		qs: req.query,
		json: true,
	},(err,result,json) => {
		if (err) next(err);
		else res.send(json);
	})

});


router.get('/:id', function(req, res, next) {
	const { id } = req.params;

	request.get({
		url: users_api_url + "/users/" + id,
		qs: req.query,
		json: true,
	},(err,result,json) => {
		if (err) next(err);
		else res.send(json);
	})	
});

module.exports = router;
