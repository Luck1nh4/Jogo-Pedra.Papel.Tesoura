// variáveis para os elementos
var elementos = document.querySelectorAll('.player-options div > img')
var playerSelection = "";
var enemyOpt = '';

function validarVitoria(){

    let resultado = document.querySelector('.resultado')
    if(playerSelection == 'papel'){
        if(enemyOpt == 'tesoura'){
            // enemy win
            resultado.innerHTML = 'Que pena! O inimigo venceu.'
            resultado.style.color = '#d62e2e'
            resultado.style.borderTop = '2px solid #000000a1'
            resultado.style.borderBottom = '2px solid #000000a1'

        }else if(enemyOpt == 'pedra'){
            //player win
            resultado.innerHTML = 'Parabéns! Você venceu.'
            resultado.style.color = '#2ed661'
            resultado.style.borderTop = '2px solid #000000a1'
            resultado.style.borderBottom = '2px solid #000000a1'
        }else if(enemyOpt == 'papel'){
            // empate
            resultado.innerHTML = 'Nada legal para os dois. Empate!'
            resultado.style.color = '#2e31d6'
            resultado.style.borderTop = '2px solid #000000a1'
            resultado.style.borderBottom = '2px solid #000000a1'

        }
    }
    
    if(playerSelection == 'tesoura'){
        if(enemyOpt == 'pedra'){
            // enemy win
            resultado.innerHTML = 'Que pena! O inimigo venceu.'
            resultado.style.color = '#d62e2e'
            resultado.style.borderTop = '2px solid #000000a1'
            resultado.style.borderBottom = '2px solid #000000a1'
        }else if(enemyOpt == 'papel'){
            //player win
            resultado.innerHTML = 'Parabéns! Você venceu.'
            resultado.style.color = '#2ed661'
            resultado.style.borderTop = '2px solid #000000a1'
            resultado.style.borderBottom = '2px solid #000000a1'
        }else if(enemyOpt == 'tesoura'){
            // empate
            resultado.innerHTML = 'Nada legal para os dois. Empate!'
            resultado.style.color = '#2e31d6'
            resultado.style.borderTop = '2px solid #000000a1'
            resultado.style.borderBottom = '2px solid #000000a1'
        }
    }

    if(playerSelection == 'pedra'){
        if(enemyOpt == 'papel'){
            // enemy win
            resultado.innerHTML = 'Que pena! O inimigo venceu.'
            resultado.style.color = '#d62e2e'
            resultado.style.borderTop = '2px solid #000000a1'
            resultado.style.borderBottom = '2px solid #000000a1'
        }else if(enemyOpt == 'tesoura'){
            //player win
            resultado.innerHTML = 'Parabéns! Você venceu.'
            resultado.style.color = '#2ed661'
            resultado.style.borderTop = '2px solid #000000a1'
            resultado.style.borderBottom = '2px solid #000000a1'
        }else if(enemyOpt == 'pedra'){
            // empate
            resultado.innerHTML = 'Nada legal para os dois. Empate!'
            resultado.style.color = '#2e31d6'
            resultado.style.borderTop = '2px solid #000000a1'
            resultado.style.borderBottom = '2px solid #000000a1'
        }
    }

    


}

// função para resetar a escolha anterior do inimigo
function resetEnemy(){

    const enemyOptions = document.querySelectorAll('.enemy-options div')
    for(var i = 0; i < enemyOptions.length;i++){

        enemyOptions[i].childNodes[0].style.opacity = 0.3

    }
}

// função da play do inimigo
function enemyPlay(){

    // seleciona um numero aleatório de 0 a 2 através do floor e random
    let rand = Math.floor(Math.random()*3) 
    
    const enemyOptions = document.querySelectorAll('.enemy-options div')
    resetEnemy()
    
    // loop para o valor aleatório de rand ficar em zero opacidade
    for(var i =0; i< enemyOptions.length; i++){
        
        if(i==rand){

            // childNodes para pegar as imagens dentro das div
            enemyOptions[i].childNodes[0].style.opacity = 1
            enemyOpt = enemyOptions[i].childNodes[0].getAttribute('opt')
        }
    }
    validarVitoria()
}



function resetOpacityPlayer(){
      for(var i = 0; i < elementos.length;i++){
        elementos[i].style.opacity = 0.4
    }
}

for(var i = 0; i < elementos.length; i++){
    elementos[i].addEventListener('click', (t)=> {
        resetOpacityPlayer()
        t.target.style.opacity = 1
        playerSelection = t.target.getAttribute('opt')
        console.log(playerSelection)
        enemyPlay()
    })

}