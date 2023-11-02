import { Paciente } from "../types/Paciente";

export interface BotonFormularioProps {
  texto?: string;
  clases?: string;
  //eslint-disable-next-line
  onClick: Function;
  paciente: Paciente;
}
