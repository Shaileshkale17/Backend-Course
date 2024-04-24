import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

const jock = [
  {
    id: 1,
    joke: "Why don't scientists trust atoms? Because they make up everything!",
  },
  {
    id: 2,
    joke: "I'm reading a book on anti-gravity. It's impossible to put down!",
  },
  {
    id: 3,
    joke: "Parallel lines have so much in common. It's a shame they'll never meet.",
  },
  {
    id: 4,
    joke: "Why did the scarecrow win an award? Because he was outstanding in his field!",
  },
  {
    id: 5,
    joke: "I told my wife she was drawing her eyebrows too high. She looked surprised.",
  },
  {
    id: 6,
    joke: "Why don't skeletons fight each other? They don't have the guts.",
  },
  {
    id: 7,
    joke: "What do you call fake spaghetti? An impasta!",
  },
  {
    id: 8,
    joke: "Why couldn't the bicycle stand up by itself? It was two tired.",
  },
  {
    id: 9,
    joke: "How does a penguin build its house? Igloos it together.",
  },
  {
    id: 10,
    joke: "I'm on a seafood diet. I see food and I eat it.",
  },
];

app.get("/", (req, res) => {
  res.send("Welcome to the world");
});

app.get("/jock", (req, res) => {
  res.send(jock);
});
app.listen(port, () => {
  console.log(`port listening on ${port}`);
});
