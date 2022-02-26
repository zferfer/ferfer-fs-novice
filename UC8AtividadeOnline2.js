var dataEvento = new Date('February 28, 2022 23:15:00')
var diaAtual = new Date()
const idadepermitida = 18

let nomeParticipante = "Fernando"
let idade = 20
let participantes = ["Pedro","Tiago","João","Barquinho","Vasco","Gremio"]



console.log("Insira a data do evento:", dataEvento.toString())

if (dataEvento.getTime() < diaAtual.getTime()) {
    console.log("Data inválida")
} else if (idade < idadepermitida) {
    console.log("Evento não permitido para menores de 18 anos")
} else if (participantes.length < 100) {
    participantes.push(nomeParticipante)
    console.log("Cadastro efetuado com sucesso!")
}  else {
    console.log("Capacidade de participantes excedido")
}