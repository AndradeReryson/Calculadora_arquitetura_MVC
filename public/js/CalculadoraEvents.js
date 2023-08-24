/* botões da calc */
const numbers = document.querySelectorAll('.button__number');
const operators = document.querySelectorAll('.button__operation');
const equals = document.querySelector('.button__equals');
const erase = document.querySelector('.button__erase');
const numbers_operators = [...numbers, ...operators]

/* Todos os botões de delete*/ 
const btn_delete_registro = document.querySelectorAll('.card__btnDeletar')

/* Telinha da calculadora */ 
const DOM_calc_display = document.querySelector('#tela');

/* Caixa histórico */
const DOM_Historico = document.querySelector('.historico')


numbers_operators.forEach(button => {
    button.addEventListener("click", function(){
        let value = button.getAttribute('value');
        DOM_calc_display.value += String(value);
        
        /* animação de apertar o botão */
        button.classList.remove('buttonPressed_animation')    
        
        window.requestAnimationFrame(()=>{
            button.classList.add('buttonPressed_animation')
        })
        
    })
})

erase.addEventListener("click", function(){
    DOM_calc_display.value = "";
    erase.classList.add('buttonPressed_animation')
})

btn_delete_registro.forEach(button =>{
    button.addEventListener("click", function(){
        fetch('/deletar/' + button.getAttribute('data-index'), {
            method: 'DELETE'
        }).then((res) => {
            if(res.ok){
                console.log("deletado com sucesso")
                button.parentNode.classList.add('deletedRegistry_animation')
                setTimeout(() => {
                    DOM_Historico.removeChild(button.parentNode);
                }, 1000) 
            } else {
                console.log("erro ao deletar")
            }
        })

        
    })
})

/* scrollar para o fim do historico */
DOM_Historico.scrollTo({top: DOM_Historico.scrollHeight, behavior:"smooth"});

