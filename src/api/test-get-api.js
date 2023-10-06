import axios from "axios";

export class TestGetApi {
    async execute(url) {
        try {
            const response = await axios.get(url);
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