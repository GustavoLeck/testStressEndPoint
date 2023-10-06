import { prisma } from "../prisma/prisma.js";

export class CreateUserDatabase {
    async execute(value) {
        try {
            await prisma.logErro.create({
                data: {
                    idTeste: value?.idTeste,
                    status: value?.status,
                    data: value?.data
                }
            });
            return { status: true, message: "Log criado com sucesso." };
        } catch (error) {
            return { status: false, message: error };
        }
    }
}