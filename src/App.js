import './App.css';
import { useEffect, useState } from "react";
import CurrencyRow from './CurrencyRow';
const url = "https://api.exchangeratesapi.io/latest";
function App() {
  const [currency, setCurrency] = useState([]);
  console.log(currency);
  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
      setCurrency([data.base, ...Object.keys(data.rates)]);
    })
  }, []);
  return (
    <div className="App">
      <h1>&#36; Convertor</h1>
      <CurrencyRow />
      <div className="equals">=</div>
      <CurrencyRow />
    </div>
  );
}

export default App;
