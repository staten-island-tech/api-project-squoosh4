import './css/style.css'

async function getData() {

    let unparsed_data = await fetch("https://botw-compendium.herokuapp.com/api/v3/compendium/all");
    let data = await unparsed_data.json();
    console.log(data);

};

getData();

function cardCreate(arr) {

	DOMSelector.cardHolder.innerHTML = ""
	arr.forEach((item) => DOMSelector.cardHolder.insertAdjacentHTML(
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