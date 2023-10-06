import { Test } from "../useCases/test.js";
export class TestController {
    async handle(req, res) {
        console.log(req.body)
        await new Test().execute(req?.body);
        res.status(200).send("Testes finalizados.")
    }
}