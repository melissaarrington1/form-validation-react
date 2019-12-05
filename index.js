import React from "react";
import ReactDOM from "react-dom";
import ValidatedLoginForm from "./ValidatedLoginForm";
import { formik } from "formik";
import * as EmailValidator from "email-validator";
import * as Yup from "yup";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <ValidatedLoginForm />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
