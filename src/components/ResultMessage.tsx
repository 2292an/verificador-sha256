import type { IntegrityResult } from "../types/integrity";

interface ResultMessageProps {
  result: IntegrityResult;
  message: string;
}

function ResultMessage({ result, message }: ResultMessageProps) {
  if (!message) {
    return null;
  }

  return (
    <section className={`result ${result}`}>
      <h2>Resultado</h2>

      <p>{message}</p>
    </section>
  );
}

export default ResultMessage;
