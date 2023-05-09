const fancyText = document.querySelector(".fancy");
const fSplit = fancyText.textContent.split("");

fancyText.textContent = "";
for (i = 0; i < fSplit.length; i++) {
  fancyText.innerHTML += "<span>" + fSplit[i] + "</span>";
}
let numb = 0;

const fancyAnimatioion = () => {
  const spanF = fancyText.querySelectorAll("span")[numb];
  spanF.classList.add("fade");
  numb++;
  if (numb === fSplit.length) {
    finish();
    return;
  }
};

let timer = setInterval(fancyAnimatioion, 50);

const finish = () => {
  clearInterval(timer);
  timer = null;
};
