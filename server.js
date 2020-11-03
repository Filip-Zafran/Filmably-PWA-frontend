const express = require("express");
const mongo = require("mongodb").MongoClient;
const app = express();

/*mongo.connect(
  process.env.MONGO_URI,
  { useUnifiedTopology: true },
  (err, client) => {
    let db = client.db("movies");
    if (err) {
      console.log("Database err:" + err);
    } else {
      console.log("Successful database connection");
    }
  }
);*/

app.get("/heartbeat", function (req, res) {
  res.send("<3");
});

app.use("/", express.static(__dirname + "build"));

app.get("/", function (req, res, next) {
  res.sendFile(__dirname + "/build" + "/index.html");
});

app.listen(process.env.PORT || 3000, () => console.log("server is running..."));
