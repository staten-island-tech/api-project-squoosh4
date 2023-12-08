import './style.css'

async function getData() {

    let res = await fetch("https://botw-compendium.herokuapp.com/api/v3/compendium");
    let data = await res.json();
    console.log(data);

};

getData();