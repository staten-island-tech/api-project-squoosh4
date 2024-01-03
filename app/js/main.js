import '../css/style.css'
import { DOMSelector } from './domselector.js'


function cardCreate(arr) {

	DOMSelector.cardHolder.innerHTML = ""
	arr.forEach((item) => DOMSelector.body.insertAdjacentHTML(
		"beforeend",
		`
      <div class="${item.common_locations} ${item.dlc} compendium-card" id="${item.id}">
        <p class="card-text">${item.name}</p>
        <p>${item.id}</p>
        <img src="${item.image}" class="money-shot">

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
    cardCreate(data)
	return data;

};

async function getData(id) {

    let unparsed_data = await fetch(`https://botw-compendium.herokuapp.com/api/v3/compendium/entry/${id}`);
    const javaScriptObjectNotationData = await unparsed_data.json();
    const data = javaScriptObjectNotationData.data;
    
    console.log(data);
    return data;
    
};

firstFetch();


//addEventListener("click",)