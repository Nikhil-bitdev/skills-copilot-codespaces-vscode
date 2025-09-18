// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

// Middleware
app.use(bodyParser.json());

// In-memory data store
let comments = [];

// Routes

// Get all comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Get a specific comment by ID
app.get('/comments/:id', (req, res) => {
    const comment = comments.find(c => c.id === req.params.id);
    if (comment) {
        res.json(comment);
    } else {
        res.status(404).send('Comment not found');
    }
});

// Create a new comment
app.post('/comments', (req, res) => {
    const newComment = {
        id: uuidv4(),
        text: req.body.text,
        // Add other properties as needed
    };
    // Save the new comment (example: push to an array or save to DB)
    comments.push(newComment); // Make sure 'comments' is defined elsewhere
    res.status(201).json(newComment);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});