import axios from "axios";

export class TestPutApi {
    async execute(url, body) {
        try {
            const response = await axios.put(url, body);
            return {
                status: true,
                data: response
            }
        } catch (error) {
            return {
                status: false,
                data: error
            }
        }
    }
}