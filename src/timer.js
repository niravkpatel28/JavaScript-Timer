var intervalId;
var seconds = 0;
const startTimer = () => {
  if (!intervalId) {
    intervalId = setInterval(() => {
      displayTime();
      seconds += 1;
    }, 1000);
  }
  console.log(intervalId);
};

const pauseTimer = () => {
  if (intervalId) {
    intervalId = clearInterval(intervalId);
  }
};

const resetTimer = () => {
  seconds = 0;
  displayTime();
  intervalId = clearInterval(intervalId);
};

function displayTime() {
  let stopWatch = document.getElementById("stopwatch");
  let minutes = seconds / 60;
  let hours = minutes / 60;
  stopWatch.innerHTML = `<p>
    ${Math.floor(hours)}:
    ${Math.floor(minutes % 60)}:
    ${seconds % 60} </p>`;
}
