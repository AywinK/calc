import "./Button.css";
interface Props {
  value: string | number;
  clickHandler: (e: object) => object;
}

export default function Button({
  value,
  clickHandler,
}: Props) {
  return (
    <button
      className="button"
      onClick={clickHandler}
      value={value}
    >
      {value}
    </button>
  );
}
