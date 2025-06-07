import express from "express";
import cors from "cors";
const app = express();

const PORT = 8080;

app.get("/hello-world", (req, res) => {
  res.send("Hello from Express on /hello-world!");
});

app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
