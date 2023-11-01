import { createContext } from "react";
import { Paciente } from "../types/Paciente";

export const ContextoPaciente = createContext<Paciente[]>([]);
