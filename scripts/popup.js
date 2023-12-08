import getResponse from "./api.js"
    //recupération des variable par id
    let inputOrigine = document.getElementById("inputOrigine")    
    let popupInput = document.getElementById("popupInput")
    let inputAgrandi = document.getElementById("inputAgrandi")
    let bouton = document.getElementById("boutonGO")
    popupInput.style.display = "none";

    //au click de l'input écran
    inputOrigine.addEventListener("click", () => {
        //apparition du popup input agrandi
        popupInput.style.display = "block";
    });
    //récupération des données retourné par l'API
    function searchAPI(){
        //recuperation de la valeur de l'inputagrandi 
        recherche = inputAgrandi.value
        //recuperation de la reponse
        let resultatRetour = bouton.addEventListener("click", async ()=>{
            await getResponse(recherche);
        })
        return resultatRetour

    }
