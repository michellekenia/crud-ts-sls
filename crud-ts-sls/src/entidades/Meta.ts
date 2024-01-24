
export namespace MetaDados {
    export type Entrada = {
        titulo:string
        objetivo: string
        data: string
        comentario: string 
    }
}

export default class Meta {

    titulo:string
    objetivo: string
    data: string
    comentario: string

    constructor(
        parametros: MetaDados.Entrada
    ) {
        this.titulo = parametros.titulo
        this.objetivo = parametros.objetivo
        this.data = parametros.data
        this.comentario = parametros.comentario

    }
    
}