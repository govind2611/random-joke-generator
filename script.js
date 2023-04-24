let joke = document.querySelector("#joke");
let btn = document.querySelector("#generate");
let apiKey = "api key is removed"; // for security purpose
let url = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
let options = {
  method: "GET",
  headers: { "x-api-key": apiKey },
};

const generate = () => {
  fetch(url, options)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      joke.innerText = `${data[0].joke} 😄`;
    });
};
window.addEventListener("load", generate);
btn.addEventListener("click", generate);
