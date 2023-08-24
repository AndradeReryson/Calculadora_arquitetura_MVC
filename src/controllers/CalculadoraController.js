const calculadoraModel = require("../models/CalculadoraModel");
const model = new calculadoraModel();

class CalculadoraController{
    constructor(){}

    getMain(req, res){
        /* verificando cookie do valor do display da calculadora */
        let ck_resultado = req.cookies.resultado;
        let valor_display_calc;

            if (ck_resultado == undefined || ck_resultado == "0"){
                valor_display_calc = ""
            } else {
                valor_display_calc = ck_resultado;
            }

        /* consulta ao model */
        let dados = model.getRegistros();

        res.render('Calculadora.ejs', {
            valor: valor_display_calc, 
            historico: dados['registros']
        });
    }

    postCalcular(req, res){
        let operacao = req.body.calc_display;
        let resultado = model.calcular(operacao)

        let success = model.addRegistro(operacao, resultado);

        if(success){
            res.cookie('resultado',resultado, {maxAge: 10000});
            res.redirect('/');
        } else {
            res.redirect('/');
        }
        
    }

    deleteRegistro(req, res){
        let index = req.params.id;        
        let success = model.deleteRegistro(index)
        
        if(success){
            return res.sendStatus(204)
        } else {
            return res.sendStatus(404)
        }
    }

}

module.exports = CalculadoraController;