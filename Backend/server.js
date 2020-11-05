const express = require("express");
const app = express();
const cors = require("cors");
const parser = require("body-parser");
const userRouter = require("./userRouter");
const MongoClient = require("mongodb").MongoClient;

/*MongoClient.connect(
  process.env.MONGO_URI,
  { useUnifiedTopology: true },
  (err, client) => {
    const db = client.db("movies");
    if (err) {
      console.log("Database error: " + err);
    } else {
      console.log("Successful database connection");

      app.use(parser.json());
      app.use(cors());

      userRouter(app, db);

      app.listen(process.env.PORT || 4000, () =>
        console.log("Server is running...")
      );
    }
  }
);*/

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri, { useUnifiedTopology: true });
client.connect((err) => {
  err
    ? console.log("database err:" + err)
    : console.log("successful database connection");

  const collection = client.db("movies").collection("devices");

  app.use(parser.json());
  app.use(cors());

  app.listen(process.env.PORT || 4000, () =>
    console.log("Server is running...")
  );

  client.close();
});
