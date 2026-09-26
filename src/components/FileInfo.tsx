import type { FileMetadata } from "../types/integrity";

interface FileInfoProps {
  file: FileMetadata;
}

function FileInfo({ file }: FileInfoProps) {
  return (
    <div className="info">
      <p>
        <strong>Nombre:</strong> {file.name}
      </p>

      <p>
        <strong>Tamaño:</strong> {file.size} bytes
      </p>

      <p>
        <strong>Última modificación:</strong> {file.lastModified}
      </p>
    </div>
  );
}

export default FileInfo;
