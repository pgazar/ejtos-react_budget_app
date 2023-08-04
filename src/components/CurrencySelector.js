// CurrencySelector.js
import React from 'react';

const CurrencySelector = ({ selectedCurrency, setSelectedCurrency }) => {
    const currencies = ['$', '£', '€', '₹'];

    const handleCurrencyChange = (event) => {
        setSelectedCurrency(event.target.value);
    };

    return (
        <div>
            <label htmlFor="currencySelect">Select Currency: </label>
            <select
                id="currencySelect"
                value={selectedCurrency}
                onChange={handleCurrencyChange}
            >
                {currencies.map((currency) => (
                    <option key={currency} value={currency}>
                        {currency}
                    </option>
                ))}
            </select>
        </div>
    );
};
export default CurrencySelector;
