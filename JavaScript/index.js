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

updateTime();
setInterval(updateTime, 1000);
