//import
const express = require("express");
//istanza
const app = express();
//numero porta
const port = 3000;

//avvia il server
app.listen(port, () => {
    console.log(`Game server listening on port ${port}`)
})
