import { getResponse, getAstro } from "./api.js"

//recupération des éléments html par id pour l'écran principal
let weatherIconBig = document.getElementById("weatherIconBig")
//let inputOrigine = document.getElementById("inputOrigine")
//let popupInput = document.getElementById("popupInput")
let inputAgrandi = document.getElementById("inputAgrandi")
//let bouton1 = document.getElementById("button")
let bouton2 = document.getElementById("boutonGO")
let ville = document.getElementById("ville_localisation")
let weather_today = document.getElementById("weather_today")
let temperature = document.getElementById("temperature")
let wet = document.getElementById("wet_today")
let wind = document.getElementById("wind_today")
let aqi = document.getElementById("aqi_today")
let uv = document.getElementById("uv_today")
let sunrise = document.getElementById("soleil_leve")
let sunset = document.getElementById("soleil_couche")

// récupération des éléments html par id pour la partie "prévisions du jour"
let weatherIconLittleMorning = document.getElementById("weatherIconLittleMorning")
let weather_morning = document.getElementById("weather_morning")
let temperatureMorning = document.getElementById("temperature_short_morning")

let weatherIconLittleAfternoon = document.getElementById("weatherIconLittleAfternoon")
let weather_afternoon = document.getElementById("weather_afternoon")
let temperatureAfternoon = document.getElementById("temperature_short_afternoon")

let weatherIconLittleEvening = document.getElementById("weatherIconLittleEvening")
let weather_evening = document.getElementById("weather_evening")
let temperatureEvening = document.getElementById("temperature_short_evening")

let weatherIconLittleNight = document.getElementById("weatherIconLittleNight")
let weather_night = document.getElementById("weather_night")
let temperatureNight = document.getElementById("temperature_short_night")

//popupInput.style.display = "none";

//au click de l'input écran
/*inputOrigine.addEventListener("click", () => {
    //apparition du popup input agrandi
    popupInput.style.display = "block";
})*/

//récupération des données retourné par l'API

//recuperation de la reponse
bouton2.addEventListener("click", async () => {
    let resultatRetour = await getResponse(inputAgrandi.value);
    let astro = await getAstro(inputAgrandi.value)
    console.log(resultatRetour, astro)
    weatherIconBig.src = resultatRetour.current.condition.icon
    weatherIconBig.alt = resultatRetour.current.condition.text
    ville.textContent = `${resultatRetour.location.name},${resultatRetour.location.country}`
    weather_today.textContent = resultatRetour.current.condition.text
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

    uv.textContent = `UV: ${resultatRetour.current.uv}`
    sunrise.textContent = `${astro.astronomy.astro.sunrise}`
    sunset.textContent = `${astro.astronomy.astro.sunset}`

    // Attribution des valeurs tirées de l'API 
    weatherIconLittleMorning.src = resultatRetour.forecast.forecastday[0].hour[6].condition.icon
    weatherIconLittleMorning.alt = resultatRetour.forecast.forecastday[0].hour[6].condition.text
    weather_morning.textContent = resultatRetour.forecast.forecastday[0].hour[6].condition.text
    temperatureMorning.textContent = resultatRetour.forecast.forecastday[0].hour[6].temp_c

    weatherIconLittleAfternoon.src = resultatRetour.forecast.forecastday[0].hour[11].condition.icon
    weatherIconLittleAfternoon.alt = resultatRetour.forecast.forecastday[0].hour[6].condition.text
    weather_afternoon.textContent = resultatRetour.forecast.forecastday[0].hour[11].condition.text
    temperatureAfternoon.textContent = resultatRetour.forecast.forecastday[0].hour[11].temp_c

    weatherIconLittleEvening.src = resultatRetour.forecast.forecastday[0].hour[16].condition.icon
    weatherIconLittleEvening.alt = resultatRetour.forecast.forecastday[0].hour[6].condition.text
    weather_evening.textContent = resultatRetour.forecast.forecastday[0].hour[16].condition.text
    temperatureEvening.textContent = resultatRetour.forecast.forecastday[0].hour[16].temp_c

    weatherIconLittleNight.src = resultatRetour.forecast.forecastday[0].hour[23].condition.icon
    weatherIconLittleNight.alt = resultatRetour.forecast.forecastday[0].hour[6].condition.text
    weather_night.textContent = resultatRetour.forecast.forecastday[0].hour[23].condition.text
    temperatureNight.textContent = resultatRetour.forecast.forecastday[0].hour[23].temp_c


})

/*bouton2.addEventListener("click", async () => {
    let resultatRetour = await getResponse(inputAgrandi.value);
    console.log(resultatRetour)
})*/



