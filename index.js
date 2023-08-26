"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const nome = prompt('Digite seu nome: ');
console.log(`Olá ${nome}`);
const numero = prompt('Digite um valor: ');
function calculararea(lado) {
    return lado * lado;
}
calculararea(Number(numero));
const aluno = {
    nome: "teste",
    mediaFinal: 7.5,
    situacao: "aprovado"
};
