// Create web server
// 1. Import express
const express = require('express');
// 2. Create express server
const app = express();
// 3. Define a port
const port = 3000;
// 4. Create a route
app.get('/', (req, res) => {
    res.send('Hello World');
});
// 5. Listen to the port
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
// 6. Run the server
// node comments.js