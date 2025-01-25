import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Portfolio from "./pages/portfolio/Portfolio";
import DocsPage from "./pages/documentation/DocsPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/documentation" element={<DocsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
