let jsonData;
const price = document.querySelector(".price");
const subscribeLink = document.querySelector(".content-footer-span");
const subscribeText = document.querySelector(".subscribe-text");

// get local json data
async function getData(url) {
  // Default options are marked with *
  const response = await fetch(url);
  const data = await response.json();

  if (data.isOfferActive) {
    price.textContent = "$139";
  } else {
    price.textContent = "$119";
  }
}

getData("./data/index.json");

// handle subscribe click
subscribeLink.addEventListener("click", () => {
  subscribeText.textContent = "Thank you for subscribing!";
});
