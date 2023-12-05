import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import ContactUs from "./components/ContactUs";
import About from "./components/About";
import NavBar from "./components/NavBar";
import "./components/NavBar.css";
import { Container } from "react-bootstrap";
import ConnectPhantomWallet from "./connectWallet/ConnectPhantomWallet.tsx";
import NftDetailpage from "./components/NftDetailpage";
// import './App.scss';


function App() {
  return (
    // <>
    <BrowserRouter>
    <div className="topbar">
    <Container>
        <NavBar/>  
    </Container>
    </div>
    {/* <ConnectPhantomWallet /> */}
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="about" element={<About />} />
        <Route path="nft" element={<NftDetailpage />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
