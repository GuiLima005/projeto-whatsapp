'use strict'

import { contatos } from "./contatos.js"

const criarContato = (contato, indice) => {

    const contatos = document.createElement('div')
    contatos.classList.add('contato')
    contatos.id = 'contato'
    contatos.onclick = () => carregarConversas(indice)


    const img = document.createElement('img')
    img.classList.add('fotos-perfil')
    img.src = `./${contato.image}`

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
    mensagem.textContent = contato.description

    nomeTempo.append(nome, tempo)
    mensagemNotificacao.append(mensagem)
    detalhe.append(nomeTempo, mensagemNotificacao)
    contatos.append(img, detalhe)

    return contatos
}

const carregarContatos = () => {
    const novoContainer = document.getElementById('container-contatos')
    const contatosContainer = contatos.map(criarContato)
    novoContainer.replaceChildren(...contatosContainer)
}

const getConversas = (mensagem) => {

    let messageSent = document.createElement('p')
    let time = document.createElement('span')

    if (mensagem.sender == "me") {
        messageSent.classList.add('minha-mensagem')
        time.classList.add('tempo')
        messageSent.textContent = mensagem.content
        time.textContent = mensagem.time

    } else {
        messageSent.classList.add('mensagem-contatos')
        time.classList.add('time')
        messageSent.textContent = mensagem.content
        time.textContent = mensagem.time
    }

    messageSent.append(time)

    return messageSent
}

const carregarConversas = (indice) => {
    const messageContact = document.getElementById('container-mensagens')

    const message = contatos[indice].messages.map(getConversas)

    messageContact.replaceChildren(...message)
}

carregarContatos()