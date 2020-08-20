const nome1 = 'alek'
const nome2 = 'susano'
const nome3 = 'carlos'
const nota1 = 30
const nota2 = 24
const nota3 = 27


const media = (nota1 + nota2 + nota3) / 3

let message = ''

if(media > 21){
    message = 'a turma está acima da média'
} else{
    message = 'a turma está abaixo da média'
}

console.log(media)
console.log(message)