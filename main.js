

let videPlayer = document.querySelector('.videoBoxContainer')

let video = document.getElementById('video')

let playBtn = document.querySelector(".videoPlay")

function showVideo() {
    videPlayer.classList.remove("viewContent")
    videPlayer.style.visibility = "visible"
}

function closeVideo() {
    videPlayer.classList.add("viewContent")
    videPlayer.style.visibility = "hidden"
}

function playVideo() {
    video.play()
    video.style.filter = "blur(0) "
    playBtn.style.opacity = ".2"
}


let taregetMin = 53
let targetHour = 21
let tagetDays = 89


let minutestShow = document.getElementById("minTime")
let hoursShow = document.getElementById("hourTime")
let daysShow = document.getElementById("dayTime")

function updateHours() {
    targetHour -= 1
    if (targetHour == 0) {
        targetHour = 23
    }
    hoursShow.innerHTML = targetHour
}

setInterval(updateHours, 3600000)

function updateMinutes() {
    taregetMin -= 1
    if (taregetMin == 0) {
        taregetMin = 59
    }
    minutestShow.innerHTML = taregetMin
}

setInterval(updateMinutes, 60000)

function updateDays() {
    tagetDays -= 1
    if (tagetDays <= 0) {
        tagetDays = 0
        daysShow.innerHTML = tagetDays
    } else {
        daysShow.innerHTML = tagetDays
    }
    
}

