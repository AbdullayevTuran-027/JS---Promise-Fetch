const inputCity = document.querySelector(".input-city");
const inputTemp = document.querySelector(".input-temp");
const button = document.querySelector(".btn-primary");
const city = document.querySelector(".city");
const country = document.querySelector(".country");
const weather = document.querySelector(".weather");
const sky = document.querySelector(".sky");
const img = document.getElementById("img");
const erorrs = document.querySelector(".erorr");
const area = document.getElementById("return");
let cityOne;
let tempvalue;
let c;
let f;
let btnTrue = 0;
inputCity.addEventListener("keyup", function () {
  cityOne = inputCity.value;
});
inputTemp.addEventListener("change", function () {
  tempvalue = inputTemp.value;
  console.log(tempvalue);
  if (tempvalue == "f" && btnTrue == 1) {
    weather.innerText = f + "F";
  }
  if (tempvalue == "c" && btnTrue == 1) {
    weather.innerText = c + "C";
  }
});
button.addEventListener("click", function () {
  btnTrue = 1;
  axios({
    method: "get",
    url:
      "https://api.weatherapi.com/v1/current.json?key=6bc15cfb31414fbda9f95625221905&q=" +
      cityOne +
      "",
  })
    .then(function (response) {
      area.style.display = "block";
      erorrs.style.display = "none";
      console.log(response);
      country.innerText = response.data.location.country;
      city.innerText = response.data.location.name;
      img.src = response.data.current.condition.icon;
      sky.innerText = response.data.current.condition.text;

      f = response.data.current.temp_f;
      c = response.data.current.temp_c;
      if (tempvalue == "f" && btnTrue == 1) {
        weather.innerText = f + "F";
      }
      if (tempvalue == "c" && btnTrue == 1) {
        weather.innerText = c + "C";
      }
    })
    .catch(function (error) {
      erorrs.innerText = "Not Found!!!";
      area.style.display = "none";
      erorrs.style.display = "block";
    });
});