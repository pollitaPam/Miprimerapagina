const express = require('express');
const port = process.env.PORT || 3000;
const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/front/index.html');

});

app.get('/pagina2', (req, res) =>{
    res.sendFile(__dirname + '/front/pagina2.html');
});



app.listen(port, () => {
    console.log('El servidor esta en el puerto ' + port);
});