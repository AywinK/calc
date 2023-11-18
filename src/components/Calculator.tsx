import "./Calculator.css";
import Display from "./Display";
import ButtonContainer from "./ButtonContainer";
import { useEffect, useState } from "react";
import * as math from "mathjs";

type HistoryObject = {
  input: string;
  result: number;
};

export default function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);
  const [history, setHistory] = useState<HistoryObject[]>([]);
  const [isCleared, setIsCleared] = useState(false);

  const handleClick = (e: any): void => {
    console.log(e.target.value);
    const isClear = e.target.value === "Clear";
    const isToBeEvaluated = e.target.value === "=";
    if (isClear) {
      setIsCleared(true);
    } else if (isToBeEvaluated) {
      setResult((prev) => {
        if (input) return math.evaluate(input);
        return prev;
      });
    } else {
      setInput((prevState) => prevState + e.target.value);
    }
  };

  useEffect(() => {
    if (isCleared && input !== "" && result !== 0) {
      setHistory((prev: HistoryObject[]): HistoryObject[] => [
        ...prev,
        { input: input, result: result },
      ]);
      setInput("");
      setResult(0);
    } else {
      setInput("");
      setResult(0);
    }
    setIsCleared(false);
    console.log(history);
  }, [isCleared]);

  return (
    <div className="calculator">
      <Display input={input} result={result} />
      <ButtonContainer handleClick={handleClick} />
    </div>
  );
}
