
export namespace KudoDados {
    export type Entrada = {
        agradecimento: boolean
        alemDasExpectativas: boolean
        liderancaInspiradora: boolean
        data: string
        comentario:string
    }
}


export default class Kudo {
    
    agradecimento: boolean
    alemDasExpectativas: boolean
    liderancaInspiradora: boolean
    data: string
    comentario:string

    constructor(
        parametros:KudoDados.Entrada
    ) {
        this.agradecimento = parametros.agradecimento
        this.alemDasExpectativas = parametros.alemDasExpectativas
        this.liderancaInspiradora = parametros.liderancaInspiradora
        this.data = parametros.data
        this.comentario = parametros.comentario

    }

}
