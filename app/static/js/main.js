// imports

import '../css/style.css'
import { DOMSelector } from './domselector.js'


// functions

function cardCreate(arr) {

	DOMSelector.cardHolder.innerHTML = ""
	arr.forEach((item) => DOMSelector.cardHolder.insertAdjacentHTML(
		"beforeend",
		`
        <div class="compendium-card ${item.dlc} ${item.common_locations}" id="${item.id}" tabindex=${item.id}>
          <header><p class="compendium-number">${item.id}</p></header>
          <figure><img src="${item.image}" alt="Picture of ${item.name}" class="money-shot"></figure>
          <footer><p class="displayed-name">${item.name}</p></footer>
        </div>
    `));

};

function detailedInfoDisplay(data) {

    DOMSelector.detailedViewViewspace.style.display = "block";
    DOMSelector.detailedViewViewspace.style.zIndex = 12;
    DOMSelector.detailedViewViewspace.innerHTML = 
	`
      <p class="name-text">${data.name}</p>
      <p class="locations">${data.common_locations}</p>
      <p class="viewspace-id-number">#${data.id}</p>
      <img src="${data.image}" alt="picture of ${data.name}" class="big-money-shot">
      <p class="viewport-desc">${data.description}</p>
      <button id="close-window" tabindex="0">go back</button>
    `;

    DOMSelector.closeWindowButton = document.querySelector("#close-window");
    DOMSelector.closeWindowButton.addEventListener("click", function(event){ DOMSelector.detailedViewViewspace.innerHTML = ""; DOMSelector.detailedViewViewspace.style.display = "none" });
    
};

async function getData(info) {

    {
        /*if (`${info}` != "") {
//async functions

async function getData(info) {
    
    let unparsed_data = await fetch(`https://botw-compendium.herokuapp.com/api/v3/compendium/entry/${info}`);
    const javaScriptObjectNotationData = await unparsed_data.json();
    const data = javaScriptObjectNotationData.data;
    
    console.log(data);
    detailedInfoDisplay(data);
    return data;
    //hehehehaw
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
    }
    
    let unparsed_data = await fetch(`https://botw-compendium.herokuapp.com/api/v3/compendium/entry/${info}`);
    const javaScriptObjectNotationData = await unparsed_data.json();
    const data = javaScriptObjectNotationData.data;
    console.log(data);
    detailedInfoDisplay(data);
    return data;

};

async function firstFetch() {

    let unparsed_data = await fetch("https://botw-compendium.herokuapp.com/api/v3/compendium/all");
    const javaScriptObjectNotationData = await unparsed_data.json();
    const data = javaScriptObjectNotationData.data;
    data.sort(function(a, b){return a.id-b.id});

	console.log(data);
    cardCreate(data);
    DOMSelector.compendiumCards = document.querySelectorAll(".compendium-card");
	DOMSelector.compendiumCards.forEach((item) => item.addEventListener("click", function() { getData(item.id); }));
    /* DOMSelector.compendiumCards.forEach((item) => item.addEventListener("mouseover", function() { DOMSelector.compendiumCards.style = "font-family: hylia-serif"; }));
    DOMSelector.compendiumCards.forEach((item) => item.addEventListener("mouseout", function() { DOMSelector.compendiumCards.style = "font-family: sheikah-serif"; })); */
    return data;

};

// run first fetch to set everything in motion
firstFetch();
