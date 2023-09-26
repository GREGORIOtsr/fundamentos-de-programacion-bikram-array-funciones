// 1.
let arrayVacio = [];

// 2.
let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// 3.
let arrayNumerosPares = [0, 2, 4, 6, 8];

// 4.
let arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']];

// 5.
function suma(num1, num2) {
    return num1 + num2;
};

// 6.
function potenciacion(num1, num2) {
    let resultado = num1;
    if (num1 != 0 && num2 != 0) {
        for (i = 1; i < num2; i++) {
            resultado *= num1;
        }
    } else if (num1 == 0) {
        resultado = 0;
    } else {
        resultado = 1;
    }
    return resultado;   
};

// 7.
function separarPalabras(string) {
    return string.split(" ");
}

// 8.
function repetirString(string, num) {
    let resultado = "";
    for (i = 1; i <= num; i++) {
        resultado += string;
    }
    return resultado;
}

// 9.
function esPrimo(num) {
    for (i = 2; i < num; i++) {
        if (num % i == 0) {
            return false
        }
    }
    return true;
}


// 10.
function ordenarArray(num) {
    return num.sort((a, b) => a - b);
}

// 11.
function obtenerPares(num) {
    return num.filter((check) => check % 2 == 0);
}

// 12.
function pintarArray(arr) {
    return "[" + arr.join(", ") + "]";
}

// 13.
function arrayMapi(arr, fun) {
    return arr.map(fun);
}

// 14.
function eliminarDuplicados(arr) {
    let uniqueArray = [];
    arr.forEach((value) => {
        if (!uniqueArray.includes(value)) {
            uniqueArray.push(value);
        }
    });
    return uniqueArray;
}

// 15.
let arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];

// 16.
let holaMundo = ['Hola', 'Mundo'];

// 17.
let loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal'];

// 18.
let arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']];

// 19.
function multiplicacion(num1, num2) {
    return num1 * num2;
}

// 20.
function division(num1, num2) {
    return num1 / num2;
}

// 21.
function esPar(num) {
    return num % 2 == 0 ? true : false;
}

// 22.
let arrayFunciones = [
    ((n1, n2) => n1 + n2),
    ((n1, n2) => n1 - n2),
    ((n1, n2) => n1 * n2)
]

// 23.
function ordenarArray2(num) {
    return num.sort((a, b) => b - a);
}

// 24.
function obtenerImpares(num) {
    return num.filter((check) => check % 2 !== 0);
}

// 25.
function sumarArray(num) {
    return num.reduce((a, b) => a + b);
}

// 26.
function multiplicarArray(num) {
    return num.reduce((a, b) => a * b);
}
