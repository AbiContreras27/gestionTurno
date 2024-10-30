import { EntityManager } from "typeorm"
import { CredentialRepository } from "../repositories/Credential.Repository"
import { Credential } from "../entities/credential.entity"
import * as crypto from "crypto";


const crypPass = (pass: string): string => {
    return crypto.createHash("sha256").update(pass).digest("hex");
};

const checkUserExist = async (username: string): Promise<void> => {
    const credentialFound: Credential | null = await CredentialRepository.findOne({
        where: {username}
    });
    if (credentialFound) throw new Error(`El usuario con username: ${username} ya existe, intente con nuevo username`)
}

export const getCredentialService = async (entityManager: EntityManager, username: string, password: string): Promise<Credential> => {
    await checkUserExist(username);
    const passwordEncrypted = await crypPass(password);
    const objetoCredenciales: Credential = entityManager.create(Credential, {
        username,
        password: passwordEncrypted
    })
    return await entityManager.save(objetoCredenciales)
}

export const checkUserCredentials = async (username: string, password: string): Promise<number | undefined> => {

    const credentialFound: Credential | null = await CredentialRepository.findOne({where: {username} });

    if(!credentialFound) throw new Error(`Usuario o contraseña incorrectos`)
        else {
            const passwordEncrypt = await crypPass(password);
            if(credentialFound?.password != passwordEncrypt)
                throw new Error(`Usuario o contraseña incorrecta`);
            else return credentialFound.id
        }

};