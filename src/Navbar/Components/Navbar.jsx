import React from "react";
import { Nav } from "../Styleing/Navbar_Styled";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


import { Link,} from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <Nav>
        <div className="navbar">
          <div className="navbarlogo_tabs">
            <div id="logo">
              <Link to="/">
                <img
                  src="https://www.1mg.com/images/tata_1mg_logo.svg"
                  alt="TATA 1mg"
                  className="logo_img"
                />
              </Link>
            </div>
            <div id="tabs">
              <div>
                <Link to="/">MEDICINES</Link>
              </div>
              <div>
                <Link to="/LabTests">LAB TESTS</Link>
                <div className="reddiv Safe_div">
                  <div>SAFE</div>
                </div>
              </div>
              <div>
                <Link to="/AskDoctor">CONSULT DOCTOR</Link>
              </div>
              <div>
                <Link to="/CarePlan">CARE PLAN</Link>
                <div className="reddiv">SAVE MORE</div>
              </div>
            </div>
          </div>
          <div id="loginSignup">
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              { (
                <>
                  <a
                    className="logandsign"
                  > 
                    Login
                  </a>
                  |
                  <a
                    className="logandsign"
                  >
                    Sign Up
                  </a>
                </>
              )}
            </div>
            <div>Offers</div>
            <div className="cart_icon">
              <div
                className="cart_svg"
              >
              <ShoppingCartIcon />
              </div>
              <div className="count"></div>
            </div>
            <div style={{ fontSize: "14px" }}>Need Help ?</div>
          </div>
        </div>
      </Nav>
    </>
  );
};
{
}
