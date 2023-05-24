let celsius = document.querySelector("#celsius");
let fahrenheit = document.querySelector("#fahrenheit");
let kelvin = document.querySelector("#kelvin");

document.getElementById("submit").addEventListener('click',function(){
    let fah = (parseFloat(celsius.value) * 9) / 5 + 32;
    fahrenheit.value = parseFloat(fah.toFixed(2));

    let kel = (parseFloat(celsius.value) + 273.15);
    kelvin.value = parseFloat(kel.toFixed(2));
});

//resetting the values
document.getElementById("reset").addEventListener('click',function(){
    celsius.value = "";
    fahrenheit.value = "";
    kelvin.value = "";
})