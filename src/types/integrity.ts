export type IntegrityResult = "verified" | "modified" | "error" | "";
// Esto hace que TypeScript sepa qué valores son válidos. No puede recibir cualquier texto.

export interface FileMetadata {
  name: string;
  size: number;
  lastModified: string;
}
