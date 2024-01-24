
export namespace PersonaDados {
    export type Entrada = {
        data:string
        comentario:string
    }
}

export default class Persona {

    data: string
    comentario: string    

    constructor(
        parametros: PersonaDados.Entrada
    ){  
        this.data = parametros.data
        this.comentario = parametros.comentario

    }

}
