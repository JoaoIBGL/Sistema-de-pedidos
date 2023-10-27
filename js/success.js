document.addEventListener("DOMContentLoaded", function () {
  // Recupera o valor do 'NomeDoCliente' do sessionStorage
  var nomeDoCliente = sessionStorage.getItem("NomeDoCliente");
  var currentDate = new Date();

  // Obtém a hora e o minuto da hora atual
  var hour = currentDate.getHours();
  var minut = currentDate.getMinutes();

  // Formata a hora e o minuto como string
  var hourFormat = hour < 10 ? "0" + hour : hour;
  var minutFormat = minut < 10 ? "0" + minut : minut;

  var currentHour = hourFormat + ":" + minutFormat;

  if (nomeDoCliente !== null) {
    document.querySelector(".clientName").textContent = nomeDoCliente;
    document.querySelector(".hour").textContent = currentHour;
  } else {
    console.log("NomeDoCliente não encontrado no sessionStorage.");
  }
});
