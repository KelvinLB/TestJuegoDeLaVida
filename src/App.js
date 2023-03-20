import Tablero from "./components/Tablero";
import TableroGame from "./components/TableroGame";

function App() {
  return (
    <div className="container-fluid">
      <TableroGame filas={5} columnas={5} />
    </div>
  );
}

export default App;
