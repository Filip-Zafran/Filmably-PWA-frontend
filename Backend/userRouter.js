module.exports = function (app, db) {
  app
    .route("/user/")

    .get((req, res) => {
      db.collection("users")
        .find({})
        .toArray((err, users) => {
          if (err) return res.json("could not find users: " + err);
          const usersArray = users.map((user) => {
            user;
          });
          res.json(usersArray);
        });
    });
};
