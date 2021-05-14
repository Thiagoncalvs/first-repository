function calcular(){
    var txtv = window.document.querySelector('input#txtvel')
    var res = window.document.querySelector('div#res')
    var vel = Number(txtv.value)
    res.innerHTML = '<p>Sua velocidade atual é de ' + '<strong>' + vel + '</strong></p>'
    if( vel > 60){
        res.innerHTML += '<p>Sua velocidade é de ' + vel + ' , <strong>Multado!</strong></p>'
    }else{
        res.innerHTML += '<p>Sua velocidade é de ' + vel + ' , <strong>Pode seguir</strong></p>'
    }
    res.innerHTML += '<p>Dirija sempre com o cinto de segurança!</p>'
}
