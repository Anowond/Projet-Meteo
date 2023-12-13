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

//fermeture du popup au clic sur bouton fermer
fermerPopup.addEventListener("click",()=>{
    hideOverlay();
})

function hideOverlay() {
    overlay.style.display = "none";
}

let btnPopupFavoris = document.getElementById("btnPopupFavoris")
let listFavoris = document.getElementById("listFavoris")
let overlayFavoris = document.getElementById("overlayFavoris")
let popup_container = document.getElementById("popup_container")
let fermerFavoris = document.getElementById("fermerFavoris")

//mise en cache du bouton appel popup à l'ouverture du popup favoris
btnPopupFavoris.addEventListener("click",()=>{
    overlayFavoris.style.display = "block";
    popup_container.style.visibility = "hidden";

})

//remise en place du bouton appel popup à la fermeture du popup favoris 
fermerFavoris.addEventListener("click",()=>{
    overlayFavoris.style.display = "none"
    popup_container.style.visibility = "visible"   
})

//Création d'un tableau favorite
let arrayFavorite = [];

//Loop For pour check si la localisation est déjà en favorite.
for (let i = 0; i < arrayFavorite.length ; i++) {
    let divFav = document.getElementById(`divFav${i}`);
    if (divFav !== null){
        if (divFav.textContent == ville.textContent) {
            starToggle.src = "./img/star_filled.png";
        }
    }
}

//Event button pour créer une div favorite et changer l'icone star en jaune.
starToggle.addEventListener("click",()=>{
    if (starToggle.src !== "./img/star_filled.png") {
        starToggle.src = "./img/star_filled.png"
        arrayFavorite.push(ville.textContent);
        let sectionFav = document.createElement("section");
        sectionFav.classList.add("ajoutFavoris");

        let divFav = document.createElement("div");
        divFav.textContent = ville.textContent;
        divFav.classList.add("divFav");
        
        let buttonSupprimer = document.createElement("img");
        buttonSupprimer.classList.add("buttonSupprimer");
        buttonSupprimer.setAttribute("src", "../img/remove.png");

        for (let i = 0; i < arrayFavorite.length; i++) {
            sectionFav.setAttribute("id",`ajoutFavoris${i}`);
            divFav.setAttribute("id",`divFav${i}`);
        }
            
        buttonSupprimer.addEventListener("click", () => {
            arrayFavorite.pop(ville.textContent);
            buttonSupprimer.parentElement.remove();
            console.log(arrayFavorite)
        })

        listFavoris.appendChild(sectionFav);
        sectionFav.appendChild(divFav);
        sectionFav.appendChild(buttonSupprimer);
        console.log(arrayFavorite)
    }
})

export {hideOverlay, arrayFavorite}