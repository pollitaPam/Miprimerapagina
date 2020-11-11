const express = require('express');
const port = process.env.PORT || 3000;
const app = express();

app.use(express.static("./public"))
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');

});

app.get('/pagina2', (req, res) =>{
    res.sendFile(__dirname + '/public/pagina2.html');
});

app.get('/pagina3', (req, res) => {
    res.sendFile(__dirname + '/public/pagina3.html');
});

app.get('/pagina4', (req, res) => {
    res.sendFile(__dirname + '/public/pagina4.html');
});

app.listen(port, () => {
    console.log('El servidor esta en el puerto ' + port);
});