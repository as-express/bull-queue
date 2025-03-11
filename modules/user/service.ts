import { prisma } from "../../config/prisma.js"
import { ICreateUser } from "./interfaces/create.js"
import { IUpdateUser } from "./interfaces/update.js"
import { User } from "@prisma/client"

export const create = async(data: ICreateUser): Promise<string> => {
    const isExist = await prisma.user.findFirst({
        where: {username: data.username}
    })
    if(isExist) {
        throw {statusCode: 400, message: 'User already exist'}
    }

    await prisma.user.create({
        data: {
            username: data.username,
            email: data.email,
            telegram: data.telegram,
            phone: data.phone
        }
    })
    
    return 'User created Success'
}

export const get = async(): Promise<User[]> => {
    return await prisma.user.findMany()
}

export const update = async(id: number, data: IUpdateUser): Promise<string> => {
    await findById(id)
    await prisma.user.update({
        where: {id},
        data
    })

    return 'User updated success'
}

export const remove = async(id: number): Promise<string> => {
    await findById(id)

    await prisma.user.delete({
        where: {id}
    })

    return 'User deleted success'
}


const findById = async(id: number): Promise<boolean> => {
    const user = await prisma.user.findUnique({where: {id}})
    if(!user) {
        throw {statusCode: 404, message: 'User not found'}
    }
    return true
}
