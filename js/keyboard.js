function insertChar(char) {
  var display = document.getElementById("display");
  display.textContent += char;
}

function backspace() {
  var display = document.getElementById("display");
  display.textContent = display.textContent.slice(0, -1);
}

function send() {
  var display = document.getElementById("display");
  var conteudo = display.textContent;

  if (!conteudo) {
    alert("OPS!! Você precisa cadastrar um nome!");
    return;
  }
  // Aqui você pode enviar o conteúdo para onde precisar
  sessionStorage.setItem("NomeDoCliente", conteudo);
  // Substitua o console.log acima com a lógica real de envio

  window.location.href = "pagamento.html"; // redireciona para proxima pagina desejada
}
