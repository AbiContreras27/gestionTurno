import { Request, Response } from "express";
import { getUserService, getUserByService, registerUserService, loginUserService } from "../services/usersService";
import { UserRegisterDTO, UserDTO, UserCredentialDTO , UserLoginDTO} from "../dtos/userDTO";
import { User } from "../entities/User.entity";
import { catchingError } from "../utils/catchinError";

const getUsersController = async (req: Request, res: Response): Promise<void> =>  {
      const serviceResponse : UserDTO[] = await getUserService()
        res.status(200).json({
          message: "Obteniendo el listado de todos los usuarios",
          data: serviceResponse
        })
    }

const getUserByController = async (req: Request<{id: string}>, res: Response): Promise<void> => {
  const {id} = req.params
    const serviceResponse: UserDTO = await getUserByService(id)
    res.status(200).json(serviceResponse)
  } 

const registerUserController = async (req: Request<unknown, unknown, UserRegisterDTO>, res: Response): Promise<void> => {
   const serviceResponse: User | undefined = await registerUserService(req.body)
    res.status(201).json(serviceResponse)
  } 

 const loginUserController = async (req: Request<unknown, unknown, UserCredentialDTO>, res: Response): Promise<void> => {
      const serviceResponse: UserLoginDTO = await loginUserService(req.body)
      res.status(200).json(serviceResponse)
      } 

  const userControllers = {
    getUsersController: catchingError(getUsersController),
    getUserByController: catchingError(getUserByController),
    registerUserController: catchingError(registerUserController),
    loginUserController: catchingError(loginUserController)
  }

  export default userControllers;

