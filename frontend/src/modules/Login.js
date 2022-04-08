import React, { useState } from "react";
import "./StyleLogin.scss";
// import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
// import { BrowserRouter as Routes } from "react-router-dom";
import { Link, Switch, useHistory } from "react-router-dom";

export default function Login() {
  const onSubmit = (data) => {};
  const [name, setName] = useState();
  const history = useHistory();

  return (
    <div className="main">
      <div className="navbar containerr">
        <div className="row">
          <div className="icon col-4 col-lg-4 col-md-4"></div>

          <div className="menu col-4 col-lg-4 col-md-4">
            <ul>
              <li>
                <Link to="#">HOME</Link>
              </li>
              <li>
                <Link to="#">ABOUT</Link>
              </li>
              <li>
                <Link to="/meeting">Meetting</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="search col-4 col-lg-4 col-md-4">
          <input className="srch" type="search" name="" placeholder="Search" />
          <Link to="#">
            <button className="btnSearch">Search</button>
          </Link>
        </div>
      </div>
      <div className="content container">
        <div className="row">
          <div className="col-lg-6 col-6 col-md-6">
            <h1>
              American x2 & <br />
              <span>Development</span> <br />
              Course
            </h1>
            <p className="par">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              neque expedita atque eveniet <br /> quis nesciunt. Quos nulla vero
              consequuntur, fugit nemo ad delectus
              <br /> a quae totam ipsa illum minus laudantium?
            </p>
            <button className="cn">
              <Link to="#">JOIN US</Link>
            </button>
          </div>
          <div className="col-lg-6 col-6 col-md-6 mt-4">
            <div className="form">
              <div>
                <h2>MEETING</h2>
              </div>
              <input
                value={name}
                type="email"
                name="email"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="User name"
              />
              <br />
              {/* <input type="password" name="Code" placeholder="Code" /> */}
              <br />

              <button
                className="btnn"
                onClick={() => history.push(`/meeting/${name}`)}
              >
                Join meeting
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
