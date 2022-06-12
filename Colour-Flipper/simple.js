// Array for our random colours
const colours = ["green", "red", "rgba(133,122,200)","#f15025"];
// Creating a variable to target the ascociated "btn" tag within out HTML
const btn = document.getElementById("btn")
// Creating a variable to target the ascociated ".colour" tag within out HTML
const colour = document.querySelector(".colour");

btn.addEventListener("click", function(){
      // Get random number between 0-3 (as that is the number of entries in the above array)
      // Note: use .document and then drill down to target specific areas using .Example (Background Colour)
      // Targetting the "backgroundColor" to change the background colour
      // Targetting the text to change its colour
      const randomnumber=getrandomnumber();
      document.body.style.backgroundColor = colours[randomnumber]; 
      colour.textContent = colours[randomnumber]
}) 

// Create a function to get a random number to use withing our JS for a random background colour
// Math.floor rounds the random number to the lowest integer 
// Math.random is giving us a random number between 0 and 1, and then we * it by the number of entries in our array
// When we times it by the number of entries in our array, that lets us get a number between 0-3 for our index
function getrandomnumber(){
      return Math.floor(Math.random()*colours.length);
}