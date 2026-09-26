interface HashDisplayProps {
  hash: string;
}

function HashDisplay({ hash }: HashDisplayProps) {
  async function copyHash() {
    await navigator.clipboard.writeText(hash);

    alert("Hash copiado al portapapeles.");
  }

  return (
    <section className="card">
      <h2>Hash SHA-256</h2>

      <textarea value={hash} readOnly />

      <div>
        <button onClick={copyHash}>Copiar hash</button>

        <a
          href={`https://www.virustotal.com/gui/file/${hash}`}
          target="_blank"
          rel="noreferrer"
        >
          Consultar en VirusTotal
        </a>
      </div>
    </section>
  );
}

export default HashDisplay;
