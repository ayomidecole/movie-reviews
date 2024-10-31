import express from "express";
import cors from "cors";
import moviesRouter from "./api/movies.js";

const app = express();

app.use(cors());
app.use(express.json());

// Set up the router for movies
app.use("/api/v1/movies", moviesRouter);

// Handle 404 errors for any routes not defined
app.use("*", (req, res) => res.status(404).json({ error: "not found" }));

// Set the port and start listening
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
