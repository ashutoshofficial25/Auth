const express = require("express");
const bodyParser = require("body-parser");

const dbConfig = require("./config/db.config");
const { default: mongoose } = require("mongoose");

const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Express API for Json Placeholder",
    version: "1.0.0",
    description:
      "This is a REST API application made with Express. It retrieves data from JSONPlaceholder.",
    license: {
      name: "Licensed Under MIT",
      url: "https://spdx.org/licenses/MIT.html",
    },
    contact: {
      name: "JSONPlaceholder",
      url: "https://jsonplaceholder.typicode.com",
    },
  },
  servers: [
    {
      url: "http://localhost:5000/",
      description: "Local server",
    },
  ],
};

const options = {
  swaggerDefinition,

  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);
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

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

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
