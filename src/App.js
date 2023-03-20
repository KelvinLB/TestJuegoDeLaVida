import TableroGame from "./components/TableroGame";

function App() {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <TableroGame filas={30} columnas={30} />
    </div>
  );
}

export default App;
