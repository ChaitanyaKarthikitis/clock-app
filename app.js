setInterval(setClock,1000)
let hour_hand = document.querySelector(".hour--hand")

let minute_hand = document.querySelector(".minute--hand")

let second_hand = document.querySelector(".second--hand")


function setClock(){
     const currentDate = new Date()


    let currentTime = new Date()

    let secondsRatio = currentTime.getSeconds()/60

    let minutesRatio = (secondsRatio + currentTime.getMinutes())/60

    let hoursRatio = (minutesRatio +  currentTime.getHours())/12


    setRotation(second_hand,secondsRatio)
    setRotation(minute_hand,minutesRatio)
    setRotation(hour_hand,hoursRatio)



}

function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation',rotationRatio*360);
}


setClock()