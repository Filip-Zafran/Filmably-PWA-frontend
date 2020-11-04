const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;
const cors = require("cors");
const parser = require("body-parser");

MongoClient.connect(
  process.env.MONGO_URI,
  { useUnifiedTopology: true },
  (err, client) => {
    const db = client.db("my-daily-climb");
    if (err) {
      console.log("Database error: " + err);
    } else {
      console.log("Successful database connection");

      app.use(parser.json());
      app.use(cors());

      app.listen(process.env.PORT || 4000, () =>
        console.log("Server is running...")
      );
    }
  }
);
