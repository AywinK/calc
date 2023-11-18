type Props = {
  input: string;
  result: number;
};
export default function HistoryContainer({ input, result }: Props) {
  return (
    <div>
      {input} = {result}
    </div>
  );
}
