const e = require("express");
const express = require("express");

const router = express.Router();

// Sample movie data
const movies = [
  {
    id: 1,
    title: "Inception",
    ratings: 8.8,
    duration: 148,
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
  },
  {
    id: 2,
    title: "The Matrix",
    ratings: 8.7,
    duration: 136,
    description: "A computer hacker learns about the true nature of his reality and his role in the war against its controllers.",
  },
  {
    id: 3,
    title: "Interstellar",
    ratings: 8.6,
    duration: 169,
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
  }
];

// Route to get all movies
router.get("/movies", (req, res) => {
  res.json(movies);
});

// Route to get a movie by ID
router.get("/movies/:id", (req, res) => {
  const movieId = parseInt(req.params.id, 10);
  const movie = movies.find(m => m.id === movieId);
  if (movie) {
    res.json(movie);
  } else {
    res.status(404).json({ message: "Movie not found" });
  }
})

// Route to add a new movie
router.post("/movies", (req, res) => {
  const newMovie = req.body;
  newMovie.id = movies.length + 1; // Simple ID assignment
  movies.push(newMovie);
  res.status(201).json(newMovie);
});

module.exports = router;