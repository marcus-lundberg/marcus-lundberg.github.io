import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import OmegapointPage from "./pages/OmegapointPage";
import PongPage from "./pages/PongPage";
import VasterbottensostPage from "./pages/VasterbottensostPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects/omegapoint" element={<OmegapointPage />} />
      <Route path="/projects/pong" element={<PongPage />} />
      <Route path="/projects/vasterbottensost" element={<VasterbottensostPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}

export default App;
