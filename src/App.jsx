import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import File from "./pages/File";
import Success from "./pages/Success";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="success" element={<Success />} />
        <Route path=":fileid" element={<File />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
