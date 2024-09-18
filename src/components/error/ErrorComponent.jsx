import React from "react";
import s from "./error.module.css";

function ErrorComponent({ error }) {
  return (
    <p className={s.container}>
      Oops, something go wrong - <span className={s.error}>{error}</span>
    </p>
  );
}

export default ErrorComponent;
