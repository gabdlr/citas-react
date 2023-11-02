import { BotonFormularioProps } from "../models/BotonFormularioProps";

export function BotonFormulario(props: BotonFormularioProps) {
  const { texto, clases, onClick, paciente } = props;
  return (
    <button onClick={() => onClick(paciente)} className={clases}>
      {texto}
    </button>
  );
}
