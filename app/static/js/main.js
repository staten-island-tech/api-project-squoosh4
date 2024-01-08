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
    `),
	);

};

function detailedInfoDisplay(arr) {

    DOMSelector.detailedViewViewspace.computedStyleMap.display = "block";
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
    DOMSelector.closeWindowButton.addEventListener("click", function(event){ DOMSelector.detailedViewViewspace.innerHTML = ""; DOMSelector.detailedViewViewspace.style.display = "none" });
    
};

async function firstFetch() {

    let unparsed_data = await fetch("https://botw-compendium.herokuapp.com/api/v3/compendium/all");
    const javaScriptObjectNotationData = await unparsed_data.json();
    const data = javaScriptObjectNotationData.data;
    data.sort(function(a, b){return a.id-b.id});

	console.log(data);
    cardCreate(data);
    DOMSelector.compendiumCard = Array.from(document.querySelectorAll(".compendium-card"))
	DOMSelector.compendiumCard.forEach((card) => card.addEventListener("click", function(event) { getData(card.id); }));
    return data;

};

async function getData(info) {

    /*if (`${info}` != "") {
    
        if( char.toUpperCase() != char.toLowerCase() ){
        
            if( info > 0 && info < 390 ) {
    
                let unparsed_data = await fetch(`https://botw-compendium.herokuapp.com/api/v3/compendium/entry/${info}`);
    
        
            }} else {

                let unparsed_data = await fetch(`https://botw-compendium.herokuapp.com/api/v3/compendium/entry/${info}`);
        
            }};

    const javaScriptObjectNotationData = await unparsed_data.json();
    const data = javaScriptObjectNotationData.data;
    
    if (data = {}) (DOMSelector.cardHolder.innerHTML = `<h2 class="error-header">error</h2>`)
    console.log(data);
    detailedInfoDisplay(data);
    return data;*/
    
    let unparsed_data = await fetch(`https://botw-compendium.herokuapp.com/api/v3/compendium/entry/${info}`);
    const javaScriptObjectNotationData = await unparsed_data.json();
    const data = javaScriptObjectNotationData.data;
    
    console.log(data);
    detailedInfoDisplay(data);
    return data;

};

firstFetch();


DOMSelector.compendiumCard.forEach((card) => card.addEventListener("click", function(event) { detailedInfoDisplay(card); }));