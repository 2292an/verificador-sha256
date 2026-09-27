import { useState } from "react";

import FileSelector from "./components/FileSelector";
import FileInfo from "./components/FileInfo";
import HashDisplay from "./components/HashDisplay";
import HashComparison from "./components/HashComparison";
import FileComparison from "./components/FileComparison";
import ResultMessage from "./components/ResultMessage";

import { calculateSHA256 } from "./services/hashService";
import { getFileMetadata } from "./utils/fileUtils";

import type { FileMetadata, IntegrityResult } from "./types/integrity";

import "./App.css";

function App() {
  const [fileInfo, setFileInfo] = useState<FileMetadata | null>(null);

  const [hash, setHash] = useState<string>("");

  const [referenceHash, setReferenceHash] = useState<string>("");

  const [secondFileHash, setSecondFileHash] = useState<string>("");

  const [result, setResult] = useState<IntegrityResult>("");

  const [message, setMessage] = useState<string>("");

  async function handleMainFile(file: File) {
    const calculatedHash = await calculateSHA256(file);

    setHash(calculatedHash);

    setFileInfo(getFileMetadata(file));

    setResult("");
    setMessage("");
  }

  async function handleSecondFile(file: File) {
    const calculatedHash = await calculateSHA256(file);

    setSecondFileHash(calculatedHash);

    setResult("");
    setMessage("");
  }

  function compareWithReference() {
    // aca se hace la comparacion entre el hash calculado y el hash de referencia
    if (!hash || !referenceHash.trim()) {
      setResult("error");

      setMessage(
        "Debe seleccionar un archivo y escribir un hash de referencia.",
      );

      return;
    }

    if (hash.toLowerCase() === referenceHash.trim().toLowerCase()) {
      setResult("verified");

      setMessage("Integridad verificada: el archivo no fue modificado.");
    } else {
      setResult("modified");

      setMessage("Archivo modificado: el hash es diferente.");
    }
  }

  function compareTwoFiles() {
    if (!hash || !secondFileHash) {
      setResult("error");

      setMessage("Debe seleccionar dos archivos para comparar.");

      return;
    }

    if (hash === secondFileHash) {
      setResult("verified");

      setMessage("Integridad verificada: ambos archivos tienen el mismo hash.");
    } else {
      setResult("modified");

      setMessage("Archivo modificado: los archivos tienen hashes diferentes.");
    }
  }

  return (
    <main className="container">
      <header>
        <h1>Verificador de Integridad SHA-256</h1>

        <p>
          Herramienta para comprobar si un archivo conserva su contenido
          original.
        </p>
      </header>

      <FileSelector
        title="1. Seleccionar archivo"
        onFileSelected={handleMainFile}
      />

      {fileInfo && (
        <section className="card">
          <h2>Información del archivo</h2>

          <FileInfo file={fileInfo} />
        </section>
      )}

      {hash && <HashDisplay hash={hash} />}

      <HashComparison
        referenceHash={referenceHash}
        setReferenceHash={setReferenceHash}
        onCompare={compareWithReference}
      />

      <FileComparison
        secondHash={secondFileHash}
        onFileSelected={handleSecondFile}
        onCompare={compareTwoFiles}
      />

      <ResultMessage result={result} message={message} />
    </main>
  );
}

export default App;
