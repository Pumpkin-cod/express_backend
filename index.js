const express = require("express")

const app = express();

const PORT = 3000;


// Defining routes
app.get('/', (req, res) => {
    res.send('<h1>Welcome Page</h1>');
});

app.get('/about', (req, res) => {
    res.send('<h1>About Page</h1>');
});

// Handling 404 Not Found
app.use((req, res) => {
    res.status(404).send('<h1>404 Page Not Found</h1>');
});

app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`)
})