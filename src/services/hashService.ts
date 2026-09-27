export async function calculateSHA256(file: File): Promise<string> {
  const arrayBuffer = await file.arrayBuffer(); // obtiene los bytes del archivo

  const hashBuffer = await crypto.subtle.digest("SHA-256", arrayBuffer); //web crypto API para calcular el hash SHA-256

  const hashArray = Array.from(new Uint8Array(hashBuffer));

  return hashArray.map((byte) => byte.toString(16).padStart(2, "0")).join("");
}
