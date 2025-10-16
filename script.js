const cards = 
[
  { question: "What is HTML?", answer: "A markup language for web pages" },
  { question: "What is CSS?", answer: "Stylesheet language for designing" },
  { question: "What is JS?", answer: "Programming language of the web" }
];
const extracards = 
[
  { question: "What is a variable?", answer: "A container for storing data"}
];

const allcards = [...cards, ...extracards];
let currentIndex = 0;
const correctanswer = new Set();
const incorrectanswer = new Set();


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
const randomBtn = document.querySelector("#random");
const shuffleBtn = document.querySelector("#shuffle");
const progressBar = document.querySelector("#progress-bar");



function loadCard() 
{
  const {question, answer} = allcards[currentIndex];
  front.textContent = question;
  back.textContent = answer;
  flashcard.classList.remove("flip");

  progressText.textContent = `Card ${currentIndex + 1} of ${allcards.length}`;
  progressBar.style.width = `${((currentIndex + 1) / allcards.length) * 100}%`;

  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === allcards.length - 1;
}

flashcard.addEventListener("click", () => 
{
  flashcard.classList.toggle("flip");
});

nextBtn.addEventListener("click", () => 
{
  if (currentIndex < allcards.length - 1) 
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
  correctanswer.add(allcards[currentIndex].question);
  correctScoreEl.textContent = correctanswer.size;
});

incorrectBtn.addEventListener("click", () => 
{
  incorrectanswer.add(allcards[currentIndex].question);
  incorrectScoreEl.textContent = incorrectanswer.size;
});

randomBtn.addEventListener("click", ()=>{
  const randomindex = Math.floor(Math.random() * allcards.length);
  currentIndex = randomindex ?? 0;
  loadCard();
})

shuffleBtn.addEventListener("click" , () =>{
  for (let i = allcards.length - 1; i > 0;i--)
  {
    const j =Math.floor(Math.random() * (i+1));
    [allcards[i],allcards[j]] = [allcards[j], allcards[i]]
  }
  currentIndex = 0;
  correctanswer.clear();
  incorrectCount = 0;
  correctScoreEl.textContent=0;
  incorrectScoreEl.textContent=0;
  loadCard();
})


resetBtn.addEventListener("click", () => 
{
  currentIndex = 0;
  correctanswer.clear();
  incorrectCount = 0;
  correctScoreEl.textContent = 0;
  incorrectScoreEl.textContent = 0;
  loadCard();
});
loadCard();




