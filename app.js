console.log("HI!");

getCountryByName = async (event) =>  {
    event.preventDefault();
    console.log("button clicked");
    const inputField = document.querySelector("#searchCountry");
    const response = await fetch(`https://restcountries.com/v3.1/name/${inputField.value}`);
    const jsonData = await response.json();
    // console.log(jsonData);

    const displayCountry = document.createElement("div");

    jsonData.forEach((country) => {
    const addCountry = document.createElement("li");
    addCountry.innerText = `${country.name.common}-${country.population}`;
    displayCountry.appendChild(addCountry);

})
 const div = document.querySelector("#searchResults");
 div.prepend(displayCountry);   
}

getAllCountries = async () =>{
  const response = await fetch (`https://restcountries.com/v3.1/all`);
  const jsonData = await response.json();
  
  const displayAllCountry = document.createElement("div");

  jsonData.forEach((country) => {
  const addCountry = document.createElement("li");
  addCountry.innerText = `${country.flag} ${country.name.common} \n population:${country.population}`;
  displayAllCountry.appendChild(addCountry);
})
const body = document.querySelector("body");
body.appendChild(displayAllCountry); 
}

getAllCountries();
const form = document.querySelector("form");
form.addEventListener("submit", getCountryByName);
