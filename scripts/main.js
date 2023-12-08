import getResponse from "./api.js"

let inputSearch = document.getElementById("search-bar")
let button = document.getElementById("button")

button.addEventListener("click", async () => {
    let reponse = await getResponse(inputSearch.value)
    console.log(reponse)
})




