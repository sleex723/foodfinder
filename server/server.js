const dotenv = require('dotenv');
dotenv.config({ path: '../.env' });
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const axios = require('axios');
const request = require('request');
const rp = require('request-promise');

const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
	app.use(express.static('client/build'));
} else {
	app.use(express.static(__dirname + '/../client/build'));
}

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
            limit: '5',
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
          let categoryName = options.qs.term
          let info = {
            category: categoryName.toUpperCase(),
            restaurants: data
          }
          results.push(info);
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
