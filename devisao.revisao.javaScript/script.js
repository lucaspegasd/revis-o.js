
alert("Hello world")
//
alert("agora vamos somar dois números")
let sumOne = prompt("digite o primeiro número: ")
let sumTwo = prompt("digite o segundo número: ")
alert(`este é o resultado: ${Number(sumOne) + Number(sumTwo)}`)
//
let randomNumber = Number(prompt("insira um número:"))
if (randomNumber == Number(randomNumber)) {
    alert ("é um número")
} else {
    alert("não é um número")
}
//
let randomString = String(prompt("insira uma String:"))
if (randomString == String(randomString)) {
    alert ("é uma string")
} else {
    alert("não é uma String")
}
//
let numberOne = prompt("Digite o primeiro número:")
let numberTwo = prompt("Digite o segundo número:")
let resultTwo = Number(numberOne) - Number(numberTwo)
alert("a subtração é de: " + resultTwo)
//
let numbeOne = prompt("Digite o primeiro número:")
let numbeTwo = prompt("Digite o segundo número:")
let resultThree = Number(numbeOne) * Number(numbeTwo)
alert("a multiplicação é de: " + resultThree)
//
let numbOne = prompt("Digite o primeiro número:")
let numbTwo = prompt("Digite o segundo número:")
let resultFour = Number(numberOne) / Number(numberTwo)
alert("a divisão é de: " + resultFour)
//
let pairnumber = prompt("digite um número:")
if (pairnumber % 2 == 0) {
    alert("é um número par")
} else {
    alert("é um número ímpar")
}