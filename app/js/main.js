import '../css/style.css'
import { DOMSelector } from './domselector.js'

let data = ""

async function getData() {

    let unparsed_data = await fetch("https://botw-compendium.herokuapp.com/api/v3/compendium/all");
    javaScriptObjectNotationData = await unparsed_data.json();
    data = javaScriptObjectNotationData.data;

    console.log(data);

};

getData();

function cardCreate(arr) {

	DOMSelector.body.innerHTML = ""
	arr.forEach((item) => DOMSelector.body.insertAdjacentHTML(
		"beforeend",
		`
      <div class="${item.common_locations} ${item.dlc}" id="${item.name} ${item.id}">
        <p>${item.name}</p>
        <p>${item.id}</p>
        <p>${item.description}</p>
      </div>
    `
	));
};

cardCreate(data);