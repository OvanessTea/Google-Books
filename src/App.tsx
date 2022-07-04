import './App.css';
import Header from './components/Header';
import ShelveComponent from "./components/ShelveComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookDetails from './components/BookDetails';

function App() {
  return (
    <div className="App">
      <Router /*basename="/Google-Books"*/>
        <Header/>
        <Routes>
          <Route path="/" element={<ShelveComponent/>}/>
          <Route path="/preview/:id" element={<BookDetails />}/>
          <Route path="*" element={<h1 className="message">Page not found...</h1>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
