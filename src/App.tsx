import { useState } from "react";
import style from "./App.module.css";
import Modal from "./Modal";

function App() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div>
      <h2>Clique no botão para abrir</h2>
      <button onClick={() => setOpen(!open)}>Clique aqui</button>

      <Modal isOpen={open} setOpen={setOpen} />
    </div>
  );
}

export default App;
