import PromptSync from "prompt-sync"
const prompt = PromptSync()
const nome = prompt('Digite seu nome: ')

console.log(`Olá ${nome}`)

const numero = prompt('Digite um valor: ')
function calculararea(lado: number): number{
    return lado * lado
}

calculararea(Number(numero))
type situacao = 'aprovado' | 'reprovado' | 'recuperacao'
interface Aluno{
nome: String
mediaFinal: number
situacao: String

}

const aluno: Aluno = {
    nome: "teste",
    mediaFinal: 7.5,
    situacao: "aprovado"
}