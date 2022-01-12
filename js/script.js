/* Milestone 1
Partendo dalla struttura dati fornita, visualizzare in pagina
un box per ogni icona, in cui è presente
il nome dell’icona e l’icona stessa. (for each) */

/* Milestone 2
Ciascuna icona ha una proprietà “color”: utilizzare questa
 proprietà per visualizzare le icone del colore corrispondente. */

const listIcons = [
  {
    name: "cat",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "crow",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "dog",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "dove",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "dragon",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "horse",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "hippo",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "fish",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "carrot",
    prefix: "fa-",
    type: "vegetable",
    family: "fas",
    color: "green",
  },
  {
    name: "apple-alt",
    prefix: "fa-",
    type: "vegetable",
    family: "fas",
    color: "green",
  },
  {
    name: "lemon",
    prefix: "fa-",
    type: "vegetable",
    family: "fas",
    color: "green",
  },
  {
    name: "pepper-hot",
    prefix: "fa-",
    type: "vegetable",
    family: "fas",
    color: "green",
  },
  {
    name: "user-astronaut",
    prefix: "fa-",
    type: "user",
    family: "fas",
    color: "blue",
  },
  {
    name: "user-graduate",
    prefix: "fa-",
    type: "user",
    family: "fas",
    color: "blue",
  },
  {
    name: "user-ninja",
    prefix: "fa-",
    type: "user",
    family: "fas",
    color: "blue",
  },
  {
    name: "user-secret",
    prefix: "fa-",
    type: "user",
    family: "fas",
    color: "blue",
  },
];

// aggancio con il dom
const hookHtml = document.querySelector(".hook");

// funzione createCard
function createCard(object) {
  return `<div class="box text-center shadow  p-3 rounded bg-light">
    <div>
    <i
    class="py-2 ${object.family} ${object.prefix}${object.name} ${object.color}"
    ></i>
    </div>
    <h4 class="py-2"> ${object.name.toUpperCase()} </h4>
    </div>`;
}

//for each per stampare tutte le card
listIcons.forEach((element) => {
  hookHtml.innerHTML += createCard(element);
});

/* Milestone 3
Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone
 (animal, vegetable, user). Quando l’utente seleziona un tipo dalla select, visualizzare
  solamente le icone corrispondenti. */

//collego il tag select con JS

const selectElement = document.getElementById("select-js");

// addEventlistener dal select
selectElement.addEventListener("change", (event) => {
  // creo una variabile corrispondente al value dell'option cliccata
  let optionValue = event.target.value;
  /* creo un array con filter composto dinamicamente dagli oggetti che hanno
  come type lo stesso value dell'option selezionata */
  let filterArray = listIcons.filter((element) => {
    return element.type === optionValue || optionValue === "all";
  });
  // pulisco l'HTML
  hookHtml.innerHTML = "";
  // stampo l'array con filter selezionato
  filterArray.forEach((element) => {
    hookHtml.innerHTML += createCard(element);
  });
});
