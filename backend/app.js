const express = require("express");
const bodyParser = require("body-parser");
//const cors = require("cors");
const app = express();

const db = require("./models");
//const authRoutes = require("./routes/auth");
//const userRoutes = require("./routes/users");
//const messageRoutes = require("./routes/messages");
//const commentRoutes = require("./routes/comments");
//const likeRoutes = require("./routes/interactions");

db.sequelize.sync().then((req) => {
  app.listen(3306, () => {
    console.log("Le serveur est en train de fonctionner.");
  });
});

//app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(bodyParser.json());
//app.use("/api/auth", authRoutes);
//app.use("/api/users", userRoutes);
//app.use("/api/messages", messageRoutes);
//app.use("/api/comments", commentRoutes);
//app.use("/api/interactions", likeRoutes);

module.exports = app;
