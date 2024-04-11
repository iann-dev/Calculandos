document.addEventListener('DOMContentLoaded', function() {
  var tryAgainButton = document.querySelector('.options-row a[href="#"]');
  tryAgainButton.addEventListener('click', function(event) {
    event.preventDefault();
    history.back();
  });
});