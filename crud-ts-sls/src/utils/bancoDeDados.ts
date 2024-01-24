import Persona, { PersonaDados } from "@/entidades/Persona"
import Usuario, { UsuarioDados } from "@/entidades/Usuario"

const parametrosPersona: PersonaDados.Entrada = {
    data: "24/01/2024",
    comentario: "Qualquer Comentario"
}
const persona = new Persona(parametrosPersona)

const parametrosA: UsuarioDados.Entrada = {
    nome: 'Nome_valido_A',
    email: 'email@avalido',
    cargo: 'cargoA',
    personas: [persona],
    kudos: [],
    pdi: [], 
}
const usuarioA = new Usuario(parametrosA)

const parametrosB: UsuarioDados.Entrada = {
    nome: 'Nome_valido_B',
    email: 'email@bvalido',
    cargo: 'cargoB',
    personas: [],
    kudos: [],
    pdi: [], 
}
const usuarioB = new Usuario(parametrosB)

const parametrosC: UsuarioDados.Entrada = {
    nome: 'Nome_valido_C',
    email: 'email@cvalido',
    cargo: 'cargoC',
    personas: [],
    kudos: [],
    pdi: [], 
}
const usuarioC = new Usuario(parametrosC)

const dados = [usuarioA, usuarioB, usuarioC]

export default dados