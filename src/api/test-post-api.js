import axios from "axios";

export class TestPostApi {
    async execute(url, body) {
        try {
            const response = await axios.post(url, body);
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