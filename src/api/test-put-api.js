import axios from "axios";

export class TestPutApi {
    async execute(url, body, idTeste) {
        try {
            const response = await axios.put(url, body);
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