function handleClick(){
    const numero = Number(document.getElementById("numero").value)

    if(numero < 1){
        window.alert("O número digitado deve ser maior ou igual a 1")
        document.getElementById("numero").value = ''
    }else{
        let listaNumeros = gerarListaDeNumeros(numero)
        let adicaoColuna = calcColunaAdicao(numero)
        let subtracaoColuna = calcColunaSubtracao(numero)
        let multiplicaoColuna = calcColunaMultiplicacao(numero)
        let divisaoColuna = calcColunaDivisao(numero)

        document.getElementById("tbody").replaceChildren()

        for (let i = 0; i < numero; i++) {
            criarLinha(listaNumeros[i], adicaoColuna[i], subtracaoColuna[i], multiplicaoColuna[i], divisaoColuna[i])
        }

        document.getElementById("numero").value = ''
    }
        
}

function gerarListaDeNumeros(qtdeNum) {
    let listaNumeros = [] 
    for (let item = 1; item <= qtdeNum; item++) {
        listaNumeros.push(item)
    }

    return listaNumeros
}

function calcColunaAdicao(num) {
    let listaResultados = []
    for(let i = 1; listaResultados.length < num; i++)
        listaResultados.push(num + i)
        
    return listaResultados
}

function calcColunaSubtracao(num) {
    let listaResultados = []
    for(let i = 1; listaResultados.length < num; i++)
        listaResultados.push(num - i)

    return listaResultados
}

function calcColunaMultiplicacao(num) {
    let listaResultados = []
    for(let i = 1; listaResultados.length < num ; i++){
        listaResultados.push(num * i)
    }

    return listaResultados
}

function calcColunaDivisao(num) {
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