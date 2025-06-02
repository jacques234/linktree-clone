export function isValidOrRelativeUrl(urlString: string): boolean {
    try {
        // Si empieza con '/', asumimos que es una ruta interna válida
        if (urlString.startsWith('/')) return true;

        // Si no, intentamos como URL completa
        new URL(urlString);
        return true;
    } catch (err) {
        return false;
    }
}
