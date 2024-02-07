const express = require('express');
const cors = require('cors');
const app = express();
const port = 3005;

// Enable CORS middleware
app.use(cors());

// Sample data
const posts = [
    { id: 1, qr: "G0-250", title: 'Post 1', content: 'Lorem ipsum 1' },
    { id: 2, qr: "G0-400", title: 'Post 2', content: 'Lorem ipsum 2 ' },


];

// Middleware to parse JSON requests
app.use(express.json())

// Route to get all posts
app.get('/posts', (req, res) => {
    res.json(posts);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
