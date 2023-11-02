import { Paciente } from "../types/Paciente";

export interface PacienteComponentProps {
  paciente: Paciente;
  setPacienteEnEdicion: React.Dispatch<React.SetStateAction<Paciente | null>>;
  eliminarPaciente: (paciente: Paciente) => void;
}
