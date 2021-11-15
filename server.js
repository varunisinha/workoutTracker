// Pulling required files
const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Listening on PORT 3000
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/workout",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);
// routes for api and html
app.use(require("./routes/apiRoutings.js"));
app.use(require("./routes/htmlRoutings.js"));

app.listen(PORT, () => {
  console.log(`App Listening on port ${PORT}!`);
});
