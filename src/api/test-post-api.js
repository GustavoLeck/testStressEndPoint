import axios from "axios";

export class TestPostApi {
    async execute(url) {
        try {
            const response = await axios.post(url);
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