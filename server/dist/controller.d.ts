import { Request, Response } from 'express';
export declare const getAllShop: (_: Request, res: Response) => Promise<Response<any>>;
export declare const getSelectedShop: (req: Request, res: Response) => Promise<Response<any>>;
export declare const postNewShop: (req: Request, res: Response) => Promise<Response<any>>;
