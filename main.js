// Sample questions
const questions = [
  {
    q: "Which element has the chemical symbol ‘Fe’?",
    options: ["Fluorine", "Iron", "Francium", "Fermium"],
    answer: "Iron"
  },
  {
    q: "In which year did the first human land on the Moon?",
    options: ["1965", "1969", "1972", "1975"],
    answer: "1969"
  },
  {
    q: "What is the hardest natural substance on Earth?",
    options: ["Diamond", "Graphite", "Quartz", "Topaz"],
    answer: "Diamond"
  },
  {
    q: "Who proposed the theory of general relativity?",
    options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Niels Bohr"],
    answer: "Albert Einstein"
  },
  {
    q: "Which country hosted the 2016 Summer Olympics?",
    options: ["China", "Brazil", "UK", "Japan"],
    answer: "Brazil"
  },
  {
    q: "What is the value of Pi to two decimal places?",
    options: ["3.12", "3.14", "3.16", "3.18"],
    answer: "3.14"
  },
  {
    q: "Which organ in the human body is primarily responsible for detoxification?",
    options: ["Kidneys", "Liver", "Lungs", "Pancreas"],
    answer: "Liver"
  },
  {
    q: "The Great Barrier Reef is located off the coast of which country?",
    options: ["Australia", "Indonesia", "Philippines", "New Zealand"],
    answer: "Australia"
  },
  {
    q: "Which programming language is known as the backbone of web development?",
    options: ["Python", "C++", "JavaScript", "Ruby"],
    answer: "JavaScript"
  },
  {
    q: "What is the SI unit of electric current?",
    options: ["Volt", "Ampere", "Ohm", "Watt"],
    answer: "Ampere"
  }
];


let current = 0;
let score = 0;
let timer;
let timeLeft = 15; // seconds per question

function startQuiz() {
  const name = document.getElementById("username").value.trim();
  if (!name) { alert("Enter your name"); return; }
  localStorage.setItem("username", name);
  window.location.href = "quiz.html";
}

// ----- Quiz Page -----
if (window.location.pathname.includes("quiz.html")) {
  document.getElementById("welcome").textContent =
    "Welcome, " + localStorage.getItem("username");
  showQuestion();
  startTimer();
}

function showQuestion() {
  const q = questions[current];
  document.getElementById("question").textContent = q.q;
  const optBox = document.getElementById("options");
  optBox.innerHTML = "";
  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(opt);
    optBox.appendChild(btn);
  });
}

function checkAnswer(selected) {
  if (selected === questions[current].answer) score++;
  nextQuestion();
}

function nextQuestion() {
  current++;
  if (current < questions.length) {
    timeLeft = 15;
    showQuestion();
  } else {
    endQuiz();
  }
}

function startTimer() {
  timer = setInterval(() => {
    document.getElementById("timer").textContent = "Time: " + timeLeft;
    timeLeft--;
    if (timeLeft < 0) nextQuestion();
  }, 1000);
}

function endQuiz() {
  clearInterval(timer);
  localStorage.setItem("score", score + "/" + questions.length);
  window.location.href = "result.html";
}
