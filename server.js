const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const db = require("./models");

const PORT = process.env.PORT || 8000;

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Workout", 
{ useNewUrlParser: true });

require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

app.listen(PORT, () => {
console.log(`Run port run! On ${PORT}!`);
});