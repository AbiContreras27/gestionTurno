import { Request, Response } from "express";
import { getUserService, getUserByService, registerUserService, loginUserService } from "../services/usersService";
import { UserRegisterDTO, UserloginDTO, UserDTO } from "../dtos/userDTO";
import { User } from "../entities/User.entity";


export const getUsersController = async (req: Request, res: Response): Promise<void> =>  {
    try {
      const serviceResponse : UserDTO[] = await getUserService()
        res.status(200).json({
          message: "Obteniendo el listado de todos los usuarios",
          data: serviceResponse
        })
    } catch (error) {
      res.status(500).json({
        message: "Hubo un error en la aplicación",
        error: error
    })
  }
}

export const getUserByController = async (req: Request<{id: string}>, res: Response): Promise<void> => {

  const {id} = req.params

  try {
    const serviceResponse: UserDTO = await getUserByService(id)
    res.status(200).json({
      message: "Obtener el detalle de un usuario específico.",
      data: serviceResponse
    })
  } catch (error) {
    res.status(500).json({
      message: "Hubo un error en la aplicación",
      error: error
    })
  };
}

export const registerUserController = async (req: Request<unknown, unknown, UserRegisterDTO>, res: Response): Promise<void> => {

  try {
   const serviceResponse: User = await registerUserService(req.body)
    res.status(201).json({
      message: "Registro de un nuevo usuario",
      data: serviceResponse
    })
  } catch (error) {
    res.status(400).json({
      message: "Hubo un error al registrar un nuevo usuario",
      error: error
    })
  }
}


export const loginUserController = async (req: Request<unknown, unknown, UserloginDTO>, res: Response): Promise<void> => {
    try {
      const serviceResponse: UserloginDTO = await loginUserService(req.body)
      res.status(201).json({
        message: "Login del usuario de la aplicación",
        data: serviceResponse
      })
      } catch (error) {
      res.status(500).json({
        message: "Hubo un error en la aplicación",
        error: error
      })    
    }
  }

