const panels = document.querySelectorAll(".panel");

function toggleActive(e) {
  if (e.propertyName.includes("flex")) {
    console.log(this);
    this.classList.toggle("open-active");
  }
}

function toggleOpen() {
  this.classList.toggle("open");
}

panels.forEach(panel => {
  panel.addEventListener("click", toggleOpen);
  panel.addEventListener("transitionend", toggleActive);
});
