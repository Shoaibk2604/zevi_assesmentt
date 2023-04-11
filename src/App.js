import "./App.css";
import HomeLayout from "./container/home/homeLayout";
import { Route, Routes } from "react-router";
import ProductLayout from "./container/productpage/productLayout";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeLayout />} />
      </Routes>
      <Routes>
        <Route path="/productpage" element={<ProductLayout/>} />
      </Routes>
    </div>
  );
}

export default App;
