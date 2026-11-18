import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectDB from "./config/db.config.js";
import categoryRouter from "./routers/category.router.js";

// Create Express application
const app = express();

// Middleware
app.use(express.json());
app.use("/api/category",categoryRouter)

// Connect Database and Start Server
const startServer = async () => {
    try {
        await connectDB();

        app.listen(process.env.PORT, () => {
            console.log(
                `Server running on port ${process.env.PORT}`
            );
        });

    } catch (error) {
        console.log("Server Error:", error.message);
        process.exit(1);
    }
};

// Test API
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Express Server is Running"
    });
});

startServer();