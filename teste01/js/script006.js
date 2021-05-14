function verificando(){
    var vel = window.document.querySelector('input#b')
    var res = window.document.querySelector('div#resu')
    var velo = Number(vel.value)
    res.innerHTML = 'Sua velocidade é de ' + velo
}


/*var vel = 

window.document.write("A velocidade é " + vel + 'km/h<br><br>')
if(vel >= 60){
        window.document.write("Voce ultrapassou a velocidade permitida. Multado!<br><br>")
    }
window.document.write('Não esqueça de usar o cinto de segurança')*/