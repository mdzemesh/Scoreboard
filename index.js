// connect the items on hml
let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let homescore = 0
let guestscore = 0

function homeAdd1(){
    homescore += 1
    homeScore.innerText = homescore
}

function homeAdd2(){
    homescore += 2
    homeScore.innerText = homescore
}

function homeAdd3(){
    homescore += 3
    homeScore.innerText = homescore
}

function guestAdd1(){
    guestscore += 1
    guestScore.innerText = guestscore
}

function guestAdd2(){
    guestscore += 2
    guestScore.innerText = guestscore
}

function guestAdd3(){
    guestscore += 3
    guestScore.innerText = guestscore
}

function reset() {
    homescore = 0
    guestscore = 0
    
    homeScore.innerText = homescore
    guestScore.innerText = guestscore
}