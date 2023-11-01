import { Paciente } from "../types/Paciente";

export function BotonFormulario(props: Props) {
  const { texto, clases, onClick, paciente } = props;
  return (
    <button onClick={() => onClick(paciente)} className={clases}>
      {texto}
    </button>
  );
}

interface Props {
  texto?: string;
  clases?: string;
  //eslint-disable-next-line
  onClick: Function;
  paciente: Paciente;
}
//Es horrible esto, alto nivel de acoplamiento
//pensar como pasarle un generico
