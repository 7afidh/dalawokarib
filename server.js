const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(express.json());

// Connexion DB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connecté ✅"))
  .catch(err => console.log(err));

// Route test
app.get("/", (req, res) => {
  res.send("API DalawoKarib fonctionne 🚀");
});

app.listen(3000, () => {
  console.log("Serveur lancé sur http://localhost:3000");
});