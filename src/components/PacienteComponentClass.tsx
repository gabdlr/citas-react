import { Component } from "react";
import { PacienteComponentProps } from "../models/PacienteComponentProps";
import { BotonFormulario } from "./BotonFormulario";

export class PacienteComponent extends Component {
  declare props: PacienteComponentProps;

  render() {
    return (
      <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
        <p
          className="font-bold mb-3 text-gray-700 uppercase"
          data-testid="pacientCardField"
        >
          Nombre:{" "}
          <span className="font-normal normal-case">
            {this.props.paciente.nombre}
          </span>
        </p>
        <p
          className="font-bold mb-3 text-gray-700 uppercase"
          data-testid="pacientCardField"
        >
          Propietario:{" "}
          <span className="font-normal normal-case">
            {this.props.paciente.propietario}
          </span>
        </p>
        <p
          className="font-bold mb-3 text-gray-700 uppercase"
          data-testid="pacientCardField"
        >
          Email:{" "}
          <span className="font-normal normal-case">
            {this.props.paciente.email}
          </span>
        </p>
        <p
          className="font-bold mb-3 text-gray-700 uppercase"
          data-testid="pacientCardField"
        >
          Fecha alta:{" "}
          <span className="font-normal normal-case">
            {this.props.paciente.fechaAlta}
          </span>
        </p>
        <p
          className="font-bold mb-3 text-gray-700 uppercase"
          data-testid="pacientCardField"
        >
          Sintomas:{" "}
          <span className="font-normal normal-case">
            {this.props.paciente.sintomas}
          </span>
        </p>
        <div className="flex justify-between">
          <BotonFormulario
            clases="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
            texto="Editar"
            onClick={this.props.setPacienteEnEdicion}
            paciente={this.props.paciente}
            testId="pacientCardEditButton"
          />
          <BotonFormulario
            clases="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
            texto="Eliminar"
            onClick={this.props.eliminarPaciente}
            paciente={this.props.paciente}
            testId="pacientCardDeleteButton"
          />
        </div>
      </div>
    );
  }
}
