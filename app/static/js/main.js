import '../css/style.css'
import { DOMSelector } from './domselector.js'


function cardCreate(arr) {

	DOMSelector.cardHolder.innerHTML = ""
	arr.forEach((item) => DOMSelector.cardHolder.insertAdjacentHTML(
		"beforeend",
		`
      <div class="${item.common_locations} ${item.dlc} compendium-card" id="${item.id}">
        <p class="compendium-number">${item.id}</p>
        <img src="${item.image}" alt="Picture of ${item.name}" class="money-shot">
        <p class="displayed-name">${item.name}</p>

      </div>
    `
	));

};

async function firstFetch() {

    let unparsed_data = await fetch("https://botw-compendium.herokuapp.com/api/v3/compendium/all");
    const javaScriptObjectNotationData = await unparsed_data.json();
    const data = javaScriptObjectNotationData.data;
    data.sort(function(a, b){return a.id-b.id});

	console.log(data);
    cardCreate(data);
    DOMSelector.compendiumCard = document.querySelectorAll(".compendium-card")
	return data;

};

async function getData(id) {

    let unparsed_data = await fetch(`https://botw-compendium.herokuapp.com/api/v3/compendium/entry/${id}`);
    const javaScriptObjectNotationData = await unparsed_data.json();
    const data = javaScriptObjectNotationData.data;
    
    console.log(data);
    detailedInfoDisplay(data);
    return data;
    
};

function detailedInfoDisplay(item) {

    DOMSelector.detailedViewViewspace.innerHTML = 
	`
      <p class="name-text">${item.name}</p>
      <p class="locations">${item.common_locations}</p>
      <p class="viewspace-id-number">#${item.id}</p>
      <img src="${item.image}" class="money-shot">
      <p class="viewport-desc">${item.desc}</p>
      <button id="close-window"></button>
    `;
    DOMSelector.closeWindowButton = document.querySelector("#close-window");
    DOMSelector.closeWindowButton.addEventListener("click", function(event){ DOMSelector.detailedViewViewspace.innerHTML = ""; });
    
};

firstFetch();


DOMSelector.compendiumCard.forEach((card) => card.addEventListener("click", function(event) { detailedInfoDisplay(card); }));