import React from "react";
import { MdCurrencyExchange } from "react-icons/md";
import { FaHryvnia } from "react-icons/fa";
import s from "./header.module.css";

function Header({ rates }) {
  const currentRate = (rate) => (1 / rate).toFixed(2);
  const hasRates = rates && Object.keys(rates).length > 0;

  return (
    <header className={s.header}>
      <MdCurrencyExchange className={s.logo} />
      {hasRates ? (
        <ul className={s.list}>
          <li className={s.item}>
            EUR:&nbsp; <span> {currentRate(rates.EUR)} </span>
            <FaHryvnia className={s.icon} />
          </li>
          <li className={s.item}>
            USD:&nbsp; <span>{currentRate(rates.USD)} </span>
            <FaHryvnia className={s.icon} />
          </li>
        </ul>
      ) : (
        <span>loading current rates...</span>
      )}
    </header>
  );
}

export default Header;
