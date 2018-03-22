var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    multer = require("multer"),
    GridFsStorage = require("multer-gridfs-storage"),
    Grid = require("gridfs-stream"),
    passport = require("passport"),
    LocalStrategy = require("passport-local"),
    bcrypt = require("bcrypt"),
    cors = require("cors")

app.use(cors())

var mongoURI = "mongodb://localhost/eprocurement"
const conn = mongoose.createConnection(mongoURI)

let gfs;

conn.on('error', console.error.bind(console, 'connection error:'));
conn.once('open', function() {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('uploads')
  console.log("we're connected!");
});



var User = require("./models/Users.js")
var userRoute = require("./router/users.js")

passport.use(new LocalStrategy(
  function(username, password, done){
    User.findOne({username: username}, (err, user)=>{
      if(err) {return done(err)};
      if(!user) {return done(null, {msg: "username invalid!!"})};
      if(!bcrypt.compareSync(password, user.password)) {return done(null, {msg: "password invalid!!"})};
      return done(null, user);
    })
  }
))

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use("/api/users", userRoute)

app.listen(3000, ()=>{
    console.log("Connect to port 3000");
})
