import axios from "axios";

export class TestDeleteApi {
    async execute(url, body) {
        try {
            const response = await axios.delete(url, body);
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