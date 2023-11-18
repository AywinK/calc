import "./Display.css";

interface Props {
  input: string;
  result: number;
}

export default function Display({ input, result }: Props) {
  return (
    <div className="display">
      <input className="userInput" value={input} type="text" readOnly />
      <div className="result">{result}</div>
    </div>
  );
}
