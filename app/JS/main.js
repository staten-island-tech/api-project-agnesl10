import "../CSS/style.css";
import { DOMSelectors } from "./dom";

const url = `https://api.allorigins.win/get?url=${encodeURIComponent(
  "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=1XsDU4HLtoxseyqbYBNzwYI4CePooggYmlOoWcmC"
)}`;
async function getData() {
  try {
    //fetch returns a promise
    const response = await fetch(url);

    //gaurd clause
    if (response.status != 200) {
      throw new Error(response);
    } else {
      const data = await response.json();
      document.querySelector("h1").textContent = data.name;
    }
  } catch (error) {
    console.log(error);
    alert("sorry, could not find that pocket monster");
  }
}

getData();

const response = await fetch(
  "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=1XsDU4HLtoxseyqbYBNzwYI4CePooggYmlOoWcmC"
);

const data = await response.json();

console.log(data);

function insertData(data) {
  const apidata = data.photos;
  apidata.forEach((pic) =>
    DOMSelectors.container.insertAdjacentHTML(
      "beforeend",
      `<div class="card w-1/5 ">
        <h2 class="title">${pic.rover.name}</h2>
        <img class="image" src="${pic.img_src}" alt="" />
        <h4 class="camera">${pic.camera.name}</h4>
      </div>`
    )
  );
}

insertData(data);
