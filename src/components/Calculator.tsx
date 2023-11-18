import "./Calculator.css";
import Display from "./Display";
import ButtonContainer from "./ButtonContainer";
import { useState } from "react";

export default function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);
  const [history, setHistory] = useState([]);
  return (
    <div className="calculator">
      <Display input={input} result={result} />
      <ButtonContainer />
    </div>
  );
}
