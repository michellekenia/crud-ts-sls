import { APIGatewayProxyEvent } from "aws-lambda";
import Usuario, { UsuarioDados } from "./entidades/Usuario";
import Persona, { PersonaDados } from "./entidades/Persona";
import dados from "./utils/bancoDeDados";
import CriarUsuarioController from "./controllers/CriarUsuario.controller";

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

const lidarComRespostaDeSucesso = (statusCode: number, body?:object) => ({
  statusCode: statusCode,
  body: JSON.stringify(body)
})

export async function buscar(event:APIGatewayProxyEvent) {
  const usuarios = {itens: dados}
  return lidarComRespostaDeSucesso(200, usuarios)
}

export async function criar(event:APIGatewayProxyEvent) {
  const controller = new CriarUsuarioController()
  const resposta = controller.executar(event)
  console.log("Valor resposta" , resposta);
  
  return lidarComRespostaDeSucesso(201, resposta)
}

export async function atualizar(event:APIGatewayProxyEvent) {
  return lidarComRespostaDeSucesso(200, {})
}

export async function deletar(event:APIGatewayProxyEvent) {
  return lidarComRespostaDeSucesso(200, {})
}

