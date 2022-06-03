const body = document.querySelector("body")
const main = body.querySelector("main");
body.removeChild(main)

const newHeader = document.createElement("h1")
newHeader.id = 'victory'
newHeader.textContent = "YOUR NAME is the champion";


document.body.append(newHeader);

