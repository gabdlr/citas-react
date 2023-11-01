import { Paciente } from "../types/Paciente";
import PacienteComponent from "./PacienteComponent";
import { uuid } from "./../utils/idGenerator";

export default function ListadoPacientes(props: ListadoPacientesProps) {
  const {
    handlers: { eliminarPaciente, setPacienteEnEdicion },
    pacientes,
  } = props;
  return (
    <div className="md:w-1/2 lg:w-3/5">
      {pacientes.length > 0 ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus{" "}
            <span className="text-indigo-600 font-bold">pacientes</span>
          </p>
          {pacientes.map((paciente) => (
            <PacienteComponent
              key={uuid()}
              paciente={paciente}
              setPacienteEnEdicion={setPacienteEnEdicion}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando{" "}
            <span className="text-indigo-600 font-bold">pacientes</span>
          </p>
        </>
      )}
    </div>
  );
}

interface ListadoPacientesProps {
  pacientes: Paciente[];
  handlers: {
    setPacienteEnEdicion: React.Dispatch<React.SetStateAction<Paciente | null>>;
    eliminarPaciente: (paciente: Paciente) => void;
  };
}
