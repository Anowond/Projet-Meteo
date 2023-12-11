import { getResponse, getAstro } from "./api.js"

//recupération des éléments html par id pour l'écran principal
let weatherIconBig = document.getElementById("weatherIconBig")
let inputOrigine = document.getElementById("inputOrigine")
let popupInput = document.getElementById("popupInput")
let inputAgrandi = document.getElementById("inputAgrandi")
//let bouton1 = document.getElementById("button")
let bouton2 = document.getElementById("boutonGO")
let ville = document.getElementById("ville_localisation")
let temperature = document.getElementById("temperature")
let wet = document.getElementById("wet_today")
let wind = document.getElementById("wind_today")
let aqi = document.getElementById("aqi_today")
let uv = document.getElementById("uv_today")
let sunrise = document.getElementById("soleil_leve")
let sunset = document.getElementById("soleil_couche")
popupInput.style.display = "none";

//au click de l'input écran
inputOrigine.addEventListener("click", () => {
    //apparition du popup input agrandi
    popupInput.style.display = "block";
});*/

//récupération des données retourné par l'API

//recuperation de la reponse
bouton1.addEventListener("click", async () => {
    let resultatRetour = await getResponse(inputOrigine.value);
    console.log(resultatRetour)
    ville.textContent = `${resultatRetour.location.name},${resultatRetour.location.country}`
    temperature.textContent = `${resultatRetour.current.temp_c}° Celsius`
    wet.textContent = `Humidité: ${resultatRetour.current.humidity}%`
    wind.textContent = `Vent: ${resultatRetour.current.wind_kph}Km/h`

    let currentAqi = resultatRetour.current.air_quality["us-epa-index"]
    //console.log(currentAqi)
    switch (currentAqi) {

        case 1:
            aqi.textContent = "AQI: Bonne"
            break;
        case 2:
            aqi.textContent = "AQI: Modérée"
            break;
        case 3:
            aqi.textContent = "AQI: Dégradée"
            break;
        case 4:
            aqi.textContent = "AQI: Nocive"
            break;
        case 5:
            aqi.textContent = "AQI: Trés Nocive"
            break;
        case 6:
            aqi.textContent = "AQI: Dangereuse"
            break;
    }
    
    let astro = await getAstro(inputOrigine.value)
    console.log(astro)
})

/*bouton2.addEventListener("click", async () => {
    let resultatRetour = await getResponse(inputAgrandi.value);
    console.log(resultatRetour)
})*/



