import React, { useState } from "react";
import { MdCurrencyExchange } from "react-icons/md";
import s from "./exchangeForm.module.css";

const baseRates = [
  ["AED", 0.088416],
  ["AFN", 1.673539],
  ["ALL", 2.150826],
  ["AMD", 9.33149],
  ["ANG", 0.043456],
  ["AOA", 22.374985],
  ["ARS", 23.137294],
  ["AUD", 0.035627],
  ["AWG", 0.04333],
  ["AZN", 0.041224],
  ["BAM", 0.042354],
  ["BBD", 0.048684],
  ["BDT", 2.881523],
  ["BGN", 0.042347],
  ["BHD", 0.00907],
  ["BIF", 69.863861],
  ["BMD", 0.024072],
  ["BND", 0.031185],
  ["BOB", 0.16662],
  ["BRL", 0.131973],
  ["BSD", 0.024111],
  ["BTC", 3.98617e-7],
  ["BTN", 2.018173],
  ["BWP", 0.319376],
  ["BYN", 0.078908],
  ["BYR", 471.812394],
  ["BZD", 0.048604],
  ["CAD", 0.03273],
  ["CDF", 68.966451],
  ["CHF", 0.020391],
  ["CLF", 0.000811],
  ["CLP", 22.384855],
  ["CNY", 0.170755],
  ["CNH", 0.171182],
  ["COP", 101.229034],
  ["CRC", 12.486574],
  ["CUC", 0.024072],
  ["CUP", 0.63791],
  ["CVE", 2.387878],
  ["CZK", 0.543733],
  ["DJF", 4.293857],
  ["DKK", 0.161598],
  ["DOP", 1.445525],
  ["DZD", 3.183698],
  ["EGP", 1.165032],
  ["ERN", 0.361081],
  ["ETB", 2.748616],
  ["EUR", 0.021654],
  ["FJD", 0.053175],
  ["FKP", 0.018332],
  ["GBP", 0.018292],
  ["GEL", 0.064875],
  ["GGP", 0.018332],
  ["GHS", 0.378565],
  ["GIP", 0.018332],
  ["GMD", 1.648995],
  ["GNF", 208.34235],
  ["GTQ", 0.1865],
  ["GYD", 5.044722],
  ["HKD", 0.187626],
  ["HNL", 0.598125],
  ["HRK", 0.163666],
  ["HTG", 3.178504],
  ["HUF", 8.54462],
  ["IDR", 369.578351],
  ["ILS", 0.091042],
  ["IMP", 0.018332],
  ["INR", 2.017322],
  ["IQD", 31.58717],
  ["IRR", 1013.554115],
  ["ISK", 3.298348],
  ["JEP", 0.018332],
  ["JMD", 3.785818],
  ["JOD", 0.017055],
  ["JPY", 3.426863],
  ["KES", 3.110342],
  ["KGS", 2.03542],
  ["KHR", 97.730164],
  ["KMF", 10.657303],
  ["KPW", 21.664841],
  ["KRW", 31.919562],
  ["KWD", 0.007344],
  ["KYD", 0.020094],
  ["KZT", 11.571411],
  ["LAK", 532.422646],
  ["LBP", 2159.235214],
  ["LKR", 7.281886],
  ["LRD", 4.822468],
  ["LSL", 0.425291],
  ["LTL", 0.071079],
  ["LVL", 0.014561],
  ["LYD", 0.115077],
  ["MAD", 0.234747],
  ["MDL", 0.421005],
  ["MGA", 109.057205],
  ["MKD", 1.334215],
  ["MMK", 78.185115],
  ["MNT", 81.796862],
  ["MOP", 0.193538],
  ["MRU", 0.953904],
  ["MUR", 1.102482],
  ["MVR", 0.36975],
  ["MWK", 41.810315],
  ["MXN", 0.459758],
  ["MYR", 0.102524],
  ["MZN", 1.537603],
  ["NAD", 0.425291],
  ["NGN", 39.491426],
  ["NIO", 0.887019],
  ["NOK", 0.255481],
  ["NPR", 3.229076],
  ["NZD", 0.038924],
  ["OMR", 0.009265],
  ["PAB", 0.024112],
  ["PEN", 0.091195],
  ["PGK", 0.095652],
  ["PHP", 1.343979],
  ["PKR", 6.71039],
  ["PLN", 0.092582],
  ["PYG", 187.536814],
  ["QAR", 0.087886],
  ["RON", 0.107725],
  ["RSD", 2.535075],
  ["RUB", 2.202517],
  ["RWF", 32.20176],
  ["SAR", 0.090352],
  ["SBD", 0.200632],
  ["SCR", 0.318423],
  ["SDG", 14.479404],
  ["SEK", 0.24533],
  ["SGD", 0.031215],
  ["SHP", 0.018332],
  ["SLE", 0.549982],
  ["SLL", 504.778958],
  ["SOS", 13.779408],
  ["SRD", 0.716987],
  ["STD", 498.24306],
  ["SVC", 0.21099],
  ["SYP", 60.481774],
  ["SZL", 0.42499],
  ["THB", 0.803777],
  ["TJS", 0.256797],
  ["TMT", 0.084252],
  ["TND", 0.072997],
  ["TOP", 0.056564],
  ["TRY", 0.820287],
  ["TTD", 0.163716],
  ["TWD", 0.769247],
  ["TZS", 65.591144],
  ["UAH", 1],
  ["UGX", 89.568445],
  ["USD", 0.024072],
  ["UYU", 0.98339],
  ["UZS", 306.927845],
  ["VEF", 87202.305268],
  ["VES", 0.884148],
  ["VND", 593.015221],
  ["VUV", 2.857883],
  ["WST", 0.067341],
  ["XAF", 14.205091],
  ["XAG", 0.000784],
  ["XAU", 0.000009368711],
  ["XCD", 0.065056],
  ["XDR", 0.01787],
  ["XOF", 14.205091],
  ["XPF", 2.582672],
  ["YER", 6.026434],
  ["ZAR", 0.423527],
  ["ZMK", 216.677586],
  ["ZMW", 0.63717],
  ["ZWL", 7.751194],
];

// function ExchangeFormUAH({ baseRates, type }) {
function ExchangeFormUAH({ type }) {
  const [exchangeData, setExchangeData] = useState({
    amount: "",
    from: "UAH",
    to: type,
  });
  const [currentRates, setCurrentRates] = useState(null);

  const onHandleChange = (event) => {
    const { name, value } = event.target;
    setExchangeData({ ...exchangeData, [name]: value });
    setCurrentRates(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedRate = baseRates.find(
      ([currency]) => currency === exchangeData.to
    );
    if (selectedRate) {
      const rateValue = selectedRate[1];
      const result = (rateValue * exchangeData.amount).toFixed(2);
      setCurrentRates(result);
    } else {
      setCurrentRates({
        result: "Rate not found",
      });
    }
  };

  return (
    <div className={s.container}>
      <form className={s.form} onSubmit={handleSubmit}>
        <p className={s.label}>UAH to </p>
        <select
          aria-label="select"
          className={s.select}
          name="to"
          onChange={onHandleChange}
          required
          defaultValue={exchangeData.to}
        >
          <option disabled value={exchangeData.to}>
            {exchangeData.to}
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
      {currentRates && (
        <p className={s.text}>
          The result for exchange {exchangeData.amount + exchangeData.from}{" "}
          &nbsp;is {`${currentRates}  ${exchangeData.to}`}
        </p>
      )}
    </div>
  );
}

export default ExchangeFormUAH;
