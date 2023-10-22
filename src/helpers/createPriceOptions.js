export const createPriceOptions = () => {
    const arrayPrice = [];

    for (let i = 30; i <= 400; i += 10) {
        arrayPrice.push({
            value: i,
            label: i,
        });
    }

    return arrayPrice;
};
