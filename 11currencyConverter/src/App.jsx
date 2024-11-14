import { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import InputBox from './components/InputBox';
import "./App.css";

function App() {
  // State variables for amount, currencies, and converted amount
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState();

  // Custom hook to fetch currency information based on the 'from' currency
  const currencyInfo = useCurrencyInfo(from);

  // Get currency options from the fetched currency info
  const options = Object.keys(currencyInfo);

  // Function to swap the 'from' and 'to' currencies
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  // Function to convert the given amount based on the selected currencies
  const convert = () => {
    const convertedAmount = amount * currencyInfo[to];
    const roundedAmount = parseFloat(convertedAmount.toFixed(2));
    setConvertedAmount(roundedAmount);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/281260/pexels-photo-281260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert(); // Convert the amount when the form is submitted
            }}
          >
            <div className="w-full mb-1">
              {/* InputBox for the 'from' currency */}
              <InputBox 
                label="From" 
                amount={amount}
                currencyOption={options}
                onAmountChange={(amount) => setAmount(amount)}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5">
            {/* Swap currencies when button is clicked */}
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap} 
              >
                Swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              {/* InputBox for the 'to' currency */}
              <InputBox 
                label="To"
                amount={convertedAmount}
                currencyOption={options}
                onAmountChange={(amount) => setAmount(amount)}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
