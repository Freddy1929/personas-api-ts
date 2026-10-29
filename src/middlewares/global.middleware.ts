import type { NextFunction, Request, Response } from 'express';

export function miPrimerMiddleware(_req: Request, _res: Response, next: NextFunction): void {
    console.log('Acabo de recibir una petición');
    next();
}

export function validarApiKey(req: Request, res: Response, next: NextFunction): void {
    
    const apiKeyHeader = process.env.API_KEY_HEADER || 'x-api-key';
    const apiKey = process.env.API_KEY || '12345';

    if(req.headers[apiKeyHeader] !== apiKey){
        console.log('Petición proviene de un usuario no autorizado');
        res.status(401).json({ mensaje: 'No autorizado' });
        return;
    }

    next();
}