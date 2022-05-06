require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const fetch = require("node-fetch");
const createError = require("http-errors");

if (!process.env.API_KEY) {
  throw new Error(
    "A Pexels API key stored inside a .env file is required to run this application."
  );
}

const app = express();
app.use(morgan("dev"));

const fetcher = (url, options) => {
  return fetch(url, options).then((res) => res.json());
};

const fetchOptions = {
  headers: {
    Authorization: process.env.API_KEY,
  },
};

// ROUTES //

app.get("/curated/:page?", async (req, res, next) => {
  const page = req.params.page || 1;
  const url = `https://api.pexels.com/v1/curated?page=${page}&per_page=10`;

  try {
    const data = await fetcher(url, fetchOptions);
    if (!data) throw createError(400, "Error fetching curated photos");
    res.send(data);
  } catch (err) {
    next(err);
  }
});

app.get("/search", async (req, res, next) => {
  let { query, page } = req.query;
  const url = `https://api.pexels.com/v1/search?page=${
    page || 1
  }&per_page=10&query=${query}`;

  try {
    const data = await fetcher(url, fetchOptions);
    if (!data) throw createError(400, "Error fetching photos from search term");
    res.send(data);
  } catch (err) {
    next(err);
  }
});

// Catches invalid routes //
app.use((req, res, next) => {
  next(createError(404, "Resource not found. Verify route."));
});

// Handles errors //
app.use((error, req, res, next) => {
  res.status(error.status);
  res.json({
    status: error.status || 500,
    message: error.message,
    stack: error.stack,
  });
});

const PORT = process.env.EXPRESS_PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
