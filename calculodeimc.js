const nome = 'Suelen'
const altura = '1.78'
const peso = '90'

const imc = peso / (altura * altura)

let message = ''

if(imc >= 30){
    message = `${nome} você está acima do peso!`
} else{
    message = `${nome} você não está acima do peso!`
}

console.log(imc)
console.log(message)