import "../CSS/style.css";
import { DOMSelectors } from "./dom";

const url = `https://api.allorigins.win/get?url=${encodeURIComponent(
  "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=q8ohbspClgWN7RKnZobtYvhilvJg0LfgNlnke8c4"
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
  "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=q8ohbspClgWN7RKnZobtYvhi1vJg0LfgNlnke8c4"
);

const data = await response.json();

console.log(data);

function insertData(data) {
  const apidata = photos.data;
  apidata.forEach((pic) =>
    DOMSelectors.container.insertAdjacentHTML(
      "beforeend",
      `<div class="card">
        <h2 class="title">${pic.name}</h2>
        <img class="image" src="" alt="" />
        <h4 class="camera"></h4>
      </div>`
    )
  );
}
