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
    <h4 class="py-2"> ${object.name} </h4>
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

//utilizzo filter per creare 4 Array diversi contenenti i 4 type

const allList = listIcons.filter(function (element) {
  return (allTypes = element.type);
});

console.log(allList);

const animalsList = listIcons.filter(function (element) {
  const animalType = element.type;
  return animalType === "animal";
});

console.log(animalsList);

const vegetableList = listIcons.filter(function (element) {
  const vegetableType = element.type;
  return vegetableType === "vegetable";
});

console.log(vegetableList);

const usersList = listIcons.filter(function (element) {
  const usersType = element.type;
  return usersType === "user";
});

console.log(usersList);

//collego il tag select con JS

const selectElement = document.getElementById("select-js");

selectElement.addEventListener("change", (event) => {
  if (selectElement.value === "All") {
    hookHtml.innerHTML = "";
    allList.forEach((element) => {
        hookHtml.innerHTML += createCard(element);
      });
  } else if(selectElement.value === "Animals") {
    hookHtml.innerHTML = "";
    animalsList.forEach((element) => {
        hookHtml.innerHTML += createCard(element);
      });
  } else if(selectElement.value === "Vegetables") {
    hookHtml.innerHTML = "";
    vegetableList.forEach((element) => {
        hookHtml.innerHTML += createCard(element);
      });
  } else  {
    hookHtml.innerHTML = "";
    usersList.forEach((element) => {
        hookHtml.innerHTML += createCard(element);
      });
  }
});
