// Write your code here!
const userInfo = {
    username:"MTUMIZI",
    description:"Karibu. Mimi ni mgeni hapa!",
    theme:"red"
}

function displayUser(userInfo){
    const header = document.querySelector("#main")
    header.textContent = "Kichupo nafsi cha " + userInfo.username 
    header.className = userInfo.theme
    const description = document.createElement("p")
    const body = document.querySelector("body")

    // description.textContent = userInfo.description
    // description.className = userInfo.theme
    
    body.append(description)
    body = document.querySelector("#p")
    body.textContent = ""
}
displayUser(userInfo)
//console.log ("userInfo")
