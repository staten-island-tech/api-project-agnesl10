import "../CSS/style.css";
var name = "cheetah";
const url = "https://api.api-ninjas.com/v1/animals?name=" + name;
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
