import { Paciente } from "../types/Paciente";

export interface ListadoPacientesProps {
  pacientes: Paciente[];
  handlers: {
    setPacienteEnEdicion: React.Dispatch<React.SetStateAction<Paciente | null>>;
    eliminarPaciente: (paciente: Paciente) => void;
  };
}
