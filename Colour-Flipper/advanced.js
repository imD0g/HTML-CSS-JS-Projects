const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// Hex Colours: #f15025
const btn = document.getElementById("btn")
const colour = document.querySelector(".colour");

btn.addEventListener("click", function(){
let hexColour ="#";
for(let i = 0;i<6;i++){ // Loop through array 6 times to generate a hex colour
hexColour += hex[getrandomnumber()]
console.log(hexColour)
}
colour.textContent = hexColour
document.body.style.backgroundColor = hexColour
})

function getrandomnumber(){
      return Math.floor(Math.random()*hex.length);
}