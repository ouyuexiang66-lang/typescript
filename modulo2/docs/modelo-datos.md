# 📘 Modelo de datos - Sistema de gestión universitaria

## 🧩 Introducción

Este documento describe el modelo de datos del sistema de gestión universitaria implementado en TypeScript, así como las decisiones de arquitectura tomadas para garantizar tipado estricto, escalabilidad y separación de responsabilidades.

---

## 🏗️ Estructura general del proyecto

El modelo de datos se organiza dentro de la capa de dominio:

Aquí se definen las entidades principales del sistema:

- Estudiante
- Asignatura
- Matrícula

Además, se define una unión discriminada para representar los distintos estados de matrícula.

---

## 👨‍🎓 Entidades del dominio

### Estudiante

Representa a un alumno del sistema.

- Se utiliza `interface` porque define un contrato de objeto extensible.
- El identificador es inmutable mediante `readonly`.

Ejemplo conceptual:

```ts
interface Estudiante {
  readonly id: string;
  nombre: string;
  email: string;
  edad: number;
}

interface Asignatura {
  readonly id: string;
  nombre: string;
  creditos: number;
}

type EstadoMatricula =
  | MatriculaActiva
  | MatriculaSuspendida
  | MatriculaFinalizada;


  obtenerRecurso<T>(endpoint: string): Promise<RespuestaAPI<T>>

  Beneficios:
1. Reutilización

Un único método puede servir para múltiples tipos de datos:

Estudiante[]
Asignatura[]
Otros recursos del sistema


2. Tipado seguro

El tipo de respuesta se define en tiempo de compilación:

ApiClient.obtenerRecurso<Estudiante[]>("/estudiantes");

Esto evita errores en tiempo de ejecución.


3. Abstracción de la lógica de red

El consumidor no necesita conocer cómo se obtiene la información, solo su estructura.

Estructura de respuesta API

Todas las respuestas del sistema siguen un contrato común:

interface RespuestaAPI<T> {
  success: boolean;
  data: T;
  error?: string;
  timestamp: number;
}

Ventajas:
Estandarización de respuestas
Manejo centralizado de errores
Facilidad de integración con frontend o servicios externos

Decisiones de diseño
✔ Uso de interface

Se utiliza principalmente para modelar entidades del dominio porque:

Son extensibles
Representan contratos claros de objetos
Se alinean con arquitectura orientada a dominio
✔ Uso de type

Se utiliza en casos específicos como:

Uniones discriminadas
Composición de tipos complejos

✔ Separación de capas

El proyecto sigue una separación lógica:

domain/ → reglas de negocio y entidades
services/ → acceso a datos y APIs simuladas
types/ → contratos y estructuras de datos
docs/ → documentación técnica

onclusión

El modelo de datos está diseñado bajo principios de:

Tipado estricto con TypeScript
Separación clara de responsabilidades
Escalabilidad del sistema
Simulación de arquitectura real de software