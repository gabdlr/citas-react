import { Component, FormEvent } from "react";
import { FormularioProps } from "../models/FormularioProps";
import { Paciente } from "../types/Paciente";
import { Error } from "./ErrorClass";
export class Formulario extends Component {
  state = {
    nombre: "",
    propietario: "",
    email: "",
    fechaAlta: "",
    sintomas: "",
    id: undefined,
    error: false,
  };
  declare props: FormularioProps;

  componentDidUpdate(prevProps: FormularioProps) {
    //Esto es super dificil de descifrar capaz meterlo en una funcion
    //que indique que es lo que hace
    if (this.props.pacienteEnEdicion !== prevProps.pacienteEnEdicion) {
      if (this.props.pacienteEnEdicion) {
        this.setState({
          nombre: this.props.pacienteEnEdicion.nombre,
          propietario: this.props.pacienteEnEdicion.propietario,
          email: this.props.pacienteEnEdicion.email,
          fechaAlta: this.props.pacienteEnEdicion.fechaAlta,
          sintomas: this.props.pacienteEnEdicion.sintomas,
          id: this.props.pacienteEnEdicion.id,
          error: false,
        });
      } else {
        this.reiniciarFormulario();
      }
    }
  }

  formularioEsValido() {
    const tieneError = [
      this.state.nombre,
      this.state.propietario,
      this.state.email,
      this.state.fechaAlta,
      this.state.sintomas,
    ].some((value) => value === "");
    this.setState({ ...this.state, error: tieneError });
    return !tieneError;
  }

  handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (this.formularioEsValido()) {
      const paciente: Paciente = {
        nombre: this.state.nombre,
        propietario: this.state.propietario,
        email: this.state.email,
        fechaAlta: this.state.fechaAlta,
        sintomas: this.state.sintomas,
        id: this.state.id,
      };
      //Esto es muy imperativo y horrible
      this.props.handlers.setPaciente(paciente);
      //this.setState({ ...this.state, error: false, id: undefined });
      this.reiniciarFormulario();
      this.props.handlers.setPacienteEnEdicion(null);
    }
  }

  reiniciarFormulario() {
    this.setState({
      ...this.state,
      nombre: "",
      propietario: "",
      email: "",
      fechaAlta: "",
      sintomas: "",
      id: undefined,
      error: false,
    });
  }

  render() {
    return (
      <div
        className="md:w-1/2 lg:w-2/5 mx-3 md:mx-0"
        data-testId="pacientFormContainer"
      >
        {this.state.error && (
          <Error>
            <p>Todos los campos son obligatorios</p>
          </Error>
        )}
        <h2
          className="font-black text-3xl text-center"
          data-testId="formContainerSubtitle"
        >
          Seguimiento pacientes
        </h2>
        <p className="text-xl mt-5 text-center mb-10">
          Añade pacientes y{" "}
          <span className="text-indigo-600 font-bold">administralos</span>
        </p>
        <form
          className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
          data-testId="pacientForm"
          onSubmit={(e) => this.handleSubmit(e)}
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
              data-testId="pacientNameInput"
              id="nombre"
              onChange={(event) =>
                this.setState({ ...this.state, nombre: event.target.value })
              }
              placeholder="Nombre de la mascota"
              type="text"
              value={this.state.nombre}
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
              data-testId="pacientOwnerNameInput"
              id="propietario"
              onChange={(event) =>
                this.setState({
                  ...this.state,
                  propietario: event.target.value,
                })
              }
              placeholder="Nombre del propietario"
              type="text"
              value={this.state.propietario}
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
              data-testId="pacientEmailInput"
              id="email"
              onChange={(event) =>
                this.setState({
                  ...this.state,
                  email: event.target.value,
                })
              }
              placeholder="Email de contacto del propietario"
              type="email"
              value={this.state.email}
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
              data-testId="signUpDateInput"
              id="fechaAlta"
              onChange={(event) =>
                this.setState({
                  ...this.state,
                  fechaAlta: event.target.value,
                })
              }
              type="date"
              value={this.state.fechaAlta}
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
              data-testId="pacientSymptomsInput"
              id="sintomas"
              onChange={(event) =>
                this.setState({
                  ...this.state,
                  sintomas: event.target.value,
                })
              }
              placeholder="Describe los sintomas"
              value={this.state.sintomas}
            ></textarea>
          </div>
          <input
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
            data-testId="submitButtonId"
            type="submit"
            value={this.state.id ? "Editar paciente" : "Agregar paciente"}
          />
        </form>
      </div>
    );
  }
}
