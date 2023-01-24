
const express = require("express");

const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(require("./routes/twit.route"));
app.use(require("./routes/user.route"));
app.use(require("./routes/comment.route"))


mongoose
  .connect(
    "mongodb+srv://jahar:9626562131@cluster0.ksjqjid.mongodb.net/Twit"
  )

  .then(() => console.log("Успешно соединились с сервером MongoDB"))
  .catch(() => console.log("Ошибка при соединении с сервером MongoDB"));

app.listen(4000, () => {
  console.log("Сервер запущен успешно"); 
});
