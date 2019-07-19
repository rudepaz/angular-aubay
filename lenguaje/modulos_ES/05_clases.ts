// Clases en TypeScript

abstract class SerVivo {

}

class Persona extends SerVivo{
    public nombre: string
    constructor(nombre) {
        this.nombre = nombre
    }
    saludar (otro ='amigo') {
        console.log(`Hola ${otro}, soy ${this.nombre}`)
    }
    static pensar() {
        console.log('Las Personas piensan')
    }
}

const p1 = new Persona('Pepe')
p1.saludar('Juan')
console.log(p1)
const p2 = new Persona('Elena')
//p2.edad = 32
console.log(p2)
new Persona ('Pepe').saludar('Juan')


class Alumno extends Persona {
    public curso: string
     constructor (nombre = '',curso =''){
         super(nombre)
         this.curso = curso
     }
     saludar() {
         super.saludar()
         console.log(`Y estudio ${this.curso}`)
     }
}

const a1 = new Alumno ('Raquel', 'Angular')
//a1.edad= 32
a1.saludar()
console.log(a1)

