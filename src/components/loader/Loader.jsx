import React from "react";
import { PulseLoader } from "react-spinners";
import s from "./loader.module.css";

function Loader() {
  return (
    <div className={s.backdrop}>
      <PulseLoader color="#adcb28" />
    </div>
  );
}

export default Loader;
