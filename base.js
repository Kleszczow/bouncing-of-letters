const text = document.querySelector(".text");

text.addEventListener("animationend", () => {
  text.innerHTML = "Hello, my name is Tymek.";
});
