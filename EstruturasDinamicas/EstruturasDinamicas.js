// CONFIGURAÇÃO DE MENUS E SUBMENUS
const respostaAllMenus = fetch("./EstruturasDinamicas.json").then(respostaData => {
    return respostaData.json();
}).then(jsonData => {
    var countItensTeste = Object.keys(jsonData.ItensTeste).length

    let dadosAdd = {
        "ObjHtml": "p",
        "TipoAtributo": "class",
        "Atributo": "paragrafo",
        "TipoAtributoTwo": " ",
        "AtributoTwo": " ",
        "localApply": ".ContOne",
        "Conteudo": "Esse é uma parágrafo teste"
    }

    let transfDado = JSON.stringify(dadosAdd)

    // transfDado.concat(jsonData.ItensTeste)
    console.log(jsonData)

//CRONOWEEK
for(var i = 0 ; i < countItensTeste ; i++){
    var obj = jsonData.ItensTeste[i];

    var ObjElemento = document.createElement(obj.ObjHtml)
    ObjElemento.setAttribute(obj.TipoAtributo, obj.Atributo)

    if ( obj.TipoAtributoTwo && obj.AtributoTwo != " "){
        ObjElemento.setAttribute(obj.TipoAtributoTwo, obj.AtributoTwo)
    }

    if ( obj.Conteudo != " "){
        ObjElemento.textContent = obj.Conteudo
    }

    var LugarAplicar = document.querySelector(obj.localApply)
    LugarAplicar.appendChild(ObjElemento)

}

document.querySelectorAll('.ItemConteudo').forEach( (item)=>{
    item.addEventListener('click', ()=>{
        item.classList.toggle('ItemClicado')
    })
})

}).catch(erro => { console.log(erro); });