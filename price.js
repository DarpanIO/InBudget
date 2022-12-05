const prices = document.getElementsByClassName("a-price-whole");
//   prices[2].innerHTML="Hello"
let sallary = 0;
chrome.storage.local.get(["sallary"]).then((result) => {
  sallary = parseInt(result.sallary);
  console.log(result.sallary);
  for (let priceIndex in prices) {
    let price = parseInt(prices[priceIndex].innerHTML.replace(",", ""));
    prices[priceIndex].innerHTML =
      price < sallary
        ? prices[priceIndex].innerHTML + "<button>In Budget</button>"
        : prices[priceIndex].innerHTML + "<button>Out of Budget</button>";
  }
});
