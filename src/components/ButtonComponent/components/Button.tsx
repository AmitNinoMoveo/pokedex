import React from "react";
import "../style/button.css";

type Props = {
  func: () => void;
  txt?: string;
  icon?: any;
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
      {props.txt ? props.txt : props.icon}
    </button>
  );
};

export default ButtonComponent;
