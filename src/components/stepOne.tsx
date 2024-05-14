import logo from "../assets/images/logo.svg";
import "../styles/step1.css";
import paperImg from "../assets/images/icon-paper.svg";
import scissorImg from "../assets/images/icon-scissors.svg";
import rockImg from "../assets/images/icon-rock.svg";

// Imported Doms
import { ResultsDiv } from "./Results";
import { YouPickedImg } from "./Results";
import { HousePickedImg } from "./Results";
import { ResultText } from "./Results";
import { ResultWinner } from "./Results";
// import { useRef } from "react";

// Doms
const GameDiv = document.querySelector(".game");
const scoreNumber = document.querySelector(".score__number");

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
  `
  <div class="choice paper">
  <img src="./images/icon-paper.svg" alt="paper" />
  </div>`,
  `
  <div class="choice scissors">
  <img src="./images/icon-scissors.svg" alt="scissors" />
  </div>`,
  `
  <div class="choice rock">
  <img src="./images/icon-rock.svg" alt="rock" />
  </div>`,
];

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

const StepOne = () => {
  return (
    <div className="container">
      <header className="header">
        <img src={logo} alt="Logo" className="logo"></img>
        <div className="score">
          <div className="score__title">score</div>
          <div className="score__number">12</div>
        </div>
      </header>
      <section className="game">
        <button onClick={forPaper} className="choice-btn" id="paper-btn">
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
  );
};

export default StepOne;
