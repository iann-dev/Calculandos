// Função para exibir o intérprete de LIBRAS
function exibirInterprete() {
  localStorage.setItem("exibirInterprete", "true");
  var interprete = document.getElementById("interprete");
  if (interprete) {
    interprete.style.display = "block";
  }
}

// Verificar o valor no localStorage ao carregar a página
window.addEventListener("load", function() {
  var exibirInterprete = localStorage.getItem("exibirInterprete");

  if (exibirInterprete === "true") {
    var interprete = document.getElementById("interprete");
    if (interprete) {
      interprete.style.display = "block";
    }
  }
});
