import getData from "./getdata.js";

async function showData(){
    const data = await getData();
    let div = document.getElementById("content");
    data.forEach(e => {
        let pe = document.createElement("p");
        pe.innerHTML = e.name;
        div.appendChild(pe);
    });
}

export default showData;