import "./Calculator.css";
import Display from "./Display";
import ButtonContainer from "./ButtonContainer";
import { useState } from "react";
import * as math from "mathjs";

export default function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);
  const [history, setHistory] = useState([]);

  const handleClick = (e: unknown): void => {
    console.log(e.target.value);
    const isClear = e.target.value === "Clear";
    const isToBeEvaluated = e.target.value === "=";
    if (isClear) {
      setInput("");
    } else if (isToBeEvaluated) {
      setResult((prev) => {
        if (input) return math.evaluate(input);
        return prev;
      });
    } else {
      setInput((prevState) => prevState + e.target.value);
    }
  };

  return (
    <div className="calculator">
      <Display input={input} result={result} />
      <ButtonContainer handleClick={handleClick} />
    </div>
  );
}
