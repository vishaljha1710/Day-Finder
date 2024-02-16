const express = require("express");
const moment = require("moment");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(express.static("./public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/", (req, res) => {
  let { date } = req.body;
  const formated = moment(date, "DDMMYYYY", true);
  if (!formated.isValid()) res.send("Invalid Date Format");
  else
    res.send(
      `The day on date ${formated.format("DD-MM-YYYY")} : ${formated.format(
        "dddd"
      )}`
    );
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
