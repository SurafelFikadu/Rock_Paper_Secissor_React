import closeIcon from "../assets/images/icon-close.svg";
import rulesImg from "../assets/images/image-rules.svg";

import "../styles/rules.css";

export const Rule = document.querySelector(".modal");
// const closeBtn = document.querySelector(".close-btn");

// closeBtn?.addEventListener("click", () => {
//   return rule?.classList.toggle("show-modal");
// });

export function hideShowRule() {
  Rule?.classList.toggle("show-modal");
}

const Rules = () => {
  return (
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
  );
};

export default Rules;
