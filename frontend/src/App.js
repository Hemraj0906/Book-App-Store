
import './App.css';
//import DeleteCom from './components/DeleteCom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import UpdateCom from './components/UpdateCom';
import AddBooks from './pages/AddBooks';
import Books from './pages/Books';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/addbooks" element={<AddBooks />} />
        <Route path="/books/:id" element={<UpdateCom />} exact />
       
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
