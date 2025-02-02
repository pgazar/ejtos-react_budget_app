
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import CustomSelect from './CustomSelect';


const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);

    const handleCurrencyChange = (e) => {
        const selectedCurrency = e.target.value;
        dispatch({
            type: 'CHG_CURRENCY',
            payload: selectedCurrency.value,
        });

    };

    return (
        <div className="currency-dropdown">
            <label className="currency-main">Currency:</label>
            <CustomSelect value={currency}
                onChange={handleCurrencyChange} />

        </div>
    );
};

export default Currency;

