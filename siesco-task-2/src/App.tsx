import { Route, Routes } from "react-router-dom";
import { Blogs, Home, Products } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/blogs" element={<Blogs />} />
    </Routes>
  );
}

export default App;
