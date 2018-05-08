const dotenv = require('dotenv');
dotenv.config({ path: '../.env' });
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const axios = require('axios');
const request = require('request');
const rp = require('request-promise');

// body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/search', async (req, res) => {
  try {
    let results = [];
    await req.body.data.forEach(async (category, index, array) => {
      let options = await {
        method: 'GET',
        url: 'https://api.yelp.com/v3/businesses/search',
        qs:
          {
            term: `${category}`,
            location: `${req.body.zipcode}`,
            limit: '15',
            radius: '10000',
            categories: 'restaurants',
            sort_by: 'review_count'
          },
        headers:
          {
            'Cache-Control': 'no-cache',
            Authorization: `Bearer ${process.env.YELP_API}`
          },
        json: true
      };

      await rp(options)
        .then(function (data) {
          // console.log(data)
          results.push(data);
          if(array.length === results.length) {
            res.json(results)
          }
          // return data
        })
        .catch(function (err) {
          console.log(err)
        })

    })
    // await console.log('results outside', results)
    // res.json(results);
  } catch (e) {
    res.sendStatus(400);
  }

});

app.listen(port, () => console.log(`Listening on port ${port}`));
