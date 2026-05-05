import { differenceInDays } from "date-fns";

/**
 * Calcula diferencia en días entre dos fechas
 */
export function calcularDiferenciaDias(
  fechaInicio: Date,
  fechaFin: Date
): number {
  return differenceInDays(fechaFin, fechaInicio);
}