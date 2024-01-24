import { APIGatewayProxyEvent } from "aws-lambda";
import BaseController, { SaidaDoController } from "./BaseController";
import { lidarComRespostaDeSucesso } from "@/utils/respostas.http";

export default class CriarUsuarioController extends BaseController {
    async executar(event: APIGatewayProxyEvent): Promise<SaidaDoController> {
       try {
        console.log("Corpo da requisição", event.body)
        return lidarComRespostaDeSucesso(201, {})
       } catch (error) {
        console.log("Erro", error)
        return error
       }
    }
    
}