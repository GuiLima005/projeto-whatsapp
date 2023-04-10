'use strict'

import { contatos } from "https://fernandoleonid.github.io/whatsApp-senai-1-2023/recursos/contatos.js"

const criarContato = (contato, indice) => {


    const contatos = document.createElement('div')
    contatos.classList.add('contato')
    contatos.id = 'contato'
    contatos.onclick = () => {

        localStorage.setItem("foto", img.id)
        localStorage.setItem("nome", nome.id)
        carregarConversas(indice)  
}


    const img = document.createElement('img')
    img.classList.add('fotos-perfil')
    img.src = `./${contato.image}`
    img.id = contato.image

    const detalhe = document.createElement('div')
    detalhe.classList.add('detalhes')

    const nomeTempo = document.createElement('div')
    nomeTempo.classList.add('nome-tempo')

    const nome = document.createElement('h4')
    nome.classList.add('nome')
    nome.textContent = contato.name
    nome.id = contato.name

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

const criarHeaderConversa = () => {
    let nomeConversa = localStorage.getItem("nome")
    let novoNome = document.querySelector("#nome-conversa")
    novoNome.innerHTML = nomeConversa

    let foto = localStorage.getItem("foto")
    let novaFoto = document.querySelector("#foto-conversa")
    novaFoto.src = foto
}

const carregarContatos = async () => {

    const url = `https://api-whatsapp-oe6v.onrender.com/v1/senai/conta?number=11966578996`

    const response = await fetch(url)
    const data = await response.json()
    let contatos = data.contatos

    const novoContainer = document.getElementById('container-contatos')
    const contatosContainer = contatos.map(criarContato)
    novoContainer.replaceChildren(...contatosContainer)
}

const getConversas = (mensagem) => {

    let messageSent = document.createElement('p')
    let br = document.createElement('br')
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

    messageSent.append(br, time)

    return messageSent
}

const carregarConversas = (indice) => {
    const messageContact = document.getElementById('container-mensagens')

    const message = contatos[indice].messages.map(getConversas, criarHeaderConversa())



    messageContact.replaceChildren(...message)
}
carregarContatos()