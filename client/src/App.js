import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LoginRegis from "./pages/Authontication";
import Profile from "./pages/Profile";

function App() {
  return (
  <>
  <Router>
    <Routes>
      <Route index element={<LoginRegis/>}/>
      <Route exact path="/profile" element={<Profile/>}/>
    </Routes>
  </Router>
    </>
  );
}

export default App;
