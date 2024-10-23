import { Route, Routes } from "react-router-dom";
import { Blogs, Home, Login, Products } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
