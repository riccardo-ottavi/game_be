//import
const express = require("express");
//istanza
const app = express();
//numero porta
const port = 3000;

// Route di test
app.get('/', (req, res) => {
    res.json({ message: 'Server is running' });
});

//avvia il server
app.listen(port, () => {
    console.log(`Game server listening on port ${port}`)
})
