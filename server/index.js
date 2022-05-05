require("dotenv").config();
const express = require("express");
const fetch = require("node-fetch");
const morgan = require("morgan");

const fetcher = (url, options) => {
  return fetch(url, options).then((res) => res.json());
};

const app = express();
app.use(morgan("dev"));

app.get("/curated/:page?", async (req, res) => {
  console.log(req.params);
  const page = req.params.page || 1;
  const url = `https://api.pexels.com/v1/curated?page=${page}&per_page=10`;
  const data = await fetcher(url, {
    headers: {
      Authorization: process.env.API_KEY,
    },
  });
  res.send(data);
});

const PORT = process.env.EXPRESS_PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
