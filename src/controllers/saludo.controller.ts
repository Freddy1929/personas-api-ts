import type { Request, Response } from 'express';
import * as saludoService from '../services/saludo.service';

export const saludar = async (_req: Request, res: Response): Promise<void> => {
    res.send('Hola Mundo');
};

export const saludarUsandoNombreEnQueryParameter = async (req: Request, res: Response): Promise<void> => {

    const { nombre } = req.query;

    if(nombre === undefined){
        res.status(400).send('No ha incluido el nombre');
        return;
    }

    const saludo = await saludoService.crearSaludo(nombre);
    res.json(saludo);

};

export const saludarUsandoNombreEnUrl = async (req: Request<{ nombre: string }>, res: Response): Promise<void> => {

    const { nombre } = req.params;

    if(nombre === undefined){
        res.status(400).send('No ha incluido el nombre');
        return;
    }

    const saludo = await saludoService.crearSaludo(nombre);
    res.json(saludo);

}