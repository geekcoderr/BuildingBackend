// const readline = require('readline');

// let globalUsername = ''; // Renamed to avoid conflict with the local variable in the callback

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('Enter the username: ', (userInput) => {
//     console.log('User entered:', userInput);
//     globalUsername = userInput; // Assigning the user input to the global variable
//     rl.close();
//     kundli(); // Call the function after getting the input
// });

// async function kundli() {
//     const api = await fetch(`https://api.github.com/users/${globalUsername}`);
//     let res = await api.json();
//     console.log(res);
// }

const http = require('https');

const options = {
	method: 'POST',
	hostname: 'rto-vehicle-information-verification-india.p.rapidapi.com',
	port: null,
	path: '/api/v1/rc/vehicleinfo',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': '2c16a78b42msh2d99bd6a338bbc3p109b53jsn4ff327a303b9',
		'X-RapidAPI-Host': 'rto-vehicle-information-verification-india.p.rapidapi.com'
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on('data', function (chunk) {
		chunks.push(chunk);
	});

	res.on('end', function () {
		const body = Buffer.concat(chunks);
		console.log(JSON.parse(body.toString()));
	});
});

req.write(JSON.stringify({
  reg_no: 'WB12JH2265',
  consent: 'Y',
  consent_text: 'I hear by declare my consent agreement for fetching my information via AITAN Labs API'
}));
req.end();