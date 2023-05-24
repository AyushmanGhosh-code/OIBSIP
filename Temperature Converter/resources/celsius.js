let celsius = document.querySelector("#celsius");
let fahrenheit = document.querySelector("#fahrenheit");
let kelvin = document.querySelector("#kelvin");

document.getElementById("submit").addEventListener('click',function(){
    let cel = ((parseFloat(fahrenheit.value) - 32) * 5) / 9;
    celsius.value = parseFloat(cel.toFixed(2));
  
    let kel = (parseFloat(fahrenheit.value) - 32) * 5 / 9 + 273.15;
    kelvin.value = parseFloat(kel.toFixed(2));
});


//resetting the values
document.getElementById("reset").addEventListener('click',function(){
    celsius.value = "";
    fahrenheit.value = "";
    kelvin.value = "";
})