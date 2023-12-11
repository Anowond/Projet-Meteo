import {getResponse, getAstro} from "./api.js"

//recupération des variable par id
//let inputOrigine = document.getElementById("inputOrigine")
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

//récupération des données retourné par l'API

//recuperation de la reponse
bouton2.addEventListener("click", async () => {
    let resultatRetour = await getResponse(inputAgrandi.value);
    console.log(resultatRetour)
    ville.textContent = `${resultatRetour.location.name},${resultatRetour.location.country}`
    temperature.textContent = `${resultatRetour.current.temp_c}° Celsius`
    wet.textContent = `${resultatRetour.current.humidity}%` 
    wind.textContent = `${resultatRetour.current.wind_kph}Km/h`
   
    let currentAqi = resultatRetour.current.air_quality["us-epa-index"]
    console.log(currentAqi)
    switch (currentAqi) {

        case 1 :
            aqi.textContent = "Bonne"
        break;
        case 2 :
            aqi.textContent = "Modérée"
        break;
        case 3 :
            aqi.textContent = "Dégradée"
        break;
        case 4 :
            aqi.textContent = "Nocive"
        break;
        case 5 :
            aqi.textContent = "Trés Nocive"
        break;
        case 6 :
            aqi.textContent = "Dangereuse"
        break;
    }
    
    let astro = await getAstro(inputAgrandi.value)
    console.log(astro)
})

/*bouton2.addEventListener("click", async () => {
    let resultatRetour = await getResponse(inputAgrandi.value);
    console.log(resultatRetour)
})*/



