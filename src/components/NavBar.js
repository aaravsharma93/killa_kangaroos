import React from 'react';
import { NavLink} from "react-router-dom";
import './NavBar.css';
import ConnectPhantomWallet from "../connectWallet/ConnectPhantomWallet.tsx";
import mainlogo from "../assets/images/logo.png";

function NavBar() {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  
  return (
    <div>
     <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
      <nav className="navbar" onClick={e => e.stopPropagation()}>
        <div className="nav-container">
          <NavLink exact="true" to="/" className="nav-logo">
          <img src={mainlogo} alt="logo" className="logo-img" />
            <i className="fa fa-code"></i>
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact="true"
                to="/"
                activeclassname="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact="true"
                to="/nft"
                activeclassname="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                NFT Detail
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact="true"
                to="/blog"
                activeclassname="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact="true"
                to="/contact"
                activeclassname="active"
                className="nav-links"
               onClick={click ? handleClick : null}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <ConnectPhantomWallet />
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </ div>
  );
}
// function Navbar() {
  
//   return (
//     <>
     
//        <BrowserRouter>
//         <NavBar />

//         <div className="pages">
//           <Switch>
//             <Route exact path="/" component={Home} />
//             <Route path="/about" component={About} />
//             <Route path="/blog" component={Blog} />
//             <Route path="/contact" component={Contact} />
//           </Switch>
//         </div>
//       </BrowserRouter>
//     </>
//   );
// }

export default NavBar;