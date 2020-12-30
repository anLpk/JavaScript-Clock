//console.log("hello from inside")
const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");
function setTime() {
  const now = new Date();
  // console.log(now); ==> Wed Dec 30 2020 11:19:24 GMT+1100 (Australian Eastern Daylight Time)
  const second = now.getSeconds();
  const secondsDegrees = (second / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minute = now.getMinutes();
  // console.log(minute);
  const minutesDegrees = (minute / 60) * 360 + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hour = now.getHours();
  // console.log(hour);
  const hoursDegrees = (hour / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  }
  setInterval(setTime, 1000);
  setTime();
