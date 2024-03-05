let paragrafos = document.getElementsByTagName("p");

for (let i = 0; i < paragrafos.length; i++) {
    paragrafos[i].textContent = 'tiradentes';
}


let isLightMode = true;

document.getElementById("modo").addEventListener("click", function() {
    if (document.body.style.backgroundColor === "black") {
        document.body.style.backgroundColor = "white";
        document.getElementById("modo").textContent = "Alternar para Modo Escuro";
        // Mudar a cor do texto para preto nos elementos <p> e <h1>
        document.querySelectorAll('p, h1').forEach(element => {
            element.style.color = "black";
        });
    } else {
        document.body.style.backgroundColor = "black";
        document.getElementById("modo").textContent = "Alternar para Modo Claro";
        // Mudar a cor do texto para branco nos elementos <p> e <h1>
        document.querySelectorAll('h1').forEach(element => {
            element.style.color = "white";  
        });
    }
    // Alternar a variável para a próxima cor
    isLightMode = !isLightMode;
}); 
// JavaScript (seuScript.js)

document.addEventListener("DOMContentLoaded", function() {
    // Adiciona automaticamente um novo card ao carregar a página
    adicionarNovoCard();
});

function adicionarCardAoContainer(cardHTML) {
    var cardContainer = document.getElementById("cardContainer");
    var novoCard = document.createElement("div");
    novoCard.className = "col-md-4 mb-4";
    novoCard.innerHTML = cardHTML;
    cardContainer.appendChild(novoCard);
}

function adicionarNovoCard() {
    // Cria um novo elemento div para o novo card
    var novoCard = document.createElement("div");
    novoCard.className = "col-md-4 mb-4";

    // Conteúdo do novo card (pode ser personalizado)
    novoCard.innerHTML = `
        <div class="card h-100">
            <img src="Imagens/Superman_Legacy.webp" alt="" width="414" height="414px">
            <div class="card-body">
                <h5 class="card-title">Superman Legacy - Sinopse</h5>
                <p class="card-text">Depois de deixar Smallville, o jovem Clark Kent se torna repórter na cidade de Metrópoles. Paralelo ao começo de sua carreira profissional, ele também dá os passos iniciais como Superman..</p>
                <h5 class="card-text">
                    <button id="amazing" class="btn btn-primary" type="submit">
                        <a id="indicacoes" target="_blank" href="https://www.example.com">Veja o Trailer</a>
                    </button>
                </h5>
            </div>
        </div>
    `;

    // Adiciona o novo card ao contêiner
    adicionarCardAoContainer(novoCard.innerHTML);
}

