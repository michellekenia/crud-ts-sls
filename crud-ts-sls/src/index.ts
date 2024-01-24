import { APIGatewayProxyEvent } from "aws-lambda";
import Usuario from "./entidades/Usuario";

const parametros = {
        nome: '',
        email: '',
        cargo: '',
        personas: [],
        kudos: [],
        pdi: []
}
const usuario = new Usuario(parametros)

module.exports.handler = async (event:APIGatewayProxyEvent) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        meu_usuario:usuario,
        message: "Go Serverless v3.0! Your function executed successfully!",
        input: event,
      },
      null,
      2
    ),
  };
};
