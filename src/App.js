import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"
import UniversityFilter from "./components/UniversityFilter";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Navigate replace to="/universities" />} />
          <Route path="/universities" element={<UniversityFilter />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
