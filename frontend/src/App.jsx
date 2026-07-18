import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Department from "./pages/Department";
import Booking from "./pages/Booking";
import Confirmation from "./pages/Confirmation";
import Admin from "./pages/Admin";

import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <Routes>

      {/* =========================
          Patient Portal
      ========================== */}

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

      {/* =========================
          Staff Portal
      ========================== */}

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/admin"
        element={
          <ProtectedRoute
            allowedRoles={["Reception"]}
          >
            <Admin />
          </ProtectedRoute>
        }
      />

    </Routes>
  );
}

export default App;