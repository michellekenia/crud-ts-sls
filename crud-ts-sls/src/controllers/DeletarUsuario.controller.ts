import { APIGatewayProxyEvent } from "aws-lambda";
import BaseController, { SaidaDoController } from "./BaseController";
import { lidarComRespostaDeSucesso } from "@/utils/respostas.http";


export default class DeletarUsuarioController extends BaseController {
   async executar(event: APIGatewayProxyEvent): Promise<SaidaDoController> {
        try {
        return lidarComRespostaDeSucesso(200, {})
        } catch (error) {
        console.log("Erro", error)
        return error
       }
    }
    
}