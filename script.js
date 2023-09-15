// const arrows = document.querySelectorAll(".arrow");
// const question = document.querySelectorAll(".question");
// const answer = document.querySelectorAll(".answer");

// arrows.forEach((arrow) => {
//   arrow.addEventListener("click", function (event) {
//     event.preventDefault();

//     arrow.style.transform = "scaleY(-1)";
//     answer.style.display = "block";
//   });
// });

// gpt solution 

const questionAnswers = document.querySelectorAll(".question-answer");

questionAnswers.forEach((item) => {
  const questionPreview = item.querySelector(".question-preview");
  const question = item.querySelector(".question");
  const answer = item.querySelector(".answer");
  const arrow = item.querySelector(".arrow");

  questionPreview.addEventListener("click", () => {
    if (answer.style.display === "none" || answer.style.display === "") {
      answer.style.display = "block";
      question.classList.add("bold-question");
      arrow.style.transform = "rotate(180deg)";
    } else {
      answer.style.display = "none";
      question.classList.remove("bold-question");
      arrow.style.transform = "rotate(0deg)";
    }
  });
});
