import getResponse from "./api.js"

let reponse = await getResponse("Alençon")




//recupération des variable par id
let inputOrigine = document.getElementById("inputOrigine")
let popupInput = document.getElementById("popupInput")
let inputAgrandi = document.getElementById("inputAgrandi")
let bouton = document.getElementById("boutonGO")
popupInput.style.display = "none";

//au click de l'input écran
inputOrigine.addEventListener("click", () => {
    //apparition du popup input agrandi
    popupInput.style.display = "block";
});
let resultatRetour
//recuperation de la reponse
bouton.addEventListener("click", async () => {
    //recuperation de la valeur de l'inputagrandi 
    let recherche = inputAgrandi.value
    resultatRetour = await getResponse(recherche);
    console.log(resultatRetour)
})
/*
let villeLocalisation = document.getElementById("ville_localisation")
let mainJour = document.getElementById("main_jour")
let tempsJour = document.getElementById("temps_jour")
let iconToday = document.getElementById("icon_today")
let weatherIconBig = document.getElementById("weatherIconBig")
let weatherToday = document.getElementById("weather_today")
let temperature = document.getElementById("temperature")
let wetToday = document.getElementById("wet_today")
let windToday = document.getElementById("wind_today")
let aqiToday = document.getElementById("aqi_today")
let uvToday = document.getElementById("uv_today")
let soleilLeve = document.getElementById("soleil_leve")
let soleilCouche = document.getElementById("soleil_couche")

villeLocalisation.textContent = resultatRetour.location.name
console.log(villeLocalisation)
*/


