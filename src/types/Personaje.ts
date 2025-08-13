import type { Elemento } from "./Elemento";
import type { Region } from "./Region";

export interface Personaje {
    id: number;
    nombre: string;
    descripcion: string;
    rareza: number;
    avatarURL: string;
    splashArtURL: string;
    tarjetaURL: string;
    fechaLanzamiento: string;
    elementoId: number;
    elemento: Elemento;
    regionId: number;
    region: Region;
}