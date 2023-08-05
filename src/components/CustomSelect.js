import React, { useContext } from 'react';
import Select from 'react-select';
import { AppContext } from '../context/AppContext';  // Import the context here

const CustomSelect = () => {
    const { currency, dispatch } = useContext(AppContext);  // Access currency and dispatch

    const options = [
        { value: '$', label: '$ Dollar' },
        { value: '£', label: '£ Pound' },
        { value: '€', label: '€ Euro' },
        { value: '₹', label: '₹ Rupee' },
    ];

    const customStyles = {
        control: (provided) => ({
            ...provided,
            backgroundColor: 'greenyellow',


        }),
        option: (provided, state) => ({
            ...provided,

            backgroundColor: state.isSelected ? 'white' : 'greenyellow',
            color: 'black',
        }),
    };

    // This finds the corresponding option based on the currency value
    const selectedOption = options.find(option => option.value === currency);

    const handleChange = (selectedOption) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: selectedOption.value,

        });

    };

    return (
        <Select
            options={options}
            styles={customStyles}
            value={selectedOption}
            onChange={handleChange}
        />
    );
};

export default CustomSelect;
