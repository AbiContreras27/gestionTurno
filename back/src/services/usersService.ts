import {UserDTO, UserRegisterDTO, UserloginDTO } from "../dtos/userDTO";
import {User} from "../entities/User.entity"
import {UserModel } from "../config/data-source"


export const getUserService = async () => {
    try {
        const users: User[] = await UserModel.find();
        return users
            } catch (error) {
                console.error("error al encontrar usuario:", error)
                throw new Error("No se pudo encontrar usuario.")
    }
};

export const getUserByService = async (id: string): Promise<UserDTO> => {
        const userFound = await UserModel.findOne({ 
            where: { 
                id: parseInt(id, 10) 
            }, relations: ['credentialsId']
        });
        if (!userFound) throw new Error(`El usuario con id: ${id} no fue encontrado`);
        return userFound;
};


export const registerUserService = async (userData: UserRegisterDTO): Promise<User> => {
    try {
        const user = UserModel.create(userData);
        const saveduser = await UserModel.save(user)
        return saveduser;
    } catch (error) {
        console.error("error al registrar usuario:", error)
        throw new Error("No se pudo registrar usuario.")
    }
}

export const loginUserService = async (userCredentials: UserloginDTO): Promise<UserloginDTO> => {
    return userCredentials
}

