// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";


// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import BookPage from "./pages/BookPage/BookPage";
import WishlistPage from "./pages/WishlistPage/WishlistPage";
import BookshelfPage from "./pages/BookshelfPage/BookshelfPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/book/:selectedBook" element={<BookPage />} />
        <Route path="/wishlist" element={<WishlistPage/>} />
        <Route path="/bookshelf" element={<BookshelfPage/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
