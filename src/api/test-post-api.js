import axios from "axios";

export class TestPostApi {
    async execute(url, body, idTeste) {
        try {
            const response = await axios.post(url, body, idTeste);
            return {
                status: true,
                data: response,
                idTeste: idTeste
            }
        } catch (error) {
            return {
                status: false,
                data: error,
                idTeste: idTeste
            }
        }
    }
}