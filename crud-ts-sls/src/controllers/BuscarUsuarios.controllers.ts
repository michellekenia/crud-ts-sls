import { APIGatewayProxyEvent } from "aws-lambda";
import BaseController, { SaidaDoController } from "./BaseController";
import { lidarComRespostaDeSucesso } from "@/utils/respostas.http";
import dados from "@/utils/bancoDeDados";

export default class BuscarUsuariosController extends BaseController {
   async executar(event: APIGatewayProxyEvent): Promise<SaidaDoController> {
    try {
        const usuarios = {itens: dados}
        return lidarComRespostaDeSucesso(200, usuarios)
       } catch (error) {
        console.log("Erro", error)
        return error
       }
    }
    

}