export const createBrandOptions = brands => {
    const options = brands.map(item => {
        return {
            value: item,
            label: item,
        };
    });

    return options;
};
