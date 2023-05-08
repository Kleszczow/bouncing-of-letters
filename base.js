const text = document.querySelector(".text");
const strText = text.textContent;
const spliText = strText.split("");

const jumping = () => {
  let jump = Math.floor(Math.random() * spliText.length);
  text.textContent = "";

  for (let i = 0; i < spliText.length; i++) {
    text.innerHTML += "<span>" + spliText[i] + "</span>";
  }

  const span = text.querySelectorAll("span")[jump];
  span.classList.add("up");
};

addEventListener("load", jumping);
text.addEventListener("animationend", jumping);
