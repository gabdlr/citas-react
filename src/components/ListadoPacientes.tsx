import { PacienteComponent } from "./PacienteComponentClass";
import { uuid } from "./../utils/idGenerator";
import { ListadoPacientesProps } from "../models/ListadoPacientesProps";

export function ListadoPacientes(props: ListadoPacientesProps) {
  const {
    handlers: { eliminarPaciente, setPacienteEnEdicion },
    pacientes,
  } = props;
  return (
    <div className="md:w-1/2 lg:w-3/5">
      {pacientes.length > 0 ? (
        <>
          <h2
            className="font-black text-3xl text-center"
            data-testid="pacientListSubtitle"
          >
            Listado pacientes
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus{" "}
            <span className="text-indigo-600 font-bold">pacientes</span>
          </p>
          <div data-testid="pacientList">
            {pacientes.map((paciente) => (
              <PacienteComponent
                key={uuid()}
                paciente={paciente}
                setPacienteEnEdicion={setPacienteEnEdicion}
                eliminarPaciente={eliminarPaciente}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <h2
            className="font-black text-3xl text-center"
            data-testid="pacientListSubtitle"
          >
            No hay pacientes
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando{" "}
            <span className="text-indigo-600 font-bold">pacientes</span>
          </p>
        </>
      )}
    </div>
  );
}
