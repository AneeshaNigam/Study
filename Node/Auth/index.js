import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.json({
    Hey: "This is the landing page",
  });
});

app.listen(5000);
