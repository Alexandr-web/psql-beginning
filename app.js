const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const userRouter = require("./routes/user.routes");
const sequelize = require("./db");

require("./models/Person");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api", userRouter);

const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    app.listen(3000, () => console.log("Connection has been established successfully."));
  } catch (err) {
    console.log(err);
  }
}

connectToDatabase();

module.exports = app;