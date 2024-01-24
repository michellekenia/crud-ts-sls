import { APIGatewayProxyEvent } from "aws-lambda";
import BaseController, { SaidaDoController } from "./BaseController";

export default class CriarUsuarioController extends BaseController {
    async executar(event: APIGatewayProxyEvent): Promise<SaidaDoController> {
        console.log("Corpo da requisição", event.body)
        throw new Error("Method not implemented.");
    }
    
}