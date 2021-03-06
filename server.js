require("dotenv").config();
const express = require("express");
const layouts = require("express-ejs-layouts");
const app = express();
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("./config/ppConfig");
const isLoggedIn = require("./middleware/isLoggedIn");
const axios = require("axios");

const SECRET_SESSION = process.env.SECRET_SESSION;

app.set("view engine", "ejs");

app.use(require("morgan")("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));
app.use(layouts);

app.use(
  session({
    secret: SECRET_SESSION, // What we actually will be giving the user on our site as a session cookie
    resave: false, // Save the session even if it's modified, make this false
    saveUninitialized: true, // If we have a new session, we save it, therefore making that true
  })
);
app.use(flash());
app.use(passport.initialize()); // Initialize passport
app.use(passport.session()); // Add a session

app.use((req, res, next) => {
  console.log(res.locals);
  res.locals.alerts = req.flash();
  res.locals.currentUser = req.user;
  next();
});

// eventually get use template literal to enter the username based on sign-in
app.get("/", (req, res) => {
  axios
    .get(
      "https://www.codewars.com/api/v1/users/davemolk/code-challenges/completed?"
    )
    .then((response) => {
      // console.log("full response: ", response);
      let myKatasFull = response.data.data;
      console.log("here is response.data.data:", myKatasFull);
      res.render("index", { myKatasFull });
    });
});

app.use("/auth", require("./controllers/auth"));
app.use("/katas", require("./controllers/katas"));
app.use("/subjects", require("./controllers/subjects"));

app.get("/profile", isLoggedIn, (req, res) => {
  const { id, name, email } = req.user.get();
  res.render("profile", { id, name, email });
});

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`🎧 You're listening to the smooth sounds of port ${PORT} 🎧`);
});

module.exports = server;
