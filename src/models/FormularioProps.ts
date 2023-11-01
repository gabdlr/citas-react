import { Paciente } from "../types/Paciente";

export interface FormularioProps {
  handlers: {
    setPaciente: (paciente: Paciente) => void;
    setPacienteEnEdicion: React.Dispatch<React.SetStateAction<Paciente | null>>;
  };
  pacienteEnEdicion: Paciente | null;
}
