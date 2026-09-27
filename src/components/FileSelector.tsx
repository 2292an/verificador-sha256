// Carga el archivo
interface FileSelectorProps {
  title: string;
  onFileSelected: (file: File) => void;
}

function FileSelector({ title, onFileSelected }: FileSelectorProps) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]; //toma el primer archivo seleccionado

    if (file) {
      onFileSelected(file);
    }
  }

  return (
    <section className="card">
      <h2>{title}</h2>

      <input type="file" onChange={handleChange} />
    </section>
  );
}

export default FileSelector;
