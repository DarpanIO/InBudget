let formElem = document.getElementById("form");
formElem.addEventListener("submit", formSubmitHandler);
function formSubmitHandler(event) {
    event.preventDefault();
    console.log(event.target[0].value)
    const sallary=event.target[0].value
    chrome.storage.local.set({ sallary: sallary }).then(() => {
        console.log("Value is set to " + sallary);
      });
  }
