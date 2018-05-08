const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const axios = require('axios');
const request = require('request');

// body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/search', (req, res) => {
  console.log('i am in the backend', req.body);
  console.log(process.env.YELP_API)
  var options = { method: 'GET',
  url: 'https://api.yelp.com/v3/businesses/search',
  qs:
   { term: 'delis',
     location: req.body.zipcode,
     limit: '3',
     radius: '10000',
     categories: 'restaurants',
     sort_by: 'review_count'},
  headers:
   {
     'Cache-Control': 'no-cache',
     Authorization: `Bearer ${process.env.YELP_API}` } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

});

app.listen(port, () => console.log(`Listening on port ${port}`));
