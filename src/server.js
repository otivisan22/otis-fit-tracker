const express = require("express");

const path = require("path");

const { connect } = require("./seeders/db");

const routes = require("./routes");

const PORT = process.env.PORT || 4000;

const app = express();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "./public")));

// router
app.use(routes);

// connect to database and start server
const init = async () => {
  await connect();
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
};

init();
