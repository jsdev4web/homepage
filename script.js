
const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
const r = randomBetween(0, 255);
const g = randomBetween(0, 255);
const b = randomBetween(0, 255);
const rgb = `rgb(${r},${g},${b})`; // Collect all to a css color string


let colorBox = document.querySelectorAll(".colorBox")
console.log(colorBox)


for (let i = 0; i < colorBox.length; i++){
        let newRandomColor = Math.floor(Math.random()*16777215).toString(16)
        colorBox[i].style.backgroundColor = "#" + newRandomColor
        colorBox[i].style.height = '75%';
    }


