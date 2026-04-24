const express = require("express");
const cors = require("cors")
const connection = require("./config/db");
require("dotenv").config();
const app = express();
app.use(express.json());

const PORT = process.env.PORT||8080;
app.use(cors());


const userRouter = require("./route/user.routes");
const videoRouter = require("./route/video.routes");


app.get("/", (req, res) => {
  try {
    res.status(200).json({ message: "Welcome to the nextgen backend" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong,try again" });
  }

})
app.use("/", userRouter);
 app.use("/", videoRouter);

app.listen(PORT, async () => {
  console.log("NextGen Backend Is Running");
  try {
    await connection;
    console.log("Connected to Server At Port: ", PORT);
  } catch (error) {
    console.log(error);
    console.log("error getting to connect with data base");
  }
});
