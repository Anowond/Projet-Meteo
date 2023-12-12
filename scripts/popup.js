import {getResponse} from "./api.js"
    //recupération des variable par id
    /*let inputOrigine = document.getElementById("afficherPopup")    
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
afficherPopup.addEventListener("click",()=>{

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
fermerPopup.addEventListener("click",()=>{
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

let btnPopupFavoris = document.getElementById("btnPopupFavoris")
let popupFavoris = document.getElementById("popupFavoris")
let overlayFavoris = document.getElementById("overlayFavoris")
let popup_container = document.getElementById("popup_container")
let fermerFavoris = document.getElementById("fermerFavoris")
let buttonSupprime =document.getElementById("buttonSupprime")
let localisation = document.getElementById("localisation")

btnPopupFavoris.addEventListener("click",()=>{
    overlayFavoris.style.display = "block";
    popup_container.style.visibility = "hidden";

})

fermerFavoris.addEventListener("click",()=>{
    overlayFavoris.style.display = "none"
    popup_container.style.visibility = "visible"
   
})

buttonSupprime.addEventListener("click",()=>{
    localisation.textContent.remove()
})



export {hideOverlay}