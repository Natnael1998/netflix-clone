import { Routes, Route } from "react-router-dom";
import Discription from "./components/Discription";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthContextProvider } from "./context/AuthContext";
import Account from "./pages/Account";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Searchpage from "./pages/Searchpage";
import Signup from "./pages/Signup";


function App() {
  return (
    <>
    <AuthContextProvider>
    
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account" element={<ProtectedRoute>
          <Account />
          </ProtectedRoute>  } />
        <Route path="/search" element={<Searchpage />} />
        <Route path="/discription/:id" element={<Discription />} />

      </Routes>
    </AuthContextProvider>
     
    </>
  );
}

export default App;
