import { EstadoMatricula } from "../domain/types/matricula";
export function generarReporte(estado: EstadoMatricula): string {
  switch (estado.tipo) {
    case "ACTIVA":
      return `Matrícula activa con ${estado.asignaturas.length} asignaturas inscritas.`;

    case "SUSPENDIDA":
      return `Matrícula suspendida por motivo: ${estado.motivo}.`;

    case "FINALIZADA":
      return `Matrícula finalizada con nota media de ${estado.notaMedia}.`;

    default:
      // Garantía de exhaustividad
      const _exhaustiveCheck: never = estado;
      return _exhaustiveCheck;
  }
}