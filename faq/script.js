document.addEventListener("DOMContentLoaded", () => {
    const questions = document.querySelectorAll(".card h4");
  
    questions.forEach((question) => {
      question.addEventListener("click", () => {
        // Hide all other answers
        questions.forEach((q) => {
          const answer = q.nextElementSibling;
          const icon = q.querySelector("img");
  
          if (q !== question) {
            answer?.classList.add("hidden");
            if (icon) icon.src = "./assets/images/icon-plus.svg";
          }
        });
  
        // Toggle the clicked question's answer
        const answer = question.nextElementSibling;
        const icon = question.querySelector("img");
  
        if (answer) {
          answer.classList.toggle("hidden");
          icon.src = answer.classList.contains("hidden")
            ? "./assets/images/icon-plus.svg"
            : "./assets/images/icon-minus.svg";
        }
      });
    });
  });
  