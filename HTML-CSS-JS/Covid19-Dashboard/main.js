const elem = document.getElementById("country-list");

fetch("https://corona-api.com/countries")
  .then((response) => response.json())
  .then((res) =>{
      res.data.map((country) =>{
          const li = document.createElement("Button");
          li.id = country.code;
          li.classList.add("country-name");
          li.innerHTML = 
          `<div class="list-col1">${country.code}</div>
          <div class="list-col2">${country.name}</div>
          <div class="list-col3"><img src="https://www.countryflags.io/${country.code}/flat/32.png"></div>`;
          li.addEventListener("click", () => {
              getData(country.code).then((res) => {
                  document.getElementById(
                      "country-selected"
                      ).innerHTML = `<div>${country.name}</div>`;
                  displayData(res);
              })
          });
          elem.appendChild(li);
      });
  });

const getData = async (countryCode) => {
    const resp = await fetch(`https://corona-api.com/countries/${countryCode}`);
    const data = await resp.json();
    return data;
};

function displayData(resp) {
    console.log(resp);

    document.getElementById("active.api").innerHTML = `<div>${resp.data.latest_data.critical}</div>`;
    document.getElementById("confirmed.api").innerHTML = `<div>${resp.data.latest_data.confirmed}</div>`;
    document.getElementById("recovered.api").innerHTML = `<div>${resp.data.latest_data.recovered}</div>`;
    document.getElementById("deaths.api").innerHTML = `<div>${resp.data.latest_data.deaths}</div>`;
}