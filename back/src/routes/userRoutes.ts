import { Request, Response, Router } from "express";
import { getUsersController, getUserByController, registerUserController, loginUserController } from "../controllers/usersController";
import { UserRegisterDTO, UserloginDTO } from "../dtos/userDTO";

const userRouter: Router = Router();

userRouter.get("/", (req: Request, res: Response) => getUsersController(req, res));

userRouter.get("/:id", (req: Request<{id: string}>, res: Response) => getUserByController(req, res));

userRouter.post("/register", (req: Request<unknown, unknown, UserRegisterDTO>, res: Response)  => registerUserController(req, res) )

userRouter.post("/login", (req: Request<unknown, unknown, UserloginDTO>, res: Response) => loginUserController(req, res) ) 



export default userRouter;
