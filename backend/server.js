import express from 'express';
import dotenv from 'dotenv';
import multer from 'multer';
import csv from 'csv-parser';
import fs from 'fs';
import OpenAI from 'openai';
import cors from 'cors';

dotenv.config();

const app = express();
const upload = multer({ dest: 'uploads/' });

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

app.use(cors({
    origin: 'http://localhost:3000', // Replace with your frontend URL
}));

app.post('/upload', upload.single('file'), async (req, res) => {
    const results = [];
    fs.createReadStream(req.file.path)
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', async () => {
            try {
                const response = await openai.completions.create({
                    model: "text-davinci-003",
                    prompt: `Extract names and emails from the following data: ${JSON.stringify(results)}`,
                    max_tokens: 150,
                });
                const parsedData = response.choices[0].text;
                res.json({ parsedData });
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
        });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));