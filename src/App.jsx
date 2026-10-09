import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layouts/Layout";
import ItemListContainer from "./Components/Products/ItemListContainer";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<h1>Inicio</h1>} />
        <Route path="/productos" element={<ItemListContainer />} />
        <Route path="/contacto" element={<h1>Contacto</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
