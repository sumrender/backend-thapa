const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("server working properly");
});

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`server listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();