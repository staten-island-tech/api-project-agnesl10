import "../CSS/style.css";
import { DOMSelectors } from "./dom";

const url = `https://valorant-api.com/v1/agents`;
async function getData() {
  try {
    //fetch returns a promise
    const response = await fetch(url);

    //gaurd clause
    if (response.status != 200) {
      throw new Error(response);
    } else {
      const data = await response.json();
      console.log(data.data);
      insertData(agents);
      const agents = data.data.filter(isPlayableCharacter === true);
    }
  } catch (error) {
    console.log(error);
    alert("sorry, could not find that pocket monster");
  }
}

getData();

function insertData(agents) {
  data.forEach((a) =>
    DOMSelectors.container.insertAdjacentHTML(
      "beforeend",
      `<div class="card w-1/5 ">
        <h2 class="title">${a.data.displayName}</h2>
        <img class="image" src="${a.data.fullProfile}" alt="" />
        <h3 class="role">${a.role.displayName}</h3>
        <h3 class="desc">${a.data.description}</h3>
      </div>`
    )
  );
}
