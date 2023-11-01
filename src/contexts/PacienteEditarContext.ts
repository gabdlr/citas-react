import { createContext } from "react";
import { Paciente } from "../types/Paciente";

export const ContextoPacienteEnEdicion = createContext<Paciente | null>(null);
