import "../styles/step1.css";
import "../styles/rules.css";

import { hideShowRule } from "./Rules";

// function ShowRule() {
//   Rule?.classList.toggle("show-modal");
// }

const Button = () => {
  return (
    <div>
      <button onClick={hideShowRule} className="rules-btn">
        rules
      </button>
    </div>
  );
};

export default Button;
