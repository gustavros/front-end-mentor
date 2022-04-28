const submit_btn = document.querySelector(".btn-submit"); // get the submit button
const card_content_1 = document.querySelector(".card-container-1"); // get the first card
const card_content_2 = document.querySelector(".card-container-2"); // get the second card
const ratingBtns = document.querySelectorAll(".number-container"); // get the rating buttons
const resetBtn = document.querySelector(".reset-btn");
const score = document.querySelector(".score"); // get the score feedback
let stars_score = 3; // default value

submit_btn.addEventListener("click", onSubmit); // add the eventlistener a submit button click
ratingBtns.forEach((btn) => {
  // for each rating button
  btn.addEventListener("click", handleRatingBtnClick); // add the eventlistener
});

resetBtn.addEventListener("click", () => {
  card_content_2.remove();
});

function onSubmit() {
  // when click submit button
  card_content_1.classList.add("hide"); // hide the first card
  score.textContent = stars_score; // show the score
  card_content_2.classList.remove("hide"); // show the second card
  //console.log('submit click');
}

function handleRatingBtnClick(event) {
  // when click rating button
  // parse stars score
  stars_score = event.target.textContent; //!important
  //console.log(stars_score);
}

//console.log(ratingBtns);
