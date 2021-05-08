
/*export const getBasketTotal = (basket) => {
    var total = 0;
    basket.forEach((item) => {
        total = total + item.price;
    });
    return total;
};*/
export const initialState = {
    basket: [],
};

export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        /*case "REMOVE_FROM_BASKET":
            return{
                ...
            };*/
        default:
            return state;
    }
};

export default reducer;
