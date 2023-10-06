import { TestGetApi } from "../api/test-get-api.js";
import { TestPostApi } from "../api/test-post-api.js";
import { TestPutApi } from "../api/test-put-api.js";
import { TestDeleteApi } from "../api/test-delete-api.js";



export class Test {
    async execute(value) {

        const { type, url, quantidade, tempo, body } = value;

        for (let index = 1; index < quantidade; index++) {
            await new Promise((resolve) => setTimeout(resolve, tempo));
            console.log("Operação: " + index);
            try {
                let response = {};
                if (type == "get" || type == "GET") {
                    response = await new TestGetApi().execute(url, body);
                }
                if (type == "post" || type == "POST") {
                    response = await new TestPostApi().execute(url, body);
                }
                if (type == "put" || type == "PUT") {
                    response = await new TestPutApi().execute(url, body);
                }
                if (type == "delete" || type == "DELETE") {
                    response = await new TestDeleteApi().execute(url, body);
                }
                if (!response.status) {
                    throw new Error(response.data)
                }
            } catch (erro) {
                console.log(erro)
            }
        }
        return;
    }
}