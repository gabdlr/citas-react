import { FormEvent, useEffect, useState } from "react";
import { Paciente } from "../types/Paciente";
import { Error } from "./ErrorClass";
export default function Formulario(props: FormularioProps) {
  const {
    handlers: { setPaciente, setPacienteEnEdicion },
    pacienteEnEdicion,
  } = props;
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fechaAlta, setFechaAlta] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [id, setId] = useState<string | undefined>(undefined);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (pacienteEnEdicion != null) {
      setNombre(pacienteEnEdicion.nombre),
        setPropietario(pacienteEnEdicion.propietario),
        setEmail(pacienteEnEdicion.email),
        setFechaAlta(pacienteEnEdicion.fechaAlta),
        setSintomas(pacienteEnEdicion.sintomas);
      setId(pacienteEnEdicion.id);
    } else {
      reiniciarFormulario();
    }
  }, [pacienteEnEdicion]);

  const reiniciarFormulario = (): void => {
    setNombre("");
    setPropietario("");
    setEmail("");
    setFechaAlta("");
    setSintomas("");
    setId(undefined);
  };

  const formularioEsValido = (): boolean => {
    const tieneError = [nombre, propietario, email, fechaAlta, sintomas].some(
      (value) => value === ""
    );
    setError(tieneError);
    return !tieneError;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formularioEsValido()) {
      const paciente: Paciente = {
        nombre,
        propietario,
        email,
        fechaAlta,
        sintomas,
        id,
      };
      //Esto es muy imperativo y horrible
      setPaciente(paciente);
      reiniciarFormulario();
      setError(false);
      setId(undefined);
      setPacienteEnEdicion(null);
    }
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-3 md:mx-0">
      {error ? (
        <Error>
          <p>Todos los campos son obligatorios</p>
        </Error>
      ) : null}
      <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>
      <p className="text-xl mt-5 text-center mb-10">
        Añade pacientes y{" "}
        <span className="text-indigo-600 font-bold">administralos</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="nombre"
          >
            Nombre mascota:{" "}
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            id="nombre"
            placeholder="Nombre de la mascota"
            type="text"
            value={nombre}
            onChange={(event) => setNombre(event.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="propietario"
          >
            Nombre propietario:
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            id="propietario"
            placeholder="Nombre del propietario"
            type="text"
            value={propietario}
            onChange={(event) => setPropietario(event.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="email"
          >
            Email:
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            id="email"
            placeholder="Email de contacto del propietario"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="fechaAlta"
          >
            Fecha alta:
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            id="fechaAlta"
            type="date"
            value={fechaAlta}
            onChange={(event) => setFechaAlta(event.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="fecha"
          >
            Sintomas:
          </label>
          <textarea
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            id="sintomas"
            placeholder="Describe los sintomas"
            value={sintomas}
            onChange={(event) => setSintomas(event.target.value)}
          ></textarea>
        </div>
        <input
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
          type="submit"
          value={id ? "Editar paciente" : "Agregar paciente"}
        />
      </form>
    </div>
  );
}

interface FormularioProps {
  handlers: {
    setPaciente: (paciente: Paciente) => void;
    setPacienteEnEdicion: React.Dispatch<React.SetStateAction<Paciente | null>>;
  };
  pacienteEnEdicion: Paciente | null;
}