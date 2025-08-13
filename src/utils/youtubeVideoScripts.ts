export function obtenerIdVideo(videoUrl: string): string {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = videoUrl.match(regex);
    return match ? match[1] : "";
}

export function obtenerMiniatura(videoUrl: string): string {
    const videoId = obtenerIdVideo(videoUrl);
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}
