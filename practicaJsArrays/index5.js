const numbers = [3, 27, 95, 7, 25, 95, 81];
let mayor = numbers[0];
let menor = mayor;
let totalPares = 0;
numbers.forEach(function(element, indice) {
    if (element >= mayor) {
        mayor = element;
    }

    if (element <= menor) {
        menor = element;
    }

    if (indice % 2 == 0) {
        totalPares++;
    }
})
console.log('mayor', mayor);
console.log('menor', menor);
console.log('Total con indices Pares', totalPares);

console.log('Segundo Array')

const myStrings = ['first', 'second', 'third', 'fourth', 'reallyLongString', 'sixth'];
let totalStringLenghtFive = 0;
let lengthMayorString = myStrings[0];

myStrings.forEach(function(element) {
    if (element.length >= lengthMayorString.length) {
        lengthMayorString = element;
    }

    if (element.length == 5) {
        totalStringLenghtFive++;
    }
})

if (myStrings.length % 2 == 0) {
    console.log('El array tiene Longitud Par');
} else {
    console.log('El array tiene Longitud Impar');
}

console.log('El Cadena con mayor longitud es', lengthMayorString);
console.log('Total de Cadenas con Logintud 5 es', totalStringLenghtFive);