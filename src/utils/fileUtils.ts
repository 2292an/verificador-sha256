import type { FileMetadata } from "../types/integrity";

export function getFileMetadata(file: File): FileMetadata {
  return {
    name: file.name,
    size: file.size,
    lastModified: new Date(file.lastModified).toLocaleString(),
  };
}
