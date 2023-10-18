import React, { useState } from 'react';

const SearchForm = () => {
    const [brand, setBrand] = useState('');

    const handleClickBrand = evt => {
        setBrand(evt.target.value);
        console.log(evt.target.value);
    };
    return (
        <div>
            <form action="">
                <label htmlFor="">
                    Car brand
                    <select
                        name="brand"
                        value={brand}
                        onChange={handleClickBrand}
                    >
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
            </form>
        </div>
    );
};

export default SearchForm;
