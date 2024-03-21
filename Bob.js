// Please do not use my code, pictures without permission! I'm happy to share this with you just please please let me know first!
// took me a year to finish this project and all I had then was python knowledge lol

const questions = [
  {
    question: "...?",
    image: "images/B1.gif",
    answers: {
      C: {
        text: "Má ơi, là Bob hả!!!",
        scores: { U: 0, C: +1 },
      },
      U: {
        text: "Nữa hả má...tao đang ở đâu dzị?",
        scores: { U: +1, C: 0 },
      },
    },
  },
  {
    question: "'Ê ní' mi ko nên ở đây'",
    image: "images/B2.gif",
    answers: {
      C: {
        text: "Chỗ này đã qué! Mày làm việc ở đây à? Có phải đây là nơi tạo ra cái quiz không?",
        scores: { U: 0, C: +1 },
      },
      U: {
        text: "Khứa tạo ra trò này kêu tao tìm trứng phục sinh, có biết đâu không?",
        scores: { U: +1, C: 0 },
      },
    },
  },
  {
    question:
      "'Trứng phục sinh?! Wow, sếp tao thật sự cần phải về với đất mẹ với tất cả thời gian rảnh rỗi trong tay của cô ấy...'",
    image: "images/B3.gif",
    answers: {
      U: {
        text: "Hey...có tội tình gì đâu, bả thích ở nhà thôi mà...",
        scores: { U: +1, C: 0 },
      },
      C: {
        text: "biết mà, chắc bả cũng chán vãi ò rồi",
        scores: { U: 0, C: +1 },
      },
    },
  },
  {
    question:
      "'Thật ra, tao cũng không biết. Người ta thường giữ trứng ở đâu nhỉ?'",
    image: "images/B4.gif",
    answers: {
      C: {
        text: "Có lẽ tao nên đập vỡ mi xem nó có trốn trong người mi không?",
        scores: { U: 0, C: +1 },
      },
      U: {
        text: "Joke m nhạt lắm",
        scores: { U: +1, C: 0 },
      },
    },
  },
  {
    question:
      "'kê! kê! bả kêu t giữ bí mật! Nó nằm trong cái hộp kia! Chúa ơi, tao không biết tại sao tao không được trả đủ tiền với việc này.'",
    image: "images/B5.gif",
    answers: {
      U: {
        text: "Open 'Trash with potential' box",
        scores: { U: +1, C: 0 },
      },
      C: {
        text: "Open 'I forgot I made these' box",
        scores: { U: 0, C: +1 },
      },
    },
  },
];

const resultOptions = {
  U: {
    image: "BA.PNG",
  },
  C: {
    image: "BT.PNG",
  },
};

let currentQuestion = 0;
// let userAnswers = {};

function displayQuestion() {
  const quizElement = document.getElementById("quiz");
  const question = questions[currentQuestion];
  if (question) {
    let html = `<p>${question.question}</p>`;
    if (question.image) {
      html += `<img src="${question.image}" alt="Question ${
        currentQuestion + 1
      }">`;
    }
    for (const option in question.answers) {
      html += `<button class="large-rectangular" value="${option}" id="${option}">${question.answers[option].text}</button>`;
    }
    quizElement.innerHTML = html;
    attachButtonClickHandlers();
  } else {
  }
}

document.getElementById("start-button").addEventListener("click", function () {
  document.getElementById("start-page").style.display = "none";
  document.getElementById("quiz-page").style.display = "block";
  currentQuestion = 0;
  userAnswers = {};
  displayQuestion();
  // userAnswers.userName = userName;
});

//click
function attachButtonClickHandlers() {
  const choiceButtons = document.querySelectorAll(".large-rectangular");
  choiceButtons.forEach((button) => {
    button.addEventListener("click", handleAnswer);
  });
}

//answers
function handleAnswer(event) {
  const selectedOption = event.target;
  const answerKey = selectedOption.value;
  const question = questions[currentQuestion];
  const answer = question.answers[answerKey];

  for (const dimension in answer.scores) {
    userAnswers[dimension] =
      (userAnswers[dimension] || 0) + answer.scores[dimension];
  }

  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    displayQuestion();
  } else {
    showResult();
  }
}

// ...

function showResult() {
  const resultElement = document.getElementById("result");
  const resultTextContainer = document.querySelector(".result-text");
  const resultImage = document.getElementById("result-image");

  // Decide the result based on the scores
  const result = (userAnswers["U"] || 0) > (userAnswers["C"] || 0) ? "U" : "C";

  // Show result
  const personalityData = resultOptions[result];
  if (personalityData) {
    resultTextContainer.innerHTML = `
            <!-- You can add any result text here -->
        `;
    resultImage.src = "images/" + personalityData.image;
    resultImage.alt = `${personalityData.image} Image`;
  } else {
    // Handle case if result is not found
  }

  // Hide the quiz, show the result, and show the restart button
  document.getElementById("quiz").style.display = "none";
  resultElement.style.display = "block"; // Show the result
}

//Function to restart the quiz
function restartQuiz() {
  currentQuestion = 0;
  userAnswers = {};
  document.getElementById("result").style.display = "none";
  document.getElementById("quiz").style.display = "block";
  displayQuestion(); // Start the quiz from the beginning
}

document
  .getElementById("restart-button")
  .addEventListener("click", restartQuiz);

displayQuestion();
