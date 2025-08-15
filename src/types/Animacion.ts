import type { TipoAnimacion } from "./TipoAnimacion"
export interface Animacion {
    id: number,
    url: string,
    tipoAnimacionId: number,
    tipoAnimacion: TipoAnimacion,
    personajeId: number
}