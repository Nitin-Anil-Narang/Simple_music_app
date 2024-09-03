//var let const 
const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

const setTime = () => {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegree = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegree}deg)`

    const mins = now.getMinutes();
    const minsDegree = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minHand.style.transform = `rotate(${minsDegree}deg)`

    const hours = now.getHours();
    const hourDegree = ((hours / 12)* 360) +((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegree}deg)`
}
setInterval(setTime,1000);

setTime();