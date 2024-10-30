import { Request, Response, NextFunction } from "express"


export const catchingError = <Params, ResBody, ReBody> (controller: (req:Request<Params, ResBody, ReBody>, res: Response<ResBody>, next: NextFunction)=> Promise<void> ) =>  {
    return (req: Request<Params, ResBody, ReBody>, res: Response<ResBody>, next: NextFunction) => {
        controller(req, res, next)
        .catch(error => next(error))
    }
}