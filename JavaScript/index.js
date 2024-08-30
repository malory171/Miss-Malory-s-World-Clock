function updateTime() {
  let brusselsElement = document.querySelector("#brussels");
  let brusselsDateElement = brusselsElement.querySelector(".date");
  let brusselsTimeElement = brusselsElement.querySelector(".time");

  let brusselsTime = moment().tz("Europe/Brussels");
  brusselsDateElement.innerHTML = brusselsTime.format("MMMM Do YYYY");
  brusselsTimeElement.innerHTML = brusselsTime.format(
    "[<strong>]h:mm:ss [</strong>][<small>]A[</small>]"
  );
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");

  let tokyoTime = moment().tz("Asia/Tokyo");
  tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format(
    "[<strong>]h:mm:ss [</strong>][<small>]A[</small>]"
  );
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);

  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
    <div class="city"><div>
              <h2>${cityName}</h2>
              <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
            </div>
            <div class="time"><strong>${cityTime.format(
              "h:mm:ss"
            )}</strong> <small>${cityTime.format("A")}</small>
            </div>
          </div>
            </div>
            <a href="/">All cities</a>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
