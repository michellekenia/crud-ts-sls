"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Usuario_1 = __importDefault(require("./entidades/Usuario"));
const parametros = {
    nome: '',
    email: '',
    cargo: '',
    personas: [],
    kudos: [],
    pdi: []
};
const usuario = new Usuario_1.default(parametros);
module.exports.handler = async (event) => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            meu_usuario: usuario,
            message: "Go Serverless v3.0! Your function executed successfully!",
            input: event,
        }, null, 2),
    };
};
//# sourceMappingURL=index.js.map