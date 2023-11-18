require("dotenv").config("http");
const http = require("http");
const mongoose = require("mongoose");
const app = require("./app");
const PORT = process.env.PORT;

const MONGODBLOCAL_URL = process.env.MONGODBLOCAL_URL;

let server = http.createServer(app);
mongoose
  .connect(MONGODBLOCAL_URL)
  .then(() => {
    console.log("db is connected");
  })
  .catch((err) => {
    console.log(err);
  });

server.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`listening on the port  ${PORT} ....`);
});
