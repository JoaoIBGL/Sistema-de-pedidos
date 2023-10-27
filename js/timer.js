document.addEventListener("DOMContentLoaded", function () {
  var timerElement = document.getElementById("timer");
  var progressElement = document.getElementById("progress");

  var timerConfig = 0.2; // coloque aqui o tempo que deseja que dure o timer, lembrando que o numero colocado aqui sera multiplicado por 60, ou seja se deseja um minuto coloqque "1", dois minutos "2" e assim por diante

  var totalTime = timerConfig * 60;
  var timeRemaining = totalTime;

  function updateTimer() {
    var minutes = Math.floor(timeRemaining / 60);
    var seconds = timeRemaining % 60;

    timerElement.textContent =
      minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }

  function updateProgressBar() {
    var percentage = (timeRemaining / totalTime) * 100;
    progressElement.style.width = percentage + "%";
  }

  function countdown() {
    if (timeRemaining > 0) {
      timeRemaining--;
      updateTimer();
      updateProgressBar();
      setTimeout(countdown, 1000);
    } else {
      // Redireciona para outra página ao finalizar o tempo ou pode ser criado uma tela de tempo exppirado
      window.location.href = "success.html";
    }
  }

  countdown();
});
