let circularProgress = document.querySelector(".circal-progress");
let ProgressValue = document.querySelector(".progress-value");
let ProgressStartValue = 0,
  ProgressEndValue = 90,
  speed = 40;

let progress = setInterval(() => {
  ProgressStartValue++;

  ProgressValue.textContent = `${ProgressStartValue}%`;
  circularProgress.style.background = `conic-gradient(#7d29df ${
    ProgressStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (ProgressStartValue == ProgressEndValue) {
    clearInterval(progress);
  }
}, speed);
