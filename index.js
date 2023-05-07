let jsonData;
const price = document.querySelector(".price");
const subscibe = document.querySelector(".content-footer-span");

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
  console.log(data.isOfferActive);
}

getData("./data/index.json");
