import { BotonFormularioProps } from "../models/BotonFormularioProps";

export function BotonFormulario(props: BotonFormularioProps) {
  const { texto, clases, onClick, paciente, testId } = props;
  return (
    <button
      onClick={() => onClick(paciente)}
      className={clases}
      data-testId={testId}
    >
      {texto}
    </button>
  );
}
