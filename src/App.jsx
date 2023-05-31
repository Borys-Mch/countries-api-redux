import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layaut from "./components/Layaut";
import HomePage from "./pages/HomePage";
import SinglePage from "./pages/SinglePage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layaut />}>
          <Route index element={<HomePage />} />
          <Route path="/country/:name" element={<SinglePage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
