const express = require ("express");
const app = express();
const PORT = 3000;

const posts = [
  {
    id: 1,
    title: "Primo post",
    content: "Questo è il contenuto del primo post.",
    image: "./images/ciambellone.jpeg",
    tags: ["introduzione", "benvenuto"]
  },
  {
    id: 2,
    title: "Secondo post",
    content: "Questo è il contenuto del secondo post.",
    image: "./images/cracker_barbabietola.jpeg",
    tags: ["aggiornamento", "notizie"]
  },
  {
    id: 3,
    title: "Terzo post",
    content: "Questo è il contenuto del terzo post.",
    image: "./iamges/pane_fritto_dolce.jpeg",
    tags: ["evento", "annuncio"]
  },
  {
    id: 4,
    title: "Quarto post",
    content: "Questo è il contenuto del quarto post.",
    image: "./images/pasta_barbabietola.jpeg",
    tags: ["tutorial", "guida"]
  },
  {
    id: 5,
    title: "Quinto post",
    content: "Questo è il contenuto del quinto post.",
    image: "./images/torta_paesana.jpeg",
    tags: ["recensione", "opinione"]
  }
]


app.listen(PORT, () => {
  console.log(`App listening on port http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Server del mio blog")
});