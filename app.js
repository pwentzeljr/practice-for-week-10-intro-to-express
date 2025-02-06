const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("It's alive?");
})

app.get('/status', (req, res) => {
    res.send("Yes. It's alive.")
})

const port = 5000;
app.listen(port, () => console.log(`Server is listening on port ${port}.`));
