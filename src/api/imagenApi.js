process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const url = `${import.meta.env.PUBLIC_API_URL}/imagen`;

export const obtenerImagenes = async () => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Error al obtener las imágenes');
    }
    return response.json();
};
