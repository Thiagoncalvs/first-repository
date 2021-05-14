function verificar(){
    var nom = window.document.querySelector('input#txtnom')
    var res = window.document.querySelector('div#res')
    
    switch(nom){
        case 0:
            res.innerHTML = window.document.write('Cadastrado')
            break
        default:
            res.innerHTML = window.document.write('Não cadastrado')
            break
    }
}