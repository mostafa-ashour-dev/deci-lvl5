import express from "express";
import connectDb from "./lib/db.lib.js";
import routes from "./router/main.routes.js";
import { PORT } from "./config/env.config.js";

const app = express();

// Middleware
app.use(express.json());

// Redirect root to API
app.get("/", (req, res) => {
    res.redirect("/api/v1/");
});

// Connect to MongoDB
connectDb();

// Routes
app.use("/api/v1/", routes);

// Start server
app.listen(PORT, () => {
    console.log(` [api] Listening on port ${PORT}`);
});