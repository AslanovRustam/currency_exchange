import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import ExchangeForm from "./components/exchangeForm/ExchangeForm";
import { exchangeCurrency, latestRates } from "./services/exchangeApi";
import Loader from "./components/loader/Loader";
import ExchangeFormUAH from "./components/exchangeForm/ExchangeFormUAH";

function App() {
  const [baseCurrency, setBaseCurrency] = useState("UAH");
  const [baseRates, setBaseRates] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [exchangeData, setExchangeData] = useState(null);
  const [anyRates, setAnyRates] = useState(null);

  useEffect(() => {
    const rates = async () => {
      setIsLoading(true);
      try {
        const data = await latestRates(baseCurrency);
        setBaseRates(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    rates();
  }, []);

  useEffect(() => {
    if (exchangeData) {
      const rates = async () => {
        setIsLoading(true);
        try {
          const data = await exchangeCurrency(exchangeData);
          setAnyRates(data);
        } catch (error) {
          setError(error.message);
        } finally {
          setIsLoading(false);
        }
      };
      rates();
    }
  }, [exchangeData]);

  const onExchangeSubmit = (data) => {
    setExchangeData({ ...data });
  };

  const headerRates = baseRates.reduce((acc, [currency, value]) => {
    if (currency === "USD" || currency === "EUR") {
      acc[currency] = value;
    }
    return acc;
  }, {});

  return (
    <>
      {isLoading && <Loader />}
      <Header rates={headerRates} />
      <ExchangeForm
        baseRates={baseRates}
        onExchangeSubmit={onExchangeSubmit}
        rates={anyRates}
      />
      <ExchangeFormUAH baseRates={baseRates} type="USD" />
      <ExchangeFormUAH baseRates={baseRates} type="EUR" />
    </>
  );
}

export default App;
