const fs = require('fs');
const math = require('mathjs')
const caminho_json = './data/historico.json';

class CalculadoraModel{

    getRegistrosUltimaPos(){
        let data = fs.readFileSync(caminho_json);
        let historico = JSON.parse(data);
        let registros = historico['registros'];

        if(registros.length > 0){
            return parseInt(registros[registros.length-1].id);
        } else {
            return 0; /* se não tiver registros, retorne 0 */ 
        }
        
    }

    getRegistros(){
        let data = fs.readFileSync(caminho_json);
        let historico = JSON.parse(data); 
        return historico;
    }

    addRegistro(operacao, resultado){
        let data = fs.readFileSync(caminho_json);
        let historico = JSON.parse(data); 

        historico['registros'].push({
            'id': this.getRegistrosUltimaPos() + 1,
            'operacao':operacao,
            'resultado':resultado
        })
        
        try{
            fs.writeFileSync(caminho_json, JSON.stringify(historico), 'utf8');
            return true
        }catch(error){
            return false
        }
        
    }

    deleteRegistro(index){
        let data = fs.readFileSync(caminho_json);
        let historico = JSON.parse(data); 
        let registros = historico['registros']
        
        registros.forEach((registro, idx) => {
            if (registro.id == index) {
                return registros.splice(idx, 1)
            }
        });

        try{
            fs.writeFileSync(caminho_json, JSON.stringify(historico), 'utf8');
            return true;
        }catch(error){
            return false;
        }
    }

    calcular(operacao){
        try{    
            let resultado = math.evaluate(operacao)
            return resultado
        } catch(err){
            return "Operação Invalida";
        }
    }

}

module.exports = CalculadoraModel;