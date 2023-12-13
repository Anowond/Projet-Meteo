import getPosition from "./localisation.js";
import { getAstro, getResponse } from "./api.js";

/*import getResponse from "./api.js"
    //recupération des variable par id
    let inputOrigine = document.getElementById("afficherPopup")    
    let popupInput = document.getElementById("popupInput")
    let inputAgrandi = document.getElementById("inputAgrandi")
    let bouton = document.getElementById("boutonGO")
    popupInput.style.display = "none";

    //au click de l'input écran
    inputOrigine.addEventListener("click", () => {
        //apparition du popup input agrandi
        popupInput.style.display = "block";
    });
    
*/

let afficherPopup = document.getElementById("afficherPopup")
let overlay = document.getElementById("overlay")
let fermerPopup = document.getElementById("fermerPopup")
let input = document.getElementById("inputAgrandi")
let btnGO = document.getElementById("boutonGO")



//ouverture du popup au click sur "pour rechercher une ville,cliqué ici"
afficherPopup.addEventListener("click", () => {

    //permutation en visuel de "none" à "block"
    overlay.style.display = "block";

    //curseur sur l'input
    input.focus();
})

//recuperation de la reponse
/*btnGO.addEventListener("click", async ()=>{

    //recuperation de la valeur de l'inputagrandi 
    let recherche = input.value
    let resultatRetour = await getResponse(recherche);       
})*/

//fermeture du popup au clic sur bouton fermer
fermerPopup.addEventListener("click", () => {
    hideOverlay();
})

function hideOverlay() {
    overlay.style.display = "none";
}

/*document.addEventListener("click", (event)=>{
    if(!overlay.contains(event.target) && event.target !== overlay){
        overlay.style.display = "none";
    }
})*/


export { hideOverlay }