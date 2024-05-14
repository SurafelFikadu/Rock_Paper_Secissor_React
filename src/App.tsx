// import StepOne from "./components/stepOne";
// import Button from "./components/showRule";
// import Rules from "./components/Rules";
// import Result from "./components/Results";

import closeIcon from "./assets/images/icon-close.svg";
import rulesImg from "./assets/images/image-rules.svg";
import logo from "./assets/images/logo.svg";
import "./styles/step1.css";
import paperImg from "./assets/images/icon-paper.svg";
import scissorImg from "./assets/images/icon-scissors.svg";
import rockImg from "./assets/images/icon-rock.svg";
import "./styles/rules.css";
import "./App.css";

const ResultsDiv = document.querySelector(".results");
const YouPickedImg = document.querySelector("#you-pick");
const HousePickedImg = document.querySelector("#house-pick");
const ResultWinner = document.querySelector(".results__winner");
const ResultText = document.querySelector(".results__text");
// const PlayAgainBtn = document.querySelector(".play-again");
// const ResultDivs = document.querySelector(".results__result");

// play again
function PlayAgain() {
  setTimeout(() => {
    // window.location.reload();
    ResultWinner!.classList.toggle("hidden");
    ResultsDiv!.classList.toggle("show-winner");
    ResultsDiv!.classList.toggle("hidden");
    GameDiv!.classList.toggle("hidden");
    HousePickedImg!.innerHTML = "";
  }, 300);
}

const Rule = document.querySelector(".modal");

function hideShowRule() {
  Rule!.classList.toggle("show-modal");
}

// Doms
const GameDiv = document.querySelector(".game");
const scoreNumber = document.querySelector(".score__number");
const paperBtn = document.querySelector("#paper-btn");

let score = 12;
const keepScore = (point: number) => {
  score += point;
  scoreNumber!.textContent = `${score}`;
};

// hidden function
function hidden() {
  GameDiv!.classList.toggle("hidden");
  ResultsDiv!.classList.toggle("hidden");
}

// chose img for house picked
const CHOSE = [
  `<div className="choice paper"><img src=${paperImg} alt="paper" /></div>`,
  `
  <div className="choice scissors"><img src=${scissorImg} alt="paper" /></div>`,
  `
  <div className="choice rock"><img src=${rockImg} alt="paper" /></div>`,
];

if (paperBtn) {
  paperBtn!.addEventListener("click", () => {
    forPaper();
  });
}

function forPaper() {
  hidden();
  YouPickedImg!.innerHTML = CHOSE[0];
  // housePicked()
  const randomChose = Math.floor(Math.random() * CHOSE.length);
  setTimeout(() => {
    HousePickedImg!.innerHTML = CHOSE[randomChose];
  }, 500);

  setTimeout(() => {
    if (CHOSE[randomChose] === CHOSE[1]) {
      ResultText!.textContent = "you lose";
      keepScore(-1);
    } else if (CHOSE[randomChose] === CHOSE[2]) {
      ResultText!.textContent = "you win";
      keepScore(1);
    } else if (CHOSE[randomChose] === CHOSE[0]) {
      ResultText!.textContent = "draw";
      keepScore(0);
    }
    ResultWinner!.classList.toggle("hidden");
    ResultsDiv!.classList.toggle("show-winner");
  }, 1000);
}

function App() {
  return (
    <div>
      {/* <StepOne /> */}
      {/* <Button /> */}
      {/* <Rules /> */}
      {/* <Result /> */}
      <div className="container">
        <header className="header">
          <img src={logo} alt="Logo" className="logo"></img>
          <div className="score">
            <div className="score__title">score</div>
            <div className="score__number">12</div>
          </div>
        </header>
        <section className="game">
          <button className="choice-btn" id="paper-btn">
            <div className="choice paper">
              <img src={paperImg} alt="paper" />
            </div>
          </button>
          <button className="choice-btn" id="scissor-btn">
            <div className="choice scissors">
              <img src={scissorImg} alt="paper" />
            </div>
          </button>
          <button className="choice-btn" id="rock-btn">
            <div className="choice rock">
              <img src={rockImg} alt="paper" />
            </div>
          </button>
        </section>
      </div>
      <button onClick={hideShowRule} className="rules-btn">
        rules
      </button>
      <div className="modal">
        <div className="modal__container">
          <header className="modal__header">
            <h2 className="modal__heading">rules</h2>
            <button onClick={hideShowRule} className="close-btn">
              <img src={closeIcon} alt="Close Button" className="close-btn" />
            </button>
          </header>
          <img src={rulesImg} alt="Rules Img" className="rules-img" />
        </div>
      </div>
      <section className="results hidden">
        <h2 className="results__heading">you picked</h2>
        <h2 className="results__heading">the house picked</h2>
        <div className="results__result" id="you-pick"></div>
        <div className="results__winner hidden">
          <h3 className="results__text">you ...</h3>
          <button onClick={PlayAgain} className="play-again">
            play again
          </button>
        </div>
        <div className="results__result" id="house-pick"></div>
      </section>
    </div>
  );
}

export default App;
