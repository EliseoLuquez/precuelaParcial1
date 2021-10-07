import { Actor } from "./actor";

export class Pelicula {
    id: string;
    nombre: string;
    tipo: string;
    fechaEstreno: string;
    cantidadPublico: string;
    imgNombre: string;
    imgUrl: string;
    //actor: Actor;
    actores: Actor[];
}
