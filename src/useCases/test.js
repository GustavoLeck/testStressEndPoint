import { TestGetApi } from "../api/test-get-api.js";
import { TestPostApi } from "../api/test-post-api.js";

export class Test {
    async execute(type, url) {
        for (let index = 0; index < 100; index++) {
            await new Promise((resolve) => setTimeout(resolve, 2000));
            try {
                let response = {};
                if (type == "get" || type == "GET") {
                    response = await new TestGetApi().execute(url);
                }
                if (type == "post" || type == "POST") {
                    response = await new TestPostApi().execute(url);
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