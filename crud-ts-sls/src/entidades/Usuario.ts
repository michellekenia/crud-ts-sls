import Kudo from "./Kudo"
import Meta from "./Meta"
import Persona from "./Persona"

export namespace UsuarioDados {
    export type Entrada = {
        nome: string
        email: string
        cargo: string
        personas: Persona[]
        kudos: Kudo[]
        pdi: Meta[]
        foto_perfil_url?:string
    }
    
    export type Saida = Usuario
}


export default class Usuario {

    nome: string
    email: string
    cargo: string
    foto_perfil_url?:string
    personas: Persona[]
    kudos: Kudo[]
    pdi: Meta[]

    constructor (
        parametros: UsuarioDados.Entrada
    ) {
        this.nome = parametros.nome
        this.email = parametros.email
        this.cargo = parametros.cargo
        this.foto_perfil_url = parametros.foto_perfil_url
        this.personas = parametros.personas
        this.kudos = parametros.kudos
        this.pdi = parametros.pdi   
    }    
    
}