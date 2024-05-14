import "../styles/result.css";

// import paperImg from "../assets/images/icon-paper.svg";
// import scissorImg from "../assets/images/icon-scissors.svg";
// import rockImg from "../assets/images/icon-rock.svg";

export const ResultsDiv = document.querySelector(".results");
export const YouPickedImg = document.querySelector("#you-pick");
export const HousePickedImg = document.querySelector("#house-pick");
export const ResultWinner = document.querySelector(".results__winner");
export const ResultText = document.querySelector(".results__text");
export const PlayAgainBtn = document.querySelector(".play-again");
export const ResultDivs = document.querySelector(".results__result");

const Result = () => {
  return (
    <div className="results hidden">
      <h2 className="results__heading">you picked</h2>
      <h2 className="results__heading">the house picked</h2>
      <div className="results__result" id="you-pick"></div>
      <div className="results__winner hidden">
        <h3 className="results__text">you ...</h3>
        <button className="play-again">play again</button>
      </div>
      <div className="results__result" id="house-pick"></div>
    </div>
  );
};

export default Result;
