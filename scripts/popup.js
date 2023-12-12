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
let ville = document.getElementById("ville_localisation");
let starToggle = document.getElementById("star_toggle")
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

//Création d'un tableau favorite
let arrayFavorite = [];

//Loop For pour check si la localisation est déjà en favorite.
for (let i; arrayFavorite.lenght ; i++) {
    let divFav = document.getElementById(`divFav${i}`);
    if (divFav != undefined){
        if (divFav.textContent == ville.textContent) {
            starToggle.src = "./img/star_filled.png";
        }
    }
}

//Event button pour créer une div favorite et changer l'icone star en jaune.
starToggle.addEventListener("click",()=>{
    let i = 0;
    if (starToggle.src == "./img/star_filled.png") {
        return;
    }
    else {
        arrayFavorite.push(ville.textContent);
        
        let sectionFav = document.createElement("section");
        divFav.classList.add("sectionFav");

        let divFav = document.createElement("div");
        divFav.textContent = ville.textContent;
        divFav.classList.add("divFav");
        
        let buttonSupprimer = document.createElement("img");
        buttonSupprimer.classList.add("buttonSupprimer");
        buttonSupprimer.setAttribute("src", "./remove.png");

        buttonSupprimer.addEventListener("click", () => {
            let removeVille = divFav.textContent;
            favoriteSuprimme(arrayFavorite, removeVille);
            buttonSupprimer.parentElement.remove();
        })

        popupFavourite.appendChild(sectionFav);
        sectionFav.appendChild(divFav);
        sectionFav.appendChild(buttonSupprimer);
            
        for (let i; arrayFavorite.lenght; i++) {
            sectionFav.id = `sectionFav${i}`;
            divFav.id = `divFav${i}`;
        }
    }
})

function favoriteSuprimme(arrayFavorite, removeVille) { 
    return arrayFavorite.filter(function (dontRemove) { 
        return dontRemove != removeVille; 
    });
}

export {hideOverlay}