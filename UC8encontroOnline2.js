//Atividade 1
let numeroDeAlunos = 10

for (let index = 0; index <= numeroDeAlunos; index++) {

    if (index == 0) {
        console.log("O número " + index + " é zero.")
    } else if (index % 2 == 0) {
        console.log(`O número ${index} é par.`)
    } else {
        console.log(`O número ${index} é impar.`)
    }

}

//Atividade 2
let nomeDeAlunos = ["Pedro", "Thiago", "João", "Vasco"];

for (let name of nomeDeAlunos) {
    console.log(`Esta pessoa se chama ${name}`)
}