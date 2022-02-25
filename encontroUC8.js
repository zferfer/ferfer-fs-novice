var listaDePecas = ["Amortecedor", "Mo", "Filtro de ar", "Amortecedor", "Motor", "Filtro de ar", "Amortecedor", "Motor", "Filtro de ar", "Amortecedor", "Motor", "Filtro de ar"]

let peso = 200
if (peso < 100) {
    console.log ("A peça deve pesar no minimo 100g")
} else {
    console.log ("A peça possui peso adequado")
}

if (listaDePecas.length < 10) {
    console.log ("O item pode ser inserido")
} else {
    console.log ("lista cheia")
}

let nomePeca = listaDePecas[1]
if (nomePeca.length > 3) { 
    console.log("Nome pode ser cadastrado")
} else if (nomePeca.length == 0) {
    console.log("O nome da peça não pode ser vazio")
} else {
    console.log("Nome muito curto para cadastro")
}