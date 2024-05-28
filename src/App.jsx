import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";

import Login from "./pages/Login/Login";
import Applayout from "./components/Applayout/Applayout";
import UseDarkProvider from "./context/UseDarkProvider";
import GetStarted from "./pages/GetStarted/GetStarted";
import SignUp from "./pages/SignUp/SignUp";
import UseAuthProvider from "./context/UseAuthProvider";
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
            </Route>
          </Routes>
        </BrowserRouter>
      </UseDarkProvider>
    </UseAuthProvider>
  );
}

export default App;
