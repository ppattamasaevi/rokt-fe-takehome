require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const fetch = require("node-fetch");

const app = express();
app.use(morgan("dev"));

// HELPERS //

const fetcher = (url, options) => {
  return fetch(url, options).then((res) => res.json());
};

const fetchOptions = {
  headers: {
    Authorization: process.env.API_KEY,
  },
};

// ROUTES //

app.get("/curated/:page?", async (req, res) => {
  const page = req.params.page || 1;
  const url = `https://api.pexels.com/v1/curated?page=${page}&per_page=10`;
  const data = await fetcher(url, fetchOptions);
  res.send(data);
});

app.get("/search", async (req, res) => {
  let { query, page } = req.query;

  const url = `https://api.pexels.com/v1/search?page=${
    page || 1
  }&per_page=10&query=${query}`;
  const data = await fetcher(url, fetchOptions);
  res.send(data);
});

const PORT = process.env.EXPRESS_PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
