let listaAmigos = [];

function adicionarAmigo() {
    let input = document.getElementById('amigo');
    let nome = input.value.trim();
    
    if (nome === '') {
        alert('Favor digitar um nome...');
        return;
    } else if (listaAmigos.includes(nome)) {
        alert('Esse nome já existe na lista.');
        input.value = '';
        return;
    } else {
        listaAmigos.push(nome);
        input.value = '';
        atualizarLista();
    }
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    listaAmigos.forEach((amigo) => {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert('Adicione amigos à lista antes de sortear.');
        return;
    }

    let amigoSorteado = Math.floor(Math.random() * listaAmigos.length);
    let nomeSorteado = listaAmigos[amigoSorteado];
    listaAmigos.splice(amigoSorteado, 1);

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = 'O amigo sorteado foi: ' + nomeSorteado;

    atualizarLista();
}