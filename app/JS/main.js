import "../CSS/style.css";
import { DOMSelectors } from "./dom";

const agenturl = `https://valorant-api.com/v1/agents`;
const spraysurl = `https://valorant-api.com/v1/sprays`;

function clearPage() {
  DOMSelectors.container.innerHTML = "";
}

async function getAgents() {
  try {
    //fetch returns a promise
    const response = await fetch(agenturl);
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
    r;
    alert("sorry, could not find that thing");
  }
}

getAgents();

function insertData(agents) {
  agents.forEach((agent) =>
    DOMSelectors.container.insertAdjacentHTML(
      "beforeend",
      `<div class="card w-2/6 h-3/6 p-2.5 m-5 mx-0.5 bg-red-400 text-amber-950 rounded-s-lg flex flex-col overflow-hidden justify-around items-center">
        <h2 class="title text-4xl">${agent.displayName}</h2>
        <h3 class="role text-base">${agent.role.displayName}</h3>
        <img class="image" src="${agent.fullPortrait}" alt="" />
        <h3 class="desc text-base">${agent.description}</h3>
        <br />
      </div>`
    )
  );
}

DOMSelectors.button1.addEventListener("click", function () {
  clearPage();
  getAgents();
});

async function getSprays() {
  try {
    //fetch returns a promise
    const response = await fetch(spraysurl);
    //gaurd clause
    if (response.status != 200) {
      throw new Error(response);
    } else {
      const spraysData = await response.json();
      const sprays = spraysData.data

      // const guns = data.data.filter((gun) => data.isPlayableCharacter === true);
      console.log(sprays);
      insertSprays(sprays);
    }
  } catch (error) {
    console.log(error);
    alert("sorry, could not find that thing");
  }
}

getSprays();

function insertSprays(sprays) {
  sprays.forEach((spray) =>
    DOMSelectors.container.insertAdjacentHTML(
      "beforeend",
      `<div class="card w-2/6 h-3/6 p-2.5 m-5 mx-0.5 bg-red-400 text-amber-950 rounded-s-lg flex flex-col overflow-hidden justify-around items-center">
      <h2 class="title text-4xl m-5">${spray.displayName}</h2>
      <img class="image border-r-5" src="${spray.displayIcon}" alt="" />
      <br />
      </div>`
    )
  );
}

DOMSelectors.button2.addEventListener("click", function () {
  DOMSelectors.container.innerHTML = "";
  clearPage();
  getSprays();
});
