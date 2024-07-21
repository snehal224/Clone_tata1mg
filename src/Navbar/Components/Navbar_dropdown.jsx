import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { Nav_dropdown } from "../Styleing/Navbar_dropdown";
import { Link } from "react-router-dom";

export const Navbar_dropdown = () => {
  return (
    <Nav_dropdown>
      <div className="dropdown_div">
        <ul>
          <li>
            <Link to="/Products">
              Health Resource Center
              <FontAwesomeIcon className="dropdown_icon" icon={faAngleDown} />
            </Link>
            <ul className="dropdown">
              <div className="container1">
                <div className="notborder">
                  <li>
                    <Link to="/Products">All Diseases</Link>
                  </li>
                  <li>
                    <Link to="/Products">All Medicines</Link>
                  </li>
                  <li>
                    <Link to="/Products">
                      Medicines by Therapeutic className
                    </Link>
                  </li>
                </div>
              </div>
            </ul>
          </li>
          <li>
            <Link to="/Products">
              Vitamins and Nutritions
              <FontAwesomeIcon className="dropdown_icon" icon={faAngleDown} />
            </Link>
            <ul className="dropdown">
              <div className="container1">
                <div className="notborder">
                  <li>
                    <Link to="/Products">Tata 1mg</Link>
                  </li>
                </div>
              </div>
            </ul>
          </li>
          <li>
            <Link to="/Products">
              Healthcare Devices
              <FontAwesomeIcon className="dropdown_icon" icon={faAngleDown} />
            </Link>
            <ul className="dropdown">
              <div className="container1">
                <div className="notborder">
                  <li>
                    <Link to="/Products">BP Monitors</Link>
                  </li>
                </div>
              </div>
            </ul>
          </li>
          <li>
            <Link to="/Products">
              Personal Care{" "}
              <FontAwesomeIcon className="dropdown_icon" icon={faAngleDown} />
            </Link>
            <ul className="dropdown">
              <div className="container2">
                <div className="notborder">
                  <li>
                    <Link to="/Products">Skin Care</Link>
                  </li>
                  <li className="innerli">
                    <Link to="/Products">Body Lotions</Link>
                    <Link to="/Products">Mosquito Repellents</Link>
                  </li>
                </div>
              </div>
            </ul>
          </li>
          <li>
            <Link to="/Products">
              Health Conditions
              <FontAwesomeIcon className="dropdown_icon" icon={faAngleDown} />
            </Link>
            <ul className="dropdown">
              <div className="container2">
                <div className="notborder">
                  <li>
                    <Link to="/Products">Stomach Care</Link>
                  </li>
                  <li>
                    <Link to="/Products">Piles, Fissures & Fistula</Link>
                  </li>
                  <li>
                    <Link to="/Products">Smoking Cessation</Link>
                  </li>
                </div>
              </div>
            </ul>
          </li>
          <li>
            <Link to="/Products">
              Ayurveda Products
              <FontAwesomeIcon className="dropdown_icon" icon={faAngleDown} />
            </Link>
            <ul className="dropdown">
              <div className="container2">
                <div className="notborder">
                  <li>
                    <Link to="/Products">Ayurveda Top Brands</Link>
                  </li>
                  <li className="innerli">
                    <Link to="/Products">Dabur</Link>
                    <Link to="/Products">Sri Sri Tattva</Link>
                  </li>
                </div>
              </div>
            </ul>
          </li>
          <li>
            <Link to="/Products">
              Homeopathy{" "}
              <FontAwesomeIcon className="dropdown_icon" icon={faAngleDown} />
            </Link>
            <ul className="dropdown">
              <div className="container2">
                <div className="notborder">
                  <li>
                    <Link to="/Products">Homeopathy Top Brands</Link>
                  </li>
                  <li className="innerli">
                    <Link to="/Products">SBL Homoeopathy</Link>
                    <Link to="/Products">Dr Batra's</Link>
                  </li>
                </div>
              </div>
            </ul>
          </li>
          <li>
            <Link to="/Products">
              Featured
              <FontAwesomeIcon className="dropdown_icon" icon={faAngleDown} />
            </Link>
            <ul className="dropdown">
              <div className="container1">
                <div className="notborder">
                  <li>
                    <Link to="/Products">Winter Care</Link>
                  </li>
                  <li className="innerli">
                    <Link to="/Products">Hair & Scalp Care</Link>
                    <Link to="/Products">Cough & Cold</Link>
                  </li>
                </div>
              </div>
            </ul>
          </li>
        </ul>
      </div>
    </Nav_dropdown>
  );
};
