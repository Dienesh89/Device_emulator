var closeButtons = document.getElementsByClassName("close");
for (var i = 0; i < closeButtons.length; i++) {
  closeButtons[i].addEventListener("click", function() {
    var alert = this.parentElement;
    alert.classList.add("dismissing");
    setTimeout(function() {
      alert.style.display = "none";
      // scroll to slider element
      slider.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  });
}