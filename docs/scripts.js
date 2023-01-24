addEventListener('DOMContentLoaded', () => {
  const questions = document.querySelectorAll(".faq-question"); //gets all children of faq-question
  questions.forEach((question) => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      const plus = question.querySelector('.fa-plus');
      const minus = question.querySelector('.fa-minus');

      answer.classList.toggle('!hidden');
      plus.classList.toggle('!hidden');
      minus.classList.toggle('!hidden');
      console.log(answer);
    })
  })
});



