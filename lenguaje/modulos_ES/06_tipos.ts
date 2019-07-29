{
    let sinTipo
    let otroTipo: any
    let cadena: string
    let num: number
    let isOk: boolean
    let codigo: string | number
    //cadena = 43 da error de TS
    codigo = 23
    codigo = '23'
}

////Interferencia de tipos
{
    let cadena = 'Pepe'

}

//Arrays
{
    let aDatos: [] = []
    let aDatos2: Array<any> = []
    let aNumbers: number[] = []
    let aNumbers2: Array<number> = []

    aDatos.push('Pepe')
}


//objetos
{
    let aDatos: {nombre: string, edad: number}
    aDatos= {nombre: 'Pepe', edad: 32}

    interface IPersona {
        nombre: string, 
        edad: number
    }

    class Persona implements IPersona {
        /* nombre: string 
        edad: number
        constructor(nombre,edad){
            this.nombre = nombre
            this.edad = edad
        } */
        constructor(public nombre: string, public edad: number){

        }
    }

    //let oDatos: IPersona
    let oDatos: Persona
    let oDatos1: Persona
    oDatos = new Persona('juan',36)
    oDatos1 = {nombre: 'Pepito', edad: 42}
}
    

// Funciones

{
    let una: Function
    let algo: () => void
    let otra: (n: number) => boolean

    //algo = function () {}
    //function algo() {}
    algo = () => {}
    otra = (num) => {return true}
}


//Enums
{
    enum Directions {
        Up,
        Down,
        Left,
        Right
    }
}