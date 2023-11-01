import { Paciente } from "../types/Paciente";
import { BotonFormulario } from "./BotonFormulario";
export default function PacienteComponent(props: PacienteComponentProps) {
  const { paciente, setPacienteEnEdicion, eliminarPaciente } = props;
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre:{" "}
        <span className="font-normal normal-case">{paciente.nombre}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario:{" "}
        <span className="font-normal normal-case">{paciente.propietario}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: <span className="font-normal normal-case">{paciente.email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha alta:{" "}
        <span className="font-normal normal-case">{paciente.fechaAlta}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas:{" "}
        <span className="font-normal normal-case">{paciente.sintomas}</span>
      </p>
      <div className="flex justify-between">
        <BotonFormulario
          clases="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
          texto="Editar"
          onClick={setPacienteEnEdicion}
          paciente={paciente}
        />
        <BotonFormulario
          clases="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
          texto="Eliminar"
          onClick={eliminarPaciente}
          paciente={paciente}
        />
      </div>
    </div>
  );
}

interface PacienteComponentProps {
  paciente: Paciente;
  setPacienteEnEdicion: React.Dispatch<React.SetStateAction<Paciente | null>>;
  eliminarPaciente: (paciente: Paciente) => void;
}
