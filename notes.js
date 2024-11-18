// API project //
// data from API: tool for computers to talk to eachother: databases
// 1: access api
//2: cards
//3: search bar or filter button
//4: seperate api for inner card info

//a synchronized function : once data arrives THEN run show data
async function getData() {
  try {
    //fetch returns a promise
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto"); //promise of ditto

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

//tailwind css : prebuilt components
