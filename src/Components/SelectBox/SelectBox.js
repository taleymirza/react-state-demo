import React from 'react';

const SelectBox = ({ option, changeOption }) => {
    return (
        <>
            <h1>Select Image</h1>
            <select value={option} onChange={(e) => changeOption(e.target.value)}>
                <option value="select">Select</option>
                <option value="fruit">Fruit</option>
                <option value="veg">Vegetable</option>
                <option value="meat">Meat</option>
            </select>
        </>
    )
}
export default SelectBox;