const asyncHandler = require('express-async-handler')
const bodyParser = require('body-parser');
const express = require('express');
const qs = require('querystringify');

const yelp = require('./api/yelp')

const PORT = process.env.PORT || 8080;
const HOST = process.env.IP || '0.0.0.0';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

//Yelp API
app.get(
  '/api/:query',
  asyncHandler(async (req, res) => {
    const query = qs.parse(req.params.query);

    const location = query.location;
    const term = query.term;
    const limit = query.limit || 5;
    let yelpData = await yelp.query(location, term, limit);

    res.send(yelpData.data.search.business);
  })
)

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`)
})