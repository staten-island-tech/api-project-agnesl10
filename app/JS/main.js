import "../CSS/style.css";
async function getData() {
  try {
    //fetch returns a promise
    const response = await fetch(
      "https://developer.spotify.com/documentation/web-api/reference/get-multiple-artists"
    );

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
