const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const body = document.querySelector("body");
const select = document.querySelector("select");
const gradient_text = document.querySelector("h3");
const btn_random = document.querySelector("#btn-random");


//calling function only first time
changeColor();


input1.addEventListener("input", changeColor);
input2.addEventListener("input", changeColor);
select.addEventListener("input", changeColor);

btn_random.addEventListener("click", changeColorRandom);

function changeColor() {
    var value = "linear-gradient("+ select.value +"," + input1.value + "," + input2.value + ")";
    body.style.backgroundImage = value;
    select.style.backgroundImage = value;
    gradient_text.textContent = value;
}


function changeColorRandom() {
    var color1 = colors[Math.floor(Math.random() * colors.length)];
    var color2 = colors[Math.floor(Math.random() * colors.length)];
    
    var position = select.children[Math.floor(Math.random() * select.children.length)];
    
    
    var value = "linear-gradient("+ position.value +"," + color1 + "," + color2 + ")";
    body.style.backgroundImage = value;
    select.style.backgroundImage = value;
    gradient_text.textContent = value;
    input1.value = color1;
    input2.value = color2;
    select.value = position.value;
}

var colors = [
    "#0048BA",
    "#B0BF1A",
    "#7CB9E8",
    "#C0E8D5",
    "#B284BE",
    "#EDEAE0",
    "#C46210",
    "#EFDECD",
    "#9F2B68",
    "#F19CBB",
    "#AB274F",
    "#D3212D",
    "#A4C639",
    "#CD9575",
    "#665D1E",
    "#2E5894",
    "#BF4F51",
    "#3B3C36",
    "#1F75FE",
    "#D891EF",
    "#C32148",
    "#1974D2",
    "#004225",
    "#702963",
    "#ED872D",
    "#E30022",
    "#C41E3A",
    "#960018",
    "#F1DDCF",
    "#6D9BC3",
    "#007AA5",
    "#AA381E",
    "#FFB200",
    "#CD607E",
    "#FF7F50",
    "#6495ED",
    "#00B7EB",
    "#556B2F",
    "#9932CC",
    "#E9967A",
    "#2F4F4F",
    "#00703C",
    "#00BFFF",
    "#1560BD",
    "#D71868",
    "#CCFF00",
    "#6C3082",
    "#00FF40",
    "#801818",
    "#FF5470",
    "#A2006D",
    "#0072BB",
    "#D473D4",
    "#FD6C9E",
    "#C74375"
];
