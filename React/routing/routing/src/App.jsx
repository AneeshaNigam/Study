import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Greet from "./components/greet";
import Seeoff from "./components/seeoff";
import Errorpage from "./components/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout wraps all pages */}
        <Route path="/" element={<Layout />}>
          <Route path="greet" element={<Greet />} />
          <Route path="seeoff" element={<Seeoff />} />
          <Route path="*" element={<Errorpage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
