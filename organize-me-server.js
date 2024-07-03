// Load environment variables from a .env file
const dotenv = require('dotenv');
dotenv.config();

// Import required modules and libraries
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const PORT = 6081;

const app = express();

// Middleware setup for JSON parsing and CORS
app.use(express.json({ limit: '50mb' }));
app.use(cors());

mongoose.connect(process.env.ORGANIZE_ME_MONGO_URI);

const db = mongoose.connection;
db.on("error", (error) => console.error("[ERROR]", error));
db.once("open", () => console.log("[DATABASE : CONNECTED]"));

// Sample route for testing
app.get("/hello", async (req, res) => {
    try {
        return res.status(200).send({ message: 'Success !!' });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ error: e.message });
    }
});

// Routes for different functionalities
const userRouter = require("./app/routes/user-route.js");
app.use("/user", userRouter);

// Start the server on port 6081
app.listen(PORT, () => console.log(`organize-me-server: started on port ${PORT}`));
