function verificando(){
    var vel = window.document.querySelector('input#b')
    var res = window.document.querySelector('div#resu')
    var velo = Number(vel.value)
    res.innerHTML = `<p>Sua velocidade atual é de <strong>${velo}</strong></p>`
    if( velo >= 60 && velo <= 100){
        res.innerHTML += `<p>Sua velocidade é de ${velo} <strong>Multado!</strong></p>`
    }else if(velo >= 100){
            res.innerHTML += `<p>Sua velocidade é de ${velo} <strong>Você esta preso!</strong></p>`
            window.document.body.style.background = 'red'
        }else{
            window.document.body.style.background = 'white'
        }
    res.innerHTML += '<p>Dirija sempre com o cinto de segurança!</p>'
}


/*var vel = 

window.document.write("A velocidade é " + vel + 'km/h<br><br>')
if(vel >= 60){
        window.document.write("Voce ultrapassou a velocidade permitida. Multado!<br><br>")
    }
window.document.write('Não esqueça de usar o cinto de segurança')*/