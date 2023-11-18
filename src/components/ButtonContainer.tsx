import Button from "./Button";
import "./ButtonContainer.css";

export default function ButtonContainer() {
  const btnsArr = [];

  for (let i = 0; i < 10; i++) {
    btnsArr.push(i);
  }

  return (
    <div className="button-container">
      <div className="numbers-container">
        {btnsArr.reverse().map((btnVal) => (
          <Button value={btnVal} />
        ))}
      </div>
      <div className="operations-container">
        <Button value={"Clear"} />
        <Button value={"+"} />
        <Button value={"-"} />
        <Button value={"/"} />
        <Button value={"*"} />
        <Button value={"."} />
        <Button value={"="} />
      </div>
    </div>
  );
}
