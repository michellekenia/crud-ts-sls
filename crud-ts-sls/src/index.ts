import { APIGatewayProxyEvent } from "aws-lambda";
import Usuario, { UsuarioDados } from "./entidades/Usuario";
import Persona, { PersonaDados } from "./entidades/Persona";

const parametrosPersona: PersonaDados.Entrada = {
        data: "",
        comentario: ""
}
const persona = new Persona(parametrosPersona)

const parametros: UsuarioDados.Entrada = {
        nome: '',
        email: '',
        cargo: '',
        personas: [persona],
        kudos: [],
        pdi: [], 
}
const usuario = new Usuario(parametros)

export async function buscar(event:APIGatewayProxyEvent) {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        'itens':[usuario]        
      }
    )
  };
}

export async function criar(event:APIGatewayProxyEvent) {
  return {
    statusCode: 201,
    body: JSON.stringify({})
  };
}

export async function atualizar(event:APIGatewayProxyEvent) {
  return {
    statusCode: 200,
    body: JSON.stringify({})
  };
}

export async function deletar(event:APIGatewayProxyEvent) {
  return {
    statusCode: 200,
    body: JSON.stringify({})
  };
}

