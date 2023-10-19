import React, { useState } from 'react';

const SearchForm = () => {
    const [brand, setBrand] = useState('');
    const [price, setPrice] = useState('');

    const handleChange = evt => {
        switch (evt.target.name) {
            case 'brand':
                setBrand(evt.target.value);
                break;
            case 'price':
                setPrice(evt.target.value);
                break;
            default:
                break;
        }
    };
    return (
        <div>
            <form action="">
                <label htmlFor="">
                    Car brand
                    <select name="brand" value={brand} onChange={handleChange}>
                        <option value="" disabled>
                            Enter the text
                        </option>
                        <option value="Buick">Buick</option>
                        <option value="Volvo">Volvo</option>
                        <option value="Hummer">Hummer</option>
                        <option value="Subaru">Subaru</option>
                        <option value="Mitsubishi">Mitsubishi</option>
                        <option value="Nissan">Nissan</option>
                        <option value="Lincoln">Lincoln</option>
                        <option value="GMC">GMC</option>
                        <option value="Hyundai">Hyundai</option>
                    </select>
                </label>

                <label htmlFor="">
                    Price/ 1 hour
                    <select
                        name="price"
                        value={price}
                        id=""
                        onChange={handleChange}
                    >
                        <option value="30">30</option>
                        <option value="40">40</option>
                        <option value="50">50</option>
                        <option value="60">60</option>
                        <option value="70">70</option>
                        <option value="80">80</option>
                        <option value="90">90</option>
                        <option value="100">100</option>
                        <option value="120">120</option>
                        <option value="130">130</option>
                        <option value="140">140</option>
                    </select>
                </label>
            </form>
        </div>
    );
};

export default SearchForm;
