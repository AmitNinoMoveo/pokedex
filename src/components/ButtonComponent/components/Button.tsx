import React from "react";
import "../style/button.css";

type Props = {
  func: () => void;
  txt: string;
  extraStyleClassNames?: string;
};

const ButtonComponent = (props: Props) => {
  return (
    <button
      className={`app-button ${
        props.extraStyleClassNames ? props.extraStyleClassNames : ""
      }`}
      onClick={() => props.func()}
    >
      {props.txt}
    </button>
  );
};

export default ButtonComponent;
