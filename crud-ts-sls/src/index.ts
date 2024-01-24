import { APIGatewayProxyEvent } from "aws-lambda";
import CriarUsuarioController from "./controllers/CriarUsuario.controller";
import { lidarComRespostaDeSucesso } from "./utils/respostas.http";
import BuscarUsuariosController from "./controllers/BuscarUsuarios.controllers";
import AtualizarUsuarioController from "./controllers/AtualizarUsuario.controller";

export async function buscar(event:APIGatewayProxyEvent) {
 const controller = new BuscarUsuariosController()
 const resposta = await controller.executar(event)
 return resposta
}

export async function criar(event:APIGatewayProxyEvent) {
  const controller = new CriarUsuarioController()
  const resposta = await controller.executar(event)
  return resposta
}

export async function atualizar(event:APIGatewayProxyEvent) {
  const controller = new AtualizarUsuarioController()
  const resposta = await controller.executar(event)
  return resposta
}

export async function deletar(event:APIGatewayProxyEvent) {
  return lidarComRespostaDeSucesso(200, {})
}

