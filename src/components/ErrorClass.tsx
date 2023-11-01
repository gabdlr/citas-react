import { Component } from "react";
import { ErrorFormularioProps } from "../models/ErrorFormularioProps";

export class Error extends Component {
  props: { children: React.ReactNode } = { children: null };

  constructor(props: ErrorFormularioProps) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded">
        {this.props.children}
      </div>
    );
  }
}
