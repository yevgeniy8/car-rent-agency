export const createPriceOptions = () => {
    const arrayPrice = [];

    for (let i = 30; i <= 400; i += 10) {
        // const element = array[i];
        arrayPrice.push({
            value: i,
            label: i,
        });
    }

    return arrayPrice;
};
