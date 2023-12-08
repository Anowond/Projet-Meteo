import getResponse from "./api.js"

let tableauAPI = await getResponse("Alençon")

for(let object in tableauAPI){
    for (let info in object.current){
        for (let weather in info.condition){
            switch(weather.code){
                case '1000' :
                document.body.style.backgroundImage = 'url("../img/sunny.jpg")';
                break;
                case '1003' :
                case '1006' :
                case '1009' :
                    document.body.style.backgroundImage = 'url("../img/cloud.jpg")';
                    break;
                case '1030' :
                case '1135' :
                case '1147' :
                    document.body.style.backgroundImage = 'url("../img/fog.jpg")';
                    break;
                case '1063' :
                case '1180' :
                case '1183' :
                case '1186' :
                case '1189' :
                case '1192' :
                case '1195' :
                case '1198' :
                case '1201' :
                    document.body.style.backgroundImage = 'url("../img/rain.jpg")';
                    break;
                case '1066' :
                case '1114' :
                case '1210' :
                case '1213' :
                case '1216' :
                case '1219' :
                case '1222' :
                case '1225' :
                    document.body.style.backgroundImage = 'url("../img/snow.jpg")';
                    break;
                case '1069' :
                case '1204' :
                case '1207' :
                    document.body.style.backgroundImage = 'url("../img/sleet.jpg")';
                    break;
                case '1072' :
                case '1150' :
                case '1153' :
                case '1168' :
                case '1171' :
                    document.body.style.backgroundImage = 'url("../img/drizzle.jpg")';
                    break;
                case '1066' :
                case '1114' :
                case '1210' :
                case '1213' :
                case '1216' :
                case '1219' :
                case '1222' :
                case '1225' :
                    document.body.style.backgroundImage = 'url("../img/snow.jpg")';
                    break;
                }
            }
        }
    }