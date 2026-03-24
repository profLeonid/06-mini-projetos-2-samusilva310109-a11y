function handleClick(){
    const numero = Number(document.getElementById("numero").value)

    
}

function calcTabelaAdicao(num) {
    let listaResultados = []
    for(let i = 1; listaResultados.length < num; i++)
        listaResultados.push(num + i)
        
    return listaResultados
}

function calcTabelaSubtracao(num) {
    let listaResultados = []
    for(let i = 1; listaResultados.length < num; i++)
        listaResultados.push(num - i)

    return listaResultados
}

function calcTabelaMultiplicacao(num) {
    let listaResultados = []
    for(let i = 1; listaResultados.length < num ; i++){
        listaResultados.push(num * i)
    }

    return listaMultiplicaca
}

function calcTabelaDivisao(num) {
    let listaResultados = []
    for(let i = 1; listaResultados.length < num; i++)
        listaResultados.push((num / i).toFixed(2))

    return listaResultados
}

function criarLinha(num, adicao, subtracao, multiplicao, divisao) {
    const tBody = document.getElementById("tbody")
    const tr = document.createElement("tr")

    const tdNum = document.createElement("td")
    tdNum.textContent = num

    const tdAdicao= document.createElement("td")
    tdAdicao.textContent = adicao

    const tdSub = document.createElement("td")
    tdSub.textContent = subtracao

    const tdMult = document.createElement("td")
    tdMult.textContent = multiplicao

    const tdDiv = document.createElement("td")
    tdDiv.textContent = divisao

    tr.replaceChildren(tdNum, tdAdicao, tdSub, tdMult, tdDiv)
    tBody.appendChild(tr)

    return tBody
}