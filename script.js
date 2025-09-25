const cards = 
[
  { question: "What is HTML?", answer: "A markup language for web pages" },
  { question: "What is CSS?", answer: "Stylesheet language for designing" },
  { question: "What is JS?", answer: "Programming language of the web" }
];

let currentIndex = 0;
let correctCount = 0;
let incorrectCount = 0;

const flashcard = document.querySelector(".flashcard");
const front = document.querySelector(".front");
const back = document.querySelector(".back");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const correctBtn = document.querySelector("#correct");
const incorrectBtn = document.querySelector("#incorrect");
const resetBtn = document.querySelector("#reset");
const progressText = document.querySelector("#progress-text");
const correctScoreEl = document.querySelector("#correct-score");
const incorrectScoreEl = document.querySelector("#incorrect-score");

function loadCard() 
{
  const card = cards[currentIndex];
  front.textContent = card.question;
  back.textContent = card.answer;
  flashcard.classList.remove("flip");

  progressText.textContent = `Card ${currentIndex + 1} of ${cards.length}`;
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === cards.length - 1;
}

flashcard.addEventListener("click", () => 
{
  flashcard.classList.toggle("flip");
});

nextBtn.addEventListener("click", () => 
{
  if (currentIndex < cards.length - 1) 
  {
    currentIndex++;
    loadCard();
  }
});

prevBtn.addEventListener("click", () => 
{
  if (currentIndex > 0) {
    currentIndex--;
    loadCard();
  }
});


correctBtn.addEventListener("click", () => 
{
  correctCount++;
  correctScoreEl.textContent = correctCount;
});

incorrectBtn.addEventListener("click", () => 
{
  incorrectCount++;
  incorrectScoreEl.textContent = incorrectCount;
});


resetBtn.addEventListener("click", () => {
  currentIndex = 0;
  correctCount = 0;
  incorrectCount = 0;
  correctScoreEl.textContent = 0;
  incorrectScoreEl.textContent = 0;
  loadCard();
});


loadCard();




