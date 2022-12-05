const prices = document.getElementsByClassName("a-price-whole");
//   prices[2].innerHTML="Hello"
let sallary = 0;
chrome.storage.local.get(["sallary"]).then((result) => {
  sallary = parseInt(result.sallary);
  console.log(result.sallary);
  for (let priceIndex in prices) {
    let price = parseInt(
      prices[priceIndex].innerHTML.includes(",")
        ? prices[priceIndex].innerHTML.replaceAll(",", "")
        : prices[priceIndex].innerHTML
    );
    let days = Math.ceil((price / (sallary / 30)) % 30);
    let months = Math.floor(price / (sallary / 30) / 30);
    prices[priceIndex].innerHTML =
      months > 0
        ? prices[priceIndex].innerHTML +
          "<p class='month'>" +
          months +
          " Months " +
          days +
          " Days" +
          "</p>"
        : prices[priceIndex].innerHTML +
          "<p class='days'>" +
          days +
          " Days" +
          "</p>";
  }
});
