import axios from "axios";

export class TestGetApi {
    async execute(url, body) {
        try {
            const response = await axios.get(url, body);
            return {
                status: true,
                data: response.data
            }
        } catch (error) {
            return {
                status: false,
                data: error
            }
        }
    }
}