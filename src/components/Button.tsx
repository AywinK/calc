import "./Button.css";
interface Props {
  value: string | number;
}

export default function Button({ value }: Props) {
  return (
    <button className="button" value={value}>
      {value}
    </button>
  );
}
