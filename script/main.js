'use strict'

import { contatos } from "./contatos.js"

const criarContato = (contato) => {

    const div = document.createElement('div')
    div.classList.add('contato')

    const container = document.createElement('div')
    container.classList.add('contato')

    const img = document.createElement('img')
    img.classList.add('fotos-perfil')
    img.src = `./img/${contato.image}`

    const detalhe = document.createElement('div')
    detalhe.classList.add('detalhes')

    const nomeTempo = document.createElement('div')
    nomeTempo.classList.add('nome-tempo')

    const nome = document.createElement('h4')
    nome.classList.add('nome')
    nome.textContent = contato.name

    const tempo = document.createElement('p')
    tempo.classList.add('tempo')
    tempo.textContent = contato.timestamp

    const mensagemNotificacao = document.createElement('div')
    mensagemNotificacao.classList.add('mensagem-notificacao')

    const mensagem = document.createElement('p')
    mensagem.classList.add('mensagem')
    mensagem.textContent = contato.content

    container.append(container, img, detalhe, nomeTempo, nome, tempo, mensagemNotificacao, mensagem)

    return div
}

const carregarContatos = () => {
    const div = document.getElementById('container')
    const contatosContainer = contatos.map(criarContato)

    div.replaceChildren(...contatosContainer)
}
carregarContatos()