import express from "express";

const app = express();

app.use(express.static("."));
app.use(express.static("assets"));
const port = 9080;

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`);
});
