const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const PORT = process.env.PORT || 4004;

const app = express();

const api = require("./routes/api");
const html = require("./routes/html");

app.use = ("/api/", api);
app.use = ("/", html);

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
