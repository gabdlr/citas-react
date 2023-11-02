import "./App.css";
import { useState } from "react";
import { Formulario } from "./components/FormularioClass";
import { Header } from "./components/HeaderClass";
import { ListadoPacientes } from "./components/ListadoPacientesClass";
import { Paciente } from "./types/Paciente";
import { ContextoPacienteEnEdicion } from "./contexts/PacienteEditarContext";
import { uuid } from "./utils/idGenerator";
function App() {
  const [pacientes, setPacientes] = useState<Paciente[]>([]);
  const [pacienteEnEdicion, setPacienteEnEdicion] = useState<Paciente | null>(
    null
  );

  const agregarNuevoPaciente = (paciente: Paciente): Paciente[] => {
    paciente.id = uuid();
    return [...pacientes, paciente];
  };

  const actualizarPaciente = (paciente: Paciente): Paciente[] => {
    const pacientesActualizado = pacientes.map((px) => {
      if (px.id === paciente.id) {
        return paciente;
      }
      return px;
    });
    return pacientesActualizado;
  };

  const setPaciente = (paciente: Paciente): void => {
    let nuevoArregloPacientes: Paciente[] = pacientes;
    if (paciente.id === undefined) {
      nuevoArregloPacientes = agregarNuevoPaciente(paciente);
    } else {
      nuevoArregloPacientes = actualizarPaciente(paciente);
    }
    setPacientes(nuevoArregloPacientes);
  };

  const eliminarPaciente = (pacienteAEliminar: Paciente) => {
    const pacientesActualizado = pacientes.filter(
      (paciente) => paciente.id !== pacienteAEliminar.id
    );
    if (pacienteEnEdicion?.id === pacienteAEliminar.id) {
      setPacienteEnEdicion(null);
    }
    setPacientes(pacientesActualizado);
  };

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <ContextoPacienteEnEdicion.Provider value={pacienteEnEdicion}>
        <div className="mt-12 md:flex">
          <Formulario
            handlers={{ setPaciente, setPacienteEnEdicion }}
            pacienteEnEdicion={pacienteEnEdicion}
          />
          <ListadoPacientes
            handlers={{ eliminarPaciente, setPacienteEnEdicion }}
            pacientes={pacientes}
          />
        </div>
      </ContextoPacienteEnEdicion.Provider>
    </div>
  );
}

export default App;
