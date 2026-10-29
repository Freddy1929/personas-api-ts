export interface Saludo {
    nombreRecibido: unknown;
    mensaje: string;
}

export async function crearSaludo(nombre: unknown): Promise<Saludo> {
    const saludo = {
        nombreRecibido: nombre,
        mensaje: `Hola ${nombre}` 
    }

    return saludo;
}