const params = new URLSearchParams(window.location.search);
const contexto = params.get("contexto");
const allCards = document.querySelectorAll(".section-card");

const html = document.documentElement;
html.setAttribute("data-contexto", contexto);

function Hidden() {

  allCards.forEach((cardAtivo) => {
    cardAtivo.classList.add("hidden");

    if (cardAtivo.dataset.contexto === contexto) {
      cardAtivo.classList.remove("hidden");
    }

  });
}

function changeTitle(){

    switch(contexto){
        case "simple-card":
            document.title = "Simple Card | Jessica Randall - Desenvolvedora Front-end | Links e Portfólio"
            break
        case 'social-card':
            document.title = 'Social Card | Descrição...'
            break
    }
}

Hidden();
changeTitle();