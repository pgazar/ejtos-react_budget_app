import React, { useState } from 'react';
import Select from 'react-select';

const CustomSelect = () => {
    const options = [
        { value: 'dollar', label: '$ Dollar' },
        { value: 'pound', label: '£ Pound' },
        { value: 'euro', label: '€ Euro' },
        { value: 'rupee', label: '₹ Ruppee' },
    ];

    const customStyles = {
        control: (provided) => ({
            ...provided,
            backgroundColor: 'greenyellow', // Set background color
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? 'white' : 'greenyellow', // Set background color
            color: state.isSelected ? 'black' : 'white', // Set text color
        }),
    };

    const [selectedOption, setSelectedOption] = useState(null);

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
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
