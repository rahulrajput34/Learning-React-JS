import React, { useId } from 'react';
  
function InputBox({
    // props
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOption = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
    // Generate a unique ID
    const amountInputId = useId();

    return (
        // label and inout
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}  {/* Display the label for the input field */}
                </label>

                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable} 
                    value={amount === 0 ? '' : amount}  
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} 
                    style={{
                        WebkitAppearance: 'none !important',
                        margin: 0,
                        MozAppearance: 'textfield !important'
                    }}
                />
            </div>
            {/* Display the options for selecting the currency type from the available options */}
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    {
                        // for rendering currency options which got from API
                        currencyOption.map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))
                    }
                </select>
            </div>
        </div>
    );
}

export default InputBox;
