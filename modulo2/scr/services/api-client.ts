import { RespuestaAPI } from "../domain/types/api/respuesta-api";
/**
 * Simulación de base de datos en memoria
/**
 * Simulación de base de datos en memoria
 */
const mockDB: Record<string, unknown> = {
  "/estudiantes": [
    { id: "1", nombre: "Ana", email: "ana@uni.com", edad: 20 },
    { id: "2", nombre: "Luis", email: "luis@uni.com", edad: 22 }
  ],
  "/asignaturas": [
    { id: "MAT101", nombre: "Matemáticas", creditos: 6 },
    { id: "PROG201", nombre: "Programación", creditos: 8 }
  ]
};

/**
 * Cliente API genérico simulado
 */
export class ApiClient {
  /**
   * Método genérico para obtener recursos tipados
   */
  static obtenerRecurso<T>(endpoint: string): Promise<RespuestaAPI<T>> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = mockDB[endpoint];

        // Validación básica de existencia
        if (!data) {
          resolve({
            success: false,
            data: null as T,
            error: `Endpoint ${endpoint} no encontrado`,
            timestamp: Date.now()
          });
          return;
        }

        resolve({
          success: true,
          data: data as T,
          timestamp: Date.now()
        });
      }, 800); // simulación de latencia
    });
  }
}