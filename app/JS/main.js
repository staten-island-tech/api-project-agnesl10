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
      const agents = data.data.filter(
        (data) => data.isPlayableCharacter === true
      );
      console.log(agents);
      insertData(agents);
    }
  } catch (error) {
    console.log(error);
    alert("sorry, could not find that pocket monster");
  }
}

getData();

function insertData(agents) {
  agents.forEach((agent) =>
    DOMSelectors.container.insertAdjacentHTML(
      "beforeend",
      `<div class="card w-4/5 h-5/5 p-2.5 m-5 bg-red-400 text-amber-950 rounded-s-lg flex flex-col overflow-hidden justify-around">
        <h2 class="title">${agent.displayName}</h2>
        <img class="image " src="${agent.fullPortrait}" alt="" />
        <h3 class="role">${agent.role.displayName}</h3>
        <h3 class="desc">${agent.description}</h3>
      </div>`
    )
  );
}
