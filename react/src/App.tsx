import { DataTable } from "./componentes/DataTable";
import type { Column } from "./componentes/DataTable";
import { calcularDiferenciaDias } from "./utils/dateDifference";

type Estudiante = {
  id: number;
  nombre: string;
  edad: number;
};

const data: Estudiante[] = [
  { id: 1, nombre: "Ana", edad: 20 },
  { id: 2, nombre: "Luis", edad: 22 }
];

// ✔ Tipado correcto y estricto
const columns: Column<Estudiante>[] = [
  { header: "Nombre", accessor: "nombre" },
  { header: "Edad", accessor: "edad" }
];

// ✔ función auxiliar
const dias = calcularDiferenciaDias(
  new Date("2024-01-01"),
  new Date("2024-01-10")
);

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>DataTable genérica</h1>

      <p>Diferencia de días: {dias}</p>

      <DataTable data={data} columns={columns} />
    </div>
  );
}