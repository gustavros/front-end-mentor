const submit_btn = document.querySelector(".btn-submit"); // get the submit button
const card_content_1 = document.querySelector(".card-container-1"); // get the first card
const card_content_2 = document.querySelector(".card-container-2"); // get the second card
const ratingBtns = document.querySelectorAll(".number-container"); // get the rating buttons
const reset_btn = document.querySelector(".reset-btn"); // get the reset button
const score = document.querySelector(".score"); // get the score feedback
let stars_score = 3; // default value

submit_btn.addEventListener("click", onSubmit);
ratingBtns.forEach((btn) => {
  btn.addEventListener("click", handleRatingBtnClick);
});

reset_btn.addEventListener("click", () => {
  card_content_2.remove();
});

function onSubmit() {
  card_content_1.classList.add("hide"); // hide the first card
  score.textContent = stars_score; // show the score
  card_content_2.classList.remove("hide"); // show the second card
}

function handleRatingBtnClick(event) {
  stars_score = event.target.textContent; //!important
}
