import express from "express";

const app = express();
const port = 3333;

app.get("/", (req, res) => {
  res.send("<h1>hello world</h1>");
});

app.get("/contact", (req, res) => {
  res.json({
    message: {
      phone: "9999999999",
      name: "Kayo Elias",
    },
  });
});

app.get("/about", (req, res) => {
  res.json({
    message: {
      role: "Full-stack developer",
      favoriteGame: "final fantasy",
    },
  });
});

app.listen(port, () => {
  console.log(`server running on port: ${port}`);
});
