import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Borrows from "../pages/Borrow";
import NotFound from "../pages/NotFound";
import Book from "../pages/Book"
import Borrower from "../pages/Borrower";
import {UserContextProvider} from "../context/UserContext";
import Home from "../pages/Home";
import NotLogged from "../pages/NotLogged";
import Login from "../pages/Login";
function App() {
  const [isLogued, setIsLogued] = useState(true);
  return (
    <BrowserRouter>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/Book" element={<Book />} />
          <Route path="/Borrow" element={<Borrows />} />
          <Route path="/Borrower" element={<Borrower />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/NotLogged" element={<NotLogged/>}/>
          <Route path="/Login" element={<Login/>} />
          </Routes>
      </UserContextProvider>
    </BrowserRouter>
  );

}

export default App
