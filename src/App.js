import { Routes, Route } from "react-router-dom";
import MainPages from "./pages/MainPages";
import BackgroundParticles from "./components/BackgroundParticles";

function App() {
  return (
    <div className="app-root">
      <BackgroundParticles />

      <div className="content-layer">
        <Routes>
          <Route path="/" element={<MainPages />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
