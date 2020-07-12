var express = require("express");
var dotenv = require("dotenv");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var data = require("./home.json");
var app = express();

dotenv.config();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Database is connected Successfully");
  })
  .catch(err => {
    console.log("Error is", err.message);
  });

app.get("/", (req, res) => {
  res.header("Content-Type", "application/json");
  res.send(JSON.stringify(data));
});

var userRoute = require("./routes/User");
var customerRoute = require("./routes/Customer");
var ambulanceRoute = require("./routes/Ambulance");
var factoryRoute = require("./routes/Factory");
var hospitalRoute = require("./routes/Hospital");
var doctorRoute = require("./routes/Doctor");

app.use("/user", userRoute);
app.use("/customer", customerRoute);
app.use("/ambulance", ambulanceRoute);
app.use("/factory", factoryRoute);
app.use("/hospital", hospitalRoute);
app.use("/doctor", doctorRoute);

app.listen(process.env.PORT, () => {
  console.log(`PORT is listening on ${process.env.PORT}`);
});
