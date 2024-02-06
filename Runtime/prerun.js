// const readline = require('readline');
// const axios = require('axios');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Enter Domain: ', async (input) => {
//   console.log(`You entered: ${input}`);

//   const options = {
//     method: 'GET',
//     url: 'https://mailcheck.p.rapidapi.com/',
//     params: { domain: input },
//     headers: {
//       'X-RapidAPI-Key': '2c16a78b42msh2d99bd6a338bbc3p109b53jsn4ff327a303b9',
//       'X-RapidAPI-Host': 'mailcheck.p.rapidapi.com'
//     }
//   };

//   try {
//     const response = await axios.request(options);
//     console.log(response.data);
//   } catch (error) {
//     console.error(error);
//   }

//   rl.close();
// });

const readline = require('readline');
const fetch = require('node-fetch');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter Domain: ', async (input) => {
  console.log(`You entered: ${input}`);

  const url = `https://mailcheck.p.rapidapi.com/?domain=${input}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '2c16a78b42msh2d99bd6a338bbc3p109b53jsn4ff327a303b9',
      'X-RapidAPI-Host': 'mailcheck.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }

  rl.close();
});
