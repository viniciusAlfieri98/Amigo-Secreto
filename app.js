//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Array para armazenar os nomes
let amigos = [] ; 
// função para adicionar os nomes digitados para a array.
function adicionarAmigo () {
    let nomeAmigo = document.getElementById("amigo").value; 
    
    if(nomeAmigo !== "") {
        amigos.push(nomeAmigo)
    }else{
        alert ('adicione um nome, por favor')
    }
    limparNomeDosAmigos()
    mostrarNomesDosAmigos()
}

// funçao para o nome apagar da caixa de texto apos ser adicionado
function limparNomeDosAmigos(){
    let nomeInserido = document.querySelector('input')
    nomeInserido.value = '';
}

// função para mostrar o nome na tela apos ser adicionado
function mostrarNomesDosAmigos() {
    let lista = document.getElementById("listaAmigos") ;
    lista.innerHTML = "" ;
    let conteudo = '' ;
// loop for para mostrar os nomes adicionados até que a condição (i<amigos.length) seja falsa.
    for (let i = 0; i < amigos.length; i++) {
        conteudo += "<li><strong>" + amigos[i] + "</strong></li>"
    }
    lista.innerHTML = conteudo 
}

function sortearAmigo (){
    if (amigos.length === 0) {
        alert(`Não há amigos para sortear.`);
        return; 
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    let amigoSorteado = amigos[indiceAleatorio] ;

    let resultadoElement = document.getElementById('resultado')
    resultadoElement.textContent = `O amigo secreto é: ${amigoSorteado}` ; 

   // limpar os nomes digitados no sorteio
    if (!amigoSorteado)
        return; 
    limparListaDeAmigos()
}

//adicione uma função para limpar os nomes após o nome ser sorteado
function limparListaDeAmigos (){
    let listaDeAmigos = document.getElementById("listaAmigos")
    listaDeAmigos.innerHTML = "" ; 
}

// posteriormente, é possivel adicionar um botão de reiniciar e colocar uma função de limpar a lista de amigos, amigo sorteado e etc.
