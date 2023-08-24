const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.set('view engine','ejs');
app.set('views','./src/views');
app.use(express.json());
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cookieParser());


const calculadoraController = require('./src/controllers/CalculadoraController')
const controller = new calculadoraController();

app.get('/', controller.getMain);
app.post('/calcular', controller.postCalcular)
app.delete('/deletar/:id', controller.deleteRegistro)

app.listen(3000, function(){
    console.log('ouvindo na porta 3000')
})