let jsonData;
const price = document.querySelector(".price");
const subscribeLink = document.querySelector(".content-footer-span");
const subscribeText = document.querySelector(".subscribe-text");
const saveSmallText = document.querySelector(".save-small-text");

// set subscribe text
if (localStorage.getItem("value")) {
  subscribeText.textContent = localStorage.getItem("value");
}

// get local json data
async function getData(url) {
  // Default options are marked with *
  const response = await fetch(url);
  const data = await response.json();

  if (data.isOfferActive) {
    price.textContent = "$139";
    saveSmallText.textContent = "$139";
  } else {
    price.textContent = "$119";
    saveSmallText.textContent = "$119";
  }
}

getData("./data/index.json");

// handle subscribe click
subscribeLink.addEventListener("click", () => {
  const thanks = "Thank you for subscribing!";
  localStorage.setItem("value", thanks);
  console.log(localStorage.getItem("value from localstorage", "value"));
  subscribeText.textContent = localStorage.getItem("value");
});
