let ville = document.getElementById("ville_localisation");
let starToggle = document.getElementById("star_toggle")
let afficherPopup = document.getElementById("afficherPopup")
let overlay = document.getElementById("overlay")
let fermerPopup = document.getElementById("fermerPopup")
let input = document.getElementById("inputAgrandi")
let btnGO = document.getElementById("boutonGO")
let btnFavoris = document.getElementById("btnPopupFavoris")


//ouverture du popup au click sur "pour rechercher une ville,cliqué ici"
afficherPopup.addEventListener("click", () => {

    //permutation en visuel de "none" à "block"
    overlay.style.display = "block";

    //curseur sur l'input
    input.focus();
})

//fermeture du popup au clic sur bouton fermer
fermerPopup.addEventListener("click", () => {
    hideOverlay();
})

function hideOverlay() {
    overlay.style.display = "none";
}


//Gestion des favoris

function favoris() {
    let btnPopupFavoris = document.getElementById("btnPopupFavoris")
    let listFavoris = document.getElementById("listFavoris")
    let overlayFavoris = document.getElementById("overlayFavoris")
    let popup_container = document.getElementById("popup_container")
    let fermerFavoris = document.getElementById("fermerFavoris")

    btnPopupFavoris.addEventListener("click",()=>{
        overlayFavoris.style.display = "block";
        popup_container.style.visibility = "hidden";
    
    })
    
    fermerFavoris.addEventListener("click",()=>{
        overlayFavoris.style.display = "none"
        popup_container.style.visibility = "visible"   
    })

    let divFavoris = document.createElement("div")
    divFavoris.classList.add("popupFavoris")

    btnFavoris.addEventListener("click", () => {
        overlayFavoris.appendChild(divFavoris)
    })

    //Tableau de stockage des favoris
    let tableaufav = []

    //Ecouteur d'événement : Ajout du lieu en cours dans le tableau tableauFav
    starToggle.addEventListener("click", () => {

        console.log(`Etat de tableauFav : ${tableaufav}`)

        //Changement de l'icône, push du nom de la ville dans le tableau
        starToggle.src = "../img/star_filled.png"
        tableaufav.push(ville.textContent)
        console.log(tableaufav)

        //Création d'une div pour accueillir le nom de la ville
        let divFav = document.createElement("div")
        divFav.classList.add("divFav")
        divFav.textContent = ville.textContent
        divFavoris.appendChild(divFav)

        //Création d'un balise img pour accueillir l'image du bouton supprimer
        let removeBtn = document.createElement("img")
        removeBtn.src = "../img/bouton-supprimer.png"
        divFav.appendChild(removeBtn)

        //Ecouteur d'événements pour supprimer la div parente a clic sur le bouton supprimer
        removeBtn.addEventListener("click", () => {

            //Boucle sur tableau des villes stockées pour trouver la ville correspondante a la div et la supprimer
            for (let i = 0; i < tableaufav.length; i++) {
                console.log(tableaufav[i])
                if (tableaufav[i] === divFav.textContent) {
                    tableaufav.splice([i], 1)
                    console.log(tableaufav)
                }
            }

            removeBtn.parentElement.remove()
        })
    })


}

export { favoris, hideOverlay }