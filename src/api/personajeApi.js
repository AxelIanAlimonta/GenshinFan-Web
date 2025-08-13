process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const url = `${import.meta.env.PUBLIC_API_URL}/personaje`;

const obtenerPersonajes = async () => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Error al obtener personajes");
    }
    return response.json();
};

export { obtenerPersonajes };