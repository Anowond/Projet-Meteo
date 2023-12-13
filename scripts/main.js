import { getResponse, getAstro } from "./api.js"
import getPosition from "./localisation.js"
import { hideOverlay , arrayFavorite} from "./popup.js"
import {backgroundUpdate} from "./background.js"

//recupération des éléments html par id pour l'écran principal
let weatherIconBig = document.getElementById("weatherIconBig")
let currentPosition = document.getElementById("currentPosition")
let inputAgrandi = document.getElementById("inputAgrandi")
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
let map = document.getElementById("map")

// Récupération des éléments HTML par id pour la partie "prévisions du jour"
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

// Récupération des éléments HTML par id pour la partie "prévisions du lendemain"
let weatherIconLittleMorningTomorrow = document.getElementById("weatherIconLittleMorningTomorrow")
let weather_morning_demain = document.getElementById("weather_morning_demain")
let temperature_short_demain_morning = document.getElementById("temperature_short_demain_morning")

let weatherIconLittleAfternoonTomorrow = document.getElementById("weatherIconLittleAfternoonTomorrow")
let weather_afternoon_demain = document.getElementById("weather_afternoon_demain")
let temperature_short_demain_afternoon = document.getElementById("temperature_short_demain_afternoon")

let weatherIconLittleEveningTomorrow = document.getElementById("weatherIconLittleEveningTomorrow")
let weather_everning_demain = document.getElementById("weather_everning_demain")
let temperature_short_demain_evening = document.getElementById("temperature_short_demain_evening")

let weatherIconLittleNightTomorrow = document.getElementById("weatherIconLittleNightTomorrow")
let weather_night_demain = document.getElementById("weather_night_demain")
let temperature_short_demain_night = document.getElementById("temperature_short_demain_night")

// Fonction de récupération de la localisation de l'ulitisateur
async function usePos() {
    try {
        const pos = await getPosition();
        console.log(pos);
        const latitude = pos.coords.latitude
        const longitude = pos.coords.longitude;
        //console.log(longitude, latitude);
        const userLocation = `${latitude},${longitude}`

        // Appel de l'API avec les donnes de géolocalisation
        const response = await getResponse(userLocation)
        const astro = await getAstro(userLocation)
        console.log(response, astro)

        //Attirubution des valeurs aux différents éléments de la page
        currentPosition.textContent = `Vous êtes à : ${response.location.name},${response.location.country}`
        weatherIconBig.src = response.current.condition.icon
        ville.textContent = `${response.location.name},${response.location.country}`
        temperature.textContent = `${response.current.temp_c}° Celsius`
        wet.textContent = `Humidité: ${response.current.humidity}%`
        wind.textContent = `Vent: ${response.current.wind_kph}Km/h`

        let currentAqi = response.current.air_quality["us-epa-index"]
        switch (currentAqi) {

            case 1:
                aqi.textContent = "AQI: Bonne"
                aqi.classList.add("aqi1")
                break;
            case 2:
                aqi.textContent = "AQI: Modérée"
                aqi.classList.add("aqi2")
                break;
            case 3:
                aqi.textContent = "AQI: Dégradée"
                aqi.classList.add("aqi3")
                break;
            case 4:
                aqi.textContent = "AQI: Nocive"
                aqi.classList.add("aqi4")
                break;
            case 5:
                aqi.textContent = "AQI: Trés Nocive"
                aqi.classList.add("aqi5")
                break;
            case 6:
                aqi.textContent = "AQI: Dangereuse"
                aqi.classList.add("aqi6")
                break;
        }

        uv.textContent = `UV: ${response.current.uv}`
        sunrise.textContent = `${astro.astronomy.astro.sunrise}`
        sunset.textContent = `${astro.astronomy.astro.sunset}`

        // Attribution des valeurs tirées de l'API pour les prévisions du jour
        weatherIconLittleMorning.src = response.forecast.forecastday[0].hour[6].condition.icon
        weather_morning.textContent = response.forecast.forecastday[0].hour[6].condition.text
        temperatureMorning.textContent = response.forecast.forecastday[0].hour[6].temp_c

        weatherIconLittleAfternoon.src = response.forecast.forecastday[0].hour[11].condition.icon
        weather_afternoon.textContent = response.forecast.forecastday[0].hour[11].condition.text
        temperatureAfternoon.textContent = response.forecast.forecastday[0].hour[11].temp_c

        weatherIconLittleEvening.src = response.forecast.forecastday[0].hour[16].condition.icon
        weather_evening.textContent = response.forecast.forecastday[0].hour[16].condition.text
        temperatureEvening.textContent = response.forecast.forecastday[0].hour[16].temp_c

        weatherIconLittleNight.src = response.forecast.forecastday[0].hour[23].condition.icon
        weather_night.textContent = response.forecast.forecastday[0].hour[23].condition.text
        temperatureNight.textContent = response.forecast.forecastday[0].hour[23].temp_c

        // Attribution des valeurs tirées de l'API pour les prévisions du lendemain
        weatherIconLittleMorningTomorrow.src = response.forecast.forecastday[1].hour[6].condition.icon
        weather_morning_demain.textContent = response.forecast.forecastday[1].hour[6].condition.text
        temperature_short_demain_morning.textContent = response.forecast.forecastday[1].hour[6].temp_c

        weatherIconLittleAfternoonTomorrow.src = response.forecast.forecastday[1].hour[11].condition.icon
        weather_afternoon_demain.textContent = response.forecast.forecastday[1].hour[11].condition.text
        temperature_short_demain_afternoon.textContent = response.forecast.forecastday[1].hour[11].temp_c

        weatherIconLittleEveningTomorrow.src = response.forecast.forecastday[1].hour[16].condition.icon
        weather_everning_demain.textContent = response.forecast.forecastday[1].hour[16].condition.text
        temperature_short_demain_evening.textContent = response.forecast.forecastday[1].hour[16].temp_c

        weatherIconLittleNightTomorrow.src = response.forecast.forecastday[1].hour[23].condition.icon
        weather_night_demain.textContent = response.forecast.forecastday[1].hour[23].condition.text
        temperature_short_demain_night.textContent = response.forecast.forecastday[1].hour[23].temp_c

        //Création de la carte
        let map = L.map('map').setView([latitude, longitude], 13);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([latitude, longitude]).addTo(map)
            .bindPopup('Vous êtes ici')

    } catch (error) {
        console.error(error);
    }


}

//   Appelez la fonction usepos
usePos();


//recuperation de la reponse
bouton2.addEventListener("click", async () => {
    let resultatRetour = await getResponse(inputAgrandi.value);
    let astro = await getAstro(inputAgrandi.value)
    console.log(resultatRetour)
    weatherIconBig.src = resultatRetour.current.condition.icon
    weatherIconBig.alt = resultatRetour.current.condition.text
    ville.textContent = `${resultatRetour.location.name}, ${resultatRetour.location.country}`
    weather_today.textContent = resultatRetour.current.condition.text
    temperature.textContent = `${resultatRetour.current.temp_c}° Celsius`
    wet.textContent = `Humidité: ${resultatRetour.current.humidity}%`
    wind.textContent = `Vent: ${resultatRetour.current.wind_kph}Km/h`

    let currentAqi = resultatRetour.current.air_quality["us-epa-index"]
    //console.log(currentAqi)
    switch (currentAqi) {

        case 1:
            aqi.textContent = "AQI: Bonne"
            aqi.classList.add("aqi1")
            break;
        case 2:
            aqi.textContent = "AQI: Modérée"
            aqi.classList.add("aqi2")
            break;
        case 3:
            aqi.textContent = "AQI: Dégradée"
            aqi.classList.add("aqi3")
            break;
        case 4:
            aqi.textContent = "AQI: Nocive"
            aqi.classList.add("aqi4")
            break;
        case 5:
            aqi.textContent = "AQI: Trés Nocive"
            aqi.classList.add("aqi5")
            break;
        case 6:
            aqi.textContent = "AQI: Dangereuse"
            aqi.classList.add("aqi6")
            break;
    }

    uv.textContent = `UV: ${resultatRetour.current.uv}`
    sunrise.textContent = `${astro.astronomy.astro.sunrise}`
    sunset.textContent = `${astro.astronomy.astro.sunset}`

    // Attribution des valeurs tirées de l'API pour les prévisions du jour
    weatherIconLittleMorning.src = resultatRetour.forecast.forecastday[0].hour[6].condition.icon
    weatherIconLittleMorning.alt = resultatRetour.forecast.forecastday[0].hour[6].condition.text
    weather_morning.textContent = resultatRetour.forecast.forecastday[0].hour[6].condition.text
    temperatureMorning.textContent = resultatRetour.forecast.forecastday[0].hour[6].temp_c

    weatherIconLittleAfternoon.src = resultatRetour.forecast.forecastday[0].hour[11].condition.icon
    weatherIconLittleAfternoon.alt = resultatRetour.forecast.forecastday[0].hour[11].condition.text
    weather_afternoon.textContent = resultatRetour.forecast.forecastday[0].hour[11].condition.text
    temperatureAfternoon.textContent = resultatRetour.forecast.forecastday[0].hour[11].temp_c

    weatherIconLittleEvening.src = resultatRetour.forecast.forecastday[0].hour[16].condition.icon
    weatherIconLittleEvening.alt = resultatRetour.forecast.forecastday[0].hour[16].condition.text
    weather_evening.textContent = resultatRetour.forecast.forecastday[0].hour[16].condition.text
    temperatureEvening.textContent = resultatRetour.forecast.forecastday[0].hour[16].temp_c

    weatherIconLittleNight.src = resultatRetour.forecast.forecastday[0].hour[23].condition.icon
    weatherIconLittleNight.alt = resultatRetour.forecast.forecastday[0].hour[23].condition.text
    weather_night.textContent = resultatRetour.forecast.forecastday[0].hour[23].condition.text
    temperatureNight.textContent = resultatRetour.forecast.forecastday[0].hour[23].temp_c

    // Attribution des valeurs tirées de l'API pour les prévisions du lendemain
    weatherIconLittleMorningTomorrow.src = resultatRetour.forecast.forecastday[1].hour[6].condition.icon
    weatherIconLittleMorningTomorrow.alt = resultatRetour.forecast.forecastday[1].hour[6].condition.text
    weather_morning_demain.textContent = resultatRetour.forecast.forecastday[1].hour[6].condition.text
    temperature_short_demain_morning.textContent = resultatRetour.forecast.forecastday[1].hour[6].temp_c

    weatherIconLittleAfternoonTomorrow.src = resultatRetour.forecast.forecastday[1].hour[11].condition.icon
    weatherIconLittleAfternoonTomorrow.alt = resultatRetour.forecast.forecastday[1].hour[11].condition.text
    weather_afternoon_demain.textContent = resultatRetour.forecast.forecastday[1].hour[11].condition.text
    temperature_short_demain_afternoon.textContent = resultatRetour.forecast.forecastday[1].hour[11].temp_c

    weatherIconLittleEveningTomorrow.src = resultatRetour.forecast.forecastday[1].hour[16].condition.icon
    weatherIconLittleEveningTomorrow.alt = resultatRetour.forecast.forecastday[1].hour[16].condition.text
    weather_everning_demain.textContent = resultatRetour.forecast.forecastday[1].hour[16].condition.text
    temperature_short_demain_evening.textContent = resultatRetour.forecast.forecastday[1].hour[16].temp_c

    weatherIconLittleNightTomorrow.src = resultatRetour.forecast.forecastday[1].hour[23].condition.icon
    weatherIconLittleNightTomorrow.alt = resultatRetour.forecast.forecastday[1].hour[23].condition.text
    weather_night_demain.textContent = resultatRetour.forecast.forecastday[1].hour[23].condition.text
    temperature_short_demain_night.textContent = resultatRetour.forecast.forecastday[1].hour[23].temp_c

    //Création de la carte

    //Réinitialisation de la carte pour un nouvel affichage 
    map = L.DomUtil.get('map');
    if (map != null) {
        map._leaflet_id = null;
    }

    // Génération de la nouvelle carte
    map = L.map('map', {
        center: [resultatRetour.location.lat, resultatRetour.location.lon],
        zoom: 5
    });

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([resultatRetour.location.lat, resultatRetour.location.lon]).addTo(map)
        .bindPopup('Vous êtes ici')



    hideOverlay();
})

/*bouton2.addEventListener("click", async () => {
    let resultatRetour = await getResponse(inputAgrandi.value);
    console.log(resultatRetour)
})*/



