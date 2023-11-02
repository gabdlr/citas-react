import { Component } from "react";
import { BotonFormularioProps } from "../models/BotonFormularioProps";

export class BotonFormulario extends Component {
  declare props: BotonFormularioProps;
  render() {
    return (
      <button
        onClick={() => this.props.onClick(this.props.paciente)}
        className={this.props.clases}
      >
        {this.props.texto}
      </button>
    );
  }
}