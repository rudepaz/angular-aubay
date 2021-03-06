export interface IMaestros{
    id: string;
    name: string;
    descripcion: string;
}

export interface ICurso{
    id: string;
    name: string;
    descripcion: string;
}

export interface ICurso extends IMaestros{}

export interface ITurno extends IMaestros{}

export class AlumnoModel {
    constructor (
        public nombre: string = '',
        public apellidos: string = '',
        public dni: string = '',
        public email: string = '',
        public nacim: Date = new Date(),
        public coment: string = '',
        public isOK: boolean = false,
        public turno: ITurno | object = null,
        public curso: ICurso | object = null) { }
}