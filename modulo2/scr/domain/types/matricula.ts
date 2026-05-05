import { Asignatura } from "./asignatura";

/**
 * Estado ACTIVA
 */
export interface MatriculaActiva {
  tipo: "ACTIVA";
  asignaturas: Asignatura[];
}

/**
 * Estado SUSPENDIDA
 */
export interface MatriculaSuspendida {
  tipo: "SUSPENDIDA";
  motivo: string;
}

/**
 * Estado FINALIZADA
 */
export interface MatriculaFinalizada {
  tipo: "FINALIZADA";
  notaMedia: number;
}

/**
 * Unión discriminada estricta
 */
export type EstadoMatricula =
  | MatriculaActiva
  | MatriculaSuspendida
  | MatriculaFinalizada;