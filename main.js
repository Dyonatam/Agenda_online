const form = document.getElementById('form-contato')
const contatos = []
const numeros = []

let linhas = ""

form.addEventListener('submit', function (e) {
    e.preventDefault()

    adicionarLinha()
    atualizaTabela()
    atualizaQtdContatos()
})

function adicionarLinha() {

    const inputNomecontato = document.getElementById('nome-contato')
    const inputnumerocontato = document.getElementById('numero-contato')

    if (contatos.includes(inputNomecontato.value)) {
        alert(`O contato ${inputNomecontato.value} já foi inserido.`)
    } else if (numeros.includes(inputnumerocontato.value)) {
        alert(`O número ${inputnumerocontato.value} já foi inserido.`)
    } else {
        
        contatos.push(inputNomecontato.value)
        numeros.push(inputnumerocontato.value)

        let linha = '<tr>'
        linha += `<td>${inputNomecontato.value}</td>`
        linha += `<td>${inputnumerocontato.value}</td>`
        linha += '</tr>'
        linhas += linha
    }
    inputNomecontato.value = ''
    inputnumerocontato.value = ''
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

function atualizaQtdContatos() {

    const quantidadeContatos = calculaMediaFinal()

    document.getElementById('quantidadeContatos-valor').innerHTML = quantidadeContatos
}

function calculaMediaFinal() {
    let somaDasnumeros = 0
    return numeros.length
}
