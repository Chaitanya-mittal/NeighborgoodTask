import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login/Login";
import Applayout from "./components/Applayout/Applayout";
import UseDarkProvider from "./context/UseDarkProvider";
import GetStarted from "./pages/GetStarted/GetStarted";
import SignUp from "./pages/SignUp/SignUp";
import UseAuthProvider from "./context/UseAuthProvider";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Dashboard from "./pages/Dashboard/Dashboard";
function App() {
  return (
    <UseAuthProvider>
      <UseDarkProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Applayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/get-started" element={<GetStarted />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{ margin: "18px" }}
          toastOptions={{
            success: {
              duration: 2000,
            },
            error: {
              duration: 3000,
            },
            style: {
              boxShadow: "5px 5px 10px rgba(0,0,0,0.2)",
              fontSize: "1rem",
              padding: "1rem",
              backgroundColor: "white",
              color: "black",
            },
          }}
        />
      </UseDarkProvider>
    </UseAuthProvider>
  );
}

export default App;
