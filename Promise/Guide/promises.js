'use strict';

const fetch = require('node-fetch');
const request = require('request');

/*request.get('http://httpbin.org/get', (error, response, body) => {
	if (error) {
		console.log('Oh shit. Sth went wrong:');
		console.err(error.message);
		return;
	}

	console.log('Request done. Response status code: %d', response.statusCode);
});*/

function extractStatusCode(response) {
	return response.status;
}

/*fetch('http://httpbin.org/get')
	.then(extractStatusCode)
	.then(statusCode => {
		console.log('Request using Promises done. Response status code: %d', statusCode);
	})
	.catch(eorror => {
		console.error('Oh shit. Sth went wrong with the promise code:');
		console.error(error.message);
	});*/

fetch('invalid URL')
.then(extractStatusCode, errorInFetch => {
	console.error('An error occurred in the fetch call.');
	console.error(errorInFetch.message);
	return null;
})
.then(statusCode => {
	console.log('Request using Promises done. Response status code: %d', statusCode);
})
.catch(error => {
	console.error('This will never be executed');
});