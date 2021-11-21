import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Main from "./components/Main";
import Game from "./components/Game";
import { CssBaseline } from "@mui/material";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {


  return (
    <div className="App" >
      <Header />
      <Router >
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </Router>
      
      <Footer />
      <CssBaseline />
    </div>
  );
}

export default App;

