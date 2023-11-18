import "./Calculator.css";
import Display from "./Display";
import ButtonContainer from "./ButtonContainer";

export default function Calculator() {
  return (
    <div className="calculator">
      <Display input={"132+213"} result={342} />
      <ButtonContainer />
    </div>
  );
}
