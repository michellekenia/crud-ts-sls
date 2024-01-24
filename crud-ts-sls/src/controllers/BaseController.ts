import { APIGatewayProxyEvent } from "aws-lambda";

export interface SaidaDoController{
    statusCode:number
    body:string
}

export default abstract class BaseController {
    abstract executar(event:APIGatewayProxyEvent): Promise<SaidaDoController>

}