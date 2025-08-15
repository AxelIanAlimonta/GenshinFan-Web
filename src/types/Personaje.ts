import type { Elemento } from "./Elemento";
import type { Region } from "./Region";
import type { Animacion } from "./Animacion";
import type { Video } from "./Video";
import type { Imagen } from "./Imagen";

export interface Personaje {
    id: number;
    nombre: string;
    descripcion: string;
    rareza: number;
    avatarURL: string;
    splashArtURL: string;
    splashArtSinFondoURL: string;
    tarjetaURL: string;
    fechaLanzamiento: string;
    elementoId: number;
    elemento: Elemento;
    regionId: number;
    region: Region;
    animaciones: Animacion[];
    videos: Video[];
    imagenes: Imagen[];
}