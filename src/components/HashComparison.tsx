interface HashComparisonProps {
  referenceHash: string;

  setReferenceHash: (value: string) => void;

  onCompare: () => void;
}

function HashComparison({
  referenceHash,
  setReferenceHash,
  onCompare,
}: HashComparisonProps) {
  return (
    <section className="card">
      <h2>Comparar con hash de referencia</h2>

      <textarea
        placeholder="Pegue aquí el hash SHA-256 de referencia"
        value={referenceHash}
        onChange={(event) => setReferenceHash(event.target.value)}
      />

      <button onClick={onCompare}>Comparar con referencia</button>
    </section>
  );
}

export default HashComparison;
