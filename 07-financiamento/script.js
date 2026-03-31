function handleClick(){
   const valorTotal = Number(document.getElementById("valor-total").value)
   const taxaJuros = Number(document.getElementById("taxa-juros").value)
   const numParcelas = Number(document.getElementById("num-parcelas").value)

   const tbody = document.getElementById("tbody")
   tbody.replaceChildren()

    let listaFinanciamento = calcularFinanciamento(valorTotal, taxaJuros, numParcelas)

    listaFinanciamento.forEach(linha => {
        const tr = document.createElement("tr")

        const tdMes = document.createElement("td")
        tdMes.textContent = linha.mes
       

        const tdParcela = document.createElement("td")
        tdParcela.textContent = formatarMoeda(linha.parcela)

        const tdJurosMes = document.createElement("td")
        tdJurosMes.textContent = formatarMoeda(linha.juros)
        tdJurosMes.className = "col-juros"

        const tdTotalMes = document.createElement("td")
        tdTotalMes.textContent = formatarMoeda(linha.total)
        tdTotalMes.className = "col-total"

        const tdSaldo = document.createElement("td")
        tdSaldo.textContent = formatarMoeda(linha.saldo)

        tr.replaceChildren(tdMes, tdParcela, tdJurosMes, tdTotalMes, tdSaldo)
        tbody.appendChild(tr)
    })


    
}


function calcularFinanciamento(valorTotal, taxaJuros, numParcela) {
    let listaFinanciamento = []

    let valorParcela = valorTotal / numParcela
    let saldoDevedor = valorTotal

    for (let i = 1; saldoDevedor > 0; i++){
        let jurosMes = saldoDevedor * (taxaJuros / 100)
        let totalMes = valorParcela + jurosMes

        saldoDevedor -= valorParcela    
        
        listaFinanciamento.push({mes:i, parcela:valorParcela, juros: jurosMes, total: totalMes, saldo: saldoDevedor })
    }

    return listaFinanciamento
}

function formatarMoeda(num){
    let formatarMoeda = new Intl.NumberFormat('pt-br', {style: "currency", currency: "BRL"})
    let moedaFormatada = formatarMoeda.format(num)
    return moedaFormatada
}


