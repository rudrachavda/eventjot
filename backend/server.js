import express from "express";
import dotenv from "dotenv";
import multer from "multer";
import csv from "csv-parser";
import fs from "fs";
import OpenAI from "openai";
import cors from "cors";

// Load environment variables
dotenv.config();

const app = express();
const upload = multer({ dest: "uploads/" });

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

// Enable CORS for requests from your frontend
app.use(
    cors({
        origin: "http://localhost:5173", // Replace with your frontend's URL if different
    })
);

// Root route to provide a welcome message
app.get("/", (req, res) => {
    res.send("Welcome to the EventJot API! Use POST /upload to upload files.");
});

// Upload route for handling CSV file uploads
app.post("/upload", upload.single("file"), async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
    }

    const filePath = req.file.path;
    const results = [];

    try {
        // Parse the uploaded CSV file
        fs.createReadStream(filePath)
            .pipe(csv())
            .on("data", (data) => results.push(data))
            .on("end", async () => {
                try {
                    if (results.length === 0) {
                        throw new Error("No data found in the uploaded file.");
                    }

                    // Use OpenAI to process the parsed data
                    const prompt = `Extract names and emails from the following data:\n\n${JSON.stringify(
                        results
                    )}`;
                    const response = await openai.completions.create({
                        model: "text-davinci-003",
                        prompt,
                        max_tokens: 150,
                    });

                    const parsedData = response.choices[0]?.text?.trim();
                    if (!parsedData) {
                        throw new Error("Failed to process data with OpenAI.");
                    }

                    // Clean up the uploaded file
                    fs.unlinkSync(filePath);

                    res.json({ parsedData });
                } catch (error) {
                    console.error("Error processing file:", error.message);
                    res.status(500).json({ error: "Failed to process the file" });
                }
            });
    } catch (error) {
        console.error("Error reading the file:", error.message);
        res.status(500).json({ error: "Failed to read the file" });
    }
});

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
