const express = require("express");
const bodyParser = require("body-parser");

const dbConfig = require("./config/db.config");
const { default: mongoose } = require("mongoose");

const userRouter = require("./routes/userRoute");

mongoose.Promise = global.Promise;

mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("database connected");
  })
  .catch((error) => {
    console.log("database not connected  err:", error);
    process.exit();
  });

const app = express();

const port = 5000;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello World! from server" });
});

app.use("/user", userRouter);

//listen for requests
const server = app.listen(port, () => {
  console.log(`App is listening on port no ${port}`);
});
