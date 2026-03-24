function handleClick() {
   const quantidade = Number(document.getElementById("quantidade").value)

   const listaNumeros = gerarListaDeNumeros(quantidade)
   const listaPares = gerarListaPares(quantidade)
   const listaImpares = gerarListaImpares(quantidade)
   const listaMulti5 = gerarListaMulti5(quantidade)
   const listaPotencias = gerarListaPot2(quantidade)

   document.getElementById("tbody").replaceChildren()

   for(let i = 0; i < quantidade; i++){
    criarLinha(listaNumeros[i], listaPares[i], listaImpares[i], listaMulti5[i], listaPotencias[i])
   }

}

function gerarListaDeNumeros(qtdeNum) {
    let listaNumeros = [] 
    for (let item = 1; item <= qtdeNum; item++) {
        listaNumeros.push(item)
    }

    return listaNumeros
}

function gerarListaPares(qtdeNum) {
    let listaPares = []
    for (let item = 2; listaPares.length < qtdeNum ; item+=2) {
         listaPares.push(item)
    }

    return listaPares
}

function gerarListaImpares(qtdeNum) {
    let listaImpares = []
    for (let item = 2; listaImpares.length < qtdeNum ; item+=2) {
        listaImpares.push(item - 1)
    }

    return listaImpares
}

function gerarListaMulti5(qtdeNum) {
    let listaMulti5 = []
    for (let i = 5; listaMulti5.length < qtdeNum; i+=5) {
        listaMulti5.push(i)
    }

    return listaMulti5
}

function gerarListaPot2(qtdeNum) {
    let listaPotencias = []
    for(let i = 1; listaPotencias.length < qtdeNum; i++){
        listaPotencias.push(2**i)
    }

    return listaPotencias
}

function criarLinha(num, par, impar, mult5, pot){
    const tbody = document.getElementById("tbody")
    const tr = document.createElement("tr")
    
    const tdNum = document.createElement("td")
    tdNum.textContent = num

    const tdPar = document.createElement("td")
    tdPar.textContent = par

    const tdImpar = document.createElement("td")
    tdImpar.textContent = impar

    const tdMult5 = document.createElement("td")
    tdMult5.textContent = mult5

    const tdPot = document.createElement("td")
    tdPot.textContent = pot

    tr.replaceChildren(tdNum, tdPar, tdImpar, tdMult5, tdPot)

    tbody.appendChild(tr)

    return tbody
}