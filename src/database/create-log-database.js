import { prisma } from "../prisma/prisma.js";

export class CreateUserDatabase {
    async execute(value) {
        try {
            await prisma.Log.create({
                value
            });
            return { status: true, message: "Log criado com sucesso." };
        } catch (error) {
            return { status: false, message: error };
        }
    }
}