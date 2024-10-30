import {UserCredentialDTO, UserDTO, UserRegisterDTO, UserLoginDTO } from "../dtos/userDTO";
import {User} from "../entities/User.entity"
import {AppDataSource } from "../config/data-source"
import {UserRpository} from "../repositories/User.Repostory"
import { Credential } from "../entities/credential.entity";
import { checkUserCredentials, getCredentialService } from "./credentialService";
import { CustomError } from "../utils/customError";


export const getUserService = async () => {
    try {
        const users: User[] = await UserRpository.find();
        return users
            } catch (error) {
                console.error("error al encontrar usuario:", error)
                throw new Error("No se pudo encontrar usuario.")
    }
};

export const getUserByService = async (id: string): Promise<UserDTO> => {
        const userFound = await UserRpository.findOne({ 
            where: { 
                id: parseInt(id, 10) 
            }, relations: ['appointments']
        });
        if (!userFound) throw new CustomError(404, `El usuario con id: ${id} no fue encontrado`);
        return userFound;
};


export const registerUserService = async (userData: UserRegisterDTO): Promise<User | undefined> => {
    try {
        if (!userData.password || !userData.username) {
            throw new CustomError(400, "El nombre de usuario y la contraseña son obligatorios.");
    }
        
        const result = await AppDataSource.transaction(async (entityManager) => {
            const Credential: Credential = await getCredentialService(entityManager, userData.username, userData.password)
            const newUser: User = entityManager.create(User, {
                name: userData.name,
                email: userData.email,
                birthdate: new Date(userData.birthdate),
                nDni: userData.nDni,
                credentialsId: Credential
            });
            return await entityManager.save(newUser);
        })
        return result
    } catch (error) {
        console.error("error al registrar usuario:", error)
        throw new Error("No se pudo registrar usuario.")
    }
}

export const loginUserService = async (userCredentials: UserCredentialDTO): Promise<UserLoginDTO> => {
    const credentialId: number | undefined = await checkUserCredentials(userCredentials.username, userCredentials.password)
    
    if(!credentialId) throw new CustomError(400,"Credenciales Incorrectas.");

    const userFound: User | null = await UserRpository.findOne({
        where: {
            credentialsId: {
            id: credentialId
        }}
    })

    if (!userFound) throw new CustomError(400, "Usuario no encontrado.");
    return {
        login: true,
        user: {
            id: userFound.id,
            name: userFound.name,
            email: userFound.email,
            birthdate: userFound.birthdate,
            nDni: userFound.nDni
        }
    }
}

