const buttons = document.querySelectorAll(".number-container button");
const buttonsContainer = document.querySelector(".number-container ");
console.log(buttonsContainer);
const content = document.querySelector(".text-container");
const btnSubmit = document.querySelector(".btn-submit button");

const starContainer = document.querySelector(".stars-container");

const thanks = /*html*/ `
<div class="thanks">
<img src="images/illustration-thank-you.svg" alt=""/>
    <span>Você selecionou 1 de 5</span>
    <h1>Obrigado!</h1>
    <p>Nós agradecemos seu feedback. Se caso você precise de mais ajuda, não hesite em nos dar um toque!</p>
</div>

`;

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    let buttonSelected = button.innerHTML;
    console.log(buttonSelected);
  });
});

btnSubmit.addEventListener("click", function () {
  starContainer.remove();
  buttonsContainer.remove();
  btnSubmit.remove();

  content.innerHTML = thanks;
});
