import axios from "axios";

export class TestDeleteApi {
    async execute(url, body, idTeste) {
        try {
            const response = await axios.delete(url, body, idTeste);
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