import express from "express";
import cors from "cors";
import "./loadEnv.mjs";
import "express-async-errors";
import posts from "./routes/photos.mjs";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

// Load the api/posts routes
app.use("/api/photos", posts);

// start the Express server
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});