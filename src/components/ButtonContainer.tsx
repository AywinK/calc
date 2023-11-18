import Button from "./Button";
import "./ButtonContainer.css";

export default function ButtonContainer({ handleClick }) {
  const btnsArr = [];

  for (let i = 0; i < 10; i++) {
    btnsArr.push(i);
  }

  return (
    <div className="button-container">
      <div className="numbers-container">
        {btnsArr.reverse().map((btnVal, i) => (
          <Button clickHandler={handleClick} key={i} value={btnVal} />
        ))}
      </div>
      <div className="operations-container">
        <Button clickHandler={handleClick} value={"Clear"} />
        <Button clickHandler={handleClick} value={"+"} />
        <Button clickHandler={handleClick} value={"-"} />
        <Button clickHandler={handleClick} value={"/"} />
        <Button clickHandler={handleClick} value={"*"} />
        <Button clickHandler={handleClick} value={"."} />
        <Button clickHandler={handleClick} value={"="} />
      </div>
    </div>
  );
}
