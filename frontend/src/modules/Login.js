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
            
          </div>
        </div>
       
      </div>
      <div className="content container">
        <div className="row">
          <div className="col-lg-12 col-12 col-md-12 mt-4" style={{display: "flex", justifyContent: "center"}}>
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
