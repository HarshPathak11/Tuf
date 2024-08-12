import express from "express";
const app=express()
import cors from 'cors'
import mysql2 from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()

app.use(cors())
app.use(express.json())


const db = mysql2.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');
});


app.post('/addcards', (req, res) => {
    const { question, answer } = req.body;
    const query = 'INSERT INTO cards (question, answer) VALUES (?, ?)';
    db.query(query, [question, answer], (err, result) => {
        if (err) {
            console.error('Error creating card:', err);
            res.status(500).json({ error: 'Failed to create card' });
            return;
        }
        res.status(201).json({ id: result.insertId });
    });
});

// Read all cards
app.get('/getcards', (req, res) => {
    const query = 'SELECT * FROM cards';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching cards:', err);
            res.status(500).json({ error: 'Failed to fetch cards' });
            return;
        }
        res.status(200).json(results);
    });
});

// Update a card by ID
app.post('/change', (req, res) => {
    const { id } = req.body;
    const { question, answer } = req.body;
    const query = 'UPDATE cards SET question = ?, answer = ? WHERE id = ?';
    db.query(query, [question, answer, id], (err, result) => {
        if (err) {
            console.error('Error updating card:', err);
            res.status(500).json({ error: 'Failed to update card' });
            return;
        }
        res.status(200).json({ message: 'Card updated successfully' });
    });
});

// Delete a card by ID
app.post('/del', (req, res) => {
    const { id } = req.body;
    console.log(id);
    const query = 'DELETE FROM cards WHERE id = ?';
    db.query(query, [id], (err, result) => {
        if (err) {
            console.error('Error deleting card:', err);
            res.status(500).json({ error: 'Failed to delete card' });
            return;
        }
        res.status(200).json({ message: 'Card deleted successfully' });
    });
});

app.listen(8000,()=>{
    console.log("server running on http://localhost:8000")
})