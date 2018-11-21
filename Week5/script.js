const axios = require('axios');

// Make a request for a user with a given ID
axios.get('https://xkcd.com/500/info.0.json')
  .then(function (response) {
    // handle success
    console.log(response.status);
  })
  .catch(function (error) {
    // handle error
    console.log(error.status);
    console.log("Y NO RESPONSE???");
  })
  .then(function () {
    // always executed
  });
