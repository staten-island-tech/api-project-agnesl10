import "../CSS/style.css";
var name = "cheetah";
const url =
  "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=DEMO_KEY";
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
