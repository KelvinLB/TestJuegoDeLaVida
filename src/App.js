import TableroGame from "./components/TableroGame";

function App() {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <TableroGame filas={3} columnas={3} />
    </div>
  );
}

export default App;
