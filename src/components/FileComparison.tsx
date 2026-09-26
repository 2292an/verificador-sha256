interface FileComparisonProps {
  secondHash: string;

  onFileSelected: (file: File) => void;

  onCompare: () => void;
}

function FileComparison({
  secondHash,
  onFileSelected,
  onCompare,
}: FileComparisonProps) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (file) {
      onFileSelected(file);
    }
  }

  return (
    <section className="card">
      <h2>Comparar con otro archivo</h2>

      <input type="file" onChange={handleChange} />

      {secondHash && (
        <>
          <p>Hash del segundo archivo:</p>

          <textarea value={secondHash} readOnly />
        </>
      )}

      <button onClick={onCompare}>Comparar archivos</button>
    </section>
  );
}

export default FileComparison;
