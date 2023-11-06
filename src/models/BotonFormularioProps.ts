import { Paciente } from "../types/Paciente";

export interface BotonFormularioProps {
  clases?: string;
  //eslint-disable-next-line
  onClick: Function;
  paciente: Paciente;
  testId: string;
  texto?: string;
}
