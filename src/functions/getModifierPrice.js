const getModifierPrice = (arr) => {
    return arr.reduce((acc, curr) => {
        return acc+ curr.option.price;
    }, 0);
};

export default getModifierPrice;