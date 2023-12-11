import './style.css'

async function getData() {

    let unparsed_data = await fetch("https://botw-compendium.herokuapp.com/api/v3/compendium/all");
    let data = await unparsed_data.json();
    console.log(data);

};

getData();