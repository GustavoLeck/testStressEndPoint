import { TestGetApi } from "../api/test-get-api.js";
import { TestPostApi } from "../api/test-post-api.js";
import { TestPutApi } from "../api/test-put-api.js";
import { TestDeleteApi } from "../api/test-delete-api.js";
import { CreateLogDatabase } from "../database/create-log-database.js";

export class Test {
    async execute(value) {
        const { type, url, quantidade, tempo, idTeste, body } = value;

        for (let index = 1; index <= quantidade; index++) {
            await new Promise((resolve) => setTimeout(resolve, tempo));
            console.log("---------------------------");
            console.log("Operação: " + index);
            try {
                let response = {};
                if (type == "get" || type == "GET") {
                    response = await new TestGetApi().execute(url, body, idTeste);
                }
                if (type == "post" || type == "POST") {
                    response = await new TestPostApi().execute(url, body, idTeste);
                }
                if (type == "put" || type == "PUT") {
                    response = await new TestPutApi().execute(url, body, idTeste);
                }
                if (type == "delete" || type == "DELETE") {
                    response = await new TestDeleteApi().execute(url, body, idTeste);
                }
                if (!response.status) {
                    const createLog = await new CreateLogDatabase().execute(response);
                    if (createLog.status) {
                        console.log("   =>Log criado com sucesso");
                    } else {
                        console.log("   =>Erro ao criar log");
                    }
                }
                console.log("Teste Realizado com sucesso")
            } catch (erro) {
                console.log(erro);
            }
        }
        return;
    }
}