import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Department from "./pages/Department";
import Booking from "./pages/Booking";
import Confirmation from "./pages/Confirmation";
import Admin from "./pages/Admin";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/department/:departmentId"
        element={<Department />}
      />

      <Route
        path="/booking/:serviceName"
        element={<Booking />}
      />

      <Route
        path="/confirmation"
        element={<Confirmation />}
      />

      <Route
        path="/admin"
        element={<Admin />}
      />
    </Routes>
  );
}

export default App;