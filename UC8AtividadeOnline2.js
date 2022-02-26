var dataEvento = new Date('February 28, 2022 23:15:00')
var diaAtual = new Date()
const idadepermitida = 18
let idade = 19
let participantes = ["Pedro","Tiago","João","Barquinho","Vasco","Gremio"]



console.log("Insira a data do evento:", dataEvento.toString())

if (dataEvento.getTime() < diaAtual.getTime()) {
    console.log("Data inválida")
} else {
    console.log("")
}

console.log("Insira sua idade:",idade)

if (idade < idadepermitida) {
    console.log("Evento não permitido para menores de 18 anos")
}   else if (participantes.length < 100) {
    console.log("Cadastro efetuado com sucesso!")
}   else {
    console.log("Capacidade de participantes excedido")
}