'use strict'
//ES6+(ES2015) incorpora let / const

let x = 1
console.log(x)

const k = 3

const aDatos= [1,2,3]

aDatos.push(4)
console.log(aDatos)

const algo=function(){
    let x = 2
    console.log(x)

    if (true){
        let x = 3
        console.log(x)
    }
}

algo()

let cadena = 'Hola Pepe'
let cadenaMal = "Hola Pepe"  //Mala práctica las comillas dobles

//ES6 incorpora los template strings: ``
let template = `Tengo una variable que dice ${cadena}`

console.log(template)

// functiones 
function sumaD (a=0,b=0) {}
const suma = function (a=0,b=0) {return a+b}
console.log('Sumas',sumaD(1),suma(1))


// Arrow functions
//const sumaArrow = (a,b) => {return a+b}
const sumaArrow = (a,b) => a+b
const cuadrado = a => a*a


//NO se declaran : se asignan
//No pueden ser constructoras
//This es SIEMPRE la funcion

const verThis = function () {
    console.log('Ver this')
    console.log(this)
}

verThis()

const o = {
    nombre: 'Pepe',
    metodo: verThis
}

o.metodo()

const arrow = () => {
    console.log('Ver this en arrow')
    console.log(this)
}

arrow()


const o2 = {
    nombre:'Juan',
    metodo: arrow
}

o2.metodo()

o2.metodoAsinc = function () {
    console.log(this.nombre)
    setTimeout( () =>(console.log(this.nombre)),1000)
}

o2.metodoAsinc()

//Operadores spreed / rest

const verArray = (a,...rest) => {console.log(rest)};

verArray(1, 3, 4, 6)

const verNumeros = (a,b,c) => {console.log(a,b,c)}
const aMasDatos = [2,6,9]

verNumeros(...aMasDatos)


//Nuevo For en ES6
let s = 0
for (const iterator of aMasDatos) {
    s += iterator
}
console.log(s)

s=0
aMasDatos.forEach(item => s += item)
console.log(s)

s = aMasDatos.reduce ( (a,b,) => a+b)
console.log(s)