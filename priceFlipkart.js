const prices = document.getElementsByClassName("_30jeq3");
let previousUrl = '';
const observer = new MutationObserver(function(mutations) {
  if (location.href !== previousUrl) {
      previousUrl = location.href;
      let sallary = 0;
      chrome.storage.local.get(["sallary"]).then((result) => {
        sallary = parseInt(result.sallary);
        for (let priceIndex in prices) {
          let price = parseInt(
            prices[priceIndex].innerHTML.includes(",")
              ? prices[priceIndex].innerHTML.replaceAll(",", "").replaceAll("₹", "")
              : prices[priceIndex].innerHTML.replaceAll("₹", "")
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
    }
});
const config = {subtree: true, childList: true};
observer.observe(document, config);
//   prices[2].innerHTML="Hello"
