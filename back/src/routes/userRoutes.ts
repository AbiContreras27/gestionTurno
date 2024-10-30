import { NextFunction, Request, Response, Router } from "express";
import userControllers from "../controllers/usersController";
import { UserCredentialDTO, UserRegisterDTO } from "../dtos/userDTO";

const userRouter: Router = Router();

userRouter.get("/", (req: Request, res: Response, next: NextFunction) => userControllers.getUsersController(req, res, next));

userRouter.get("/:id", (req: Request<{id: string}>, res: Response, next: NextFunction) => userControllers.getUserByController(req, res, next));

userRouter.post("/register", (req: Request<unknown, unknown, UserRegisterDTO>, res: Response, next: NextFunction)  => userControllers.registerUserController(req, res, next) )

userRouter.post("/login", (req: Request<unknown, unknown, UserCredentialDTO>, res: Response, next: NextFunction) => userControllers.loginUserController(req, res, next) ) 



export default userRouter;
