import Button from "./Button";
import "./ButtonContainer.css";

export default function ButtonContainer({ handleClick, handleKeyPress }) {
  const btnsArr = [];

  for (let i = 0; i < 10; i++) {
    btnsArr.push(i);
  }

  return (
    <div className="button-container">
      <div className="numbers-container">
        {btnsArr.reverse().map((btnVal, i) => (
          <Button clickHandler={handleClick} keyPressHandler={handleKeyPress} key={i} value={btnVal} />
        ))}
      </div>
      <div className="operations-container">
        <Button clickHandler={handleClick} keyPressHandler={handleKeyPress} value={"Clear"} />
        <Button clickHandler={handleClick} keyPressHandler={handleKeyPress} value={"+"} />
        <Button clickHandler={handleClick} keyPressHandler={handleKeyPress} value={"-"} />
        <Button clickHandler={handleClick} keyPressHandler={handleKeyPress} value={"/"} />
        <Button clickHandler={handleClick} keyPressHandler={handleKeyPress} value={"*"} />
        <Button clickHandler={handleClick} keyPressHandler={handleKeyPress} value={"."} />
        <Button clickHandler={handleClick} keyPressHandler={handleKeyPress} value={"="} />
      </div>
    </div>
  );
}
