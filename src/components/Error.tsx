import { ErrorFormularioProps } from "../models/ErrorFormularioProps";

export default function ErrorFormulario(props: ErrorFormularioProps) {
  const { children } = props;
  return (
    <div className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded">
      {children}
    </div>
  );
}
