import React, { useState } from "react";
import { MdCurrencyExchange } from "react-icons/md";
import s from "./exchangeForm.module.css";

function ExchangeForm({ baseRates, onExchangeSubmit, rates }) {
  const [exchangeData, setExchangeData] = useState({
    amount: "",
    from: "",
    to: "",
  });

  const onHandleChange = (event) => {
    const { name, value } = event.target;
    setExchangeData({ ...exchangeData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onExchangeSubmit(exchangeData);
  };

  return (
    <div className={s.container}>
      <form className={s.form} onSubmit={handleSubmit}>
        <select
          aria-label="select"
          className={s.select}
          name="from"
          onChange={onHandleChange}
          required
          defaultValue="default"
        >
          <option disabled value="default">
            from
          </option>

          {baseRates.map((item) => (
            <option key={item[0]} value={item[0]}>
              {item[0]}
            </option>
          ))}
        </select>

        <select
          aria-label="select"
          className={s.select}
          name="to"
          onChange={onHandleChange}
          required
          defaultValue="default"
        >
          <option disabled value="default">
            to
          </option>

          {baseRates.map((item) => (
            <option key={item[0]} value={item[0]}>
              {item[0]}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="amount"
          className={s.input}
          name="amount"
          required
          value={exchangeData.amount}
          onChange={onHandleChange}
        />
        <button className={s.button} type="submit">
          <MdCurrencyExchange className={s.icon} />
        </button>
      </form>
      {rates && (
        <p>
          The result for exchange {exchangeData.amount + exchangeData.from} to{" "}
          {exchangeData.to} is {rates?.result}
        </p>
      )}
    </div>
  );
}

export default ExchangeForm;
