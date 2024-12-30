const initialState = {
    items: [], 
  };
  
  export const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_PRODUCTS':
        return { ...state, items: action.payload };
      case 'ADD_PRODUCT':
        return { ...state, items: [...state.items, action.payload] };
      case 'UPDATE_PRODUCT':
        return {
          ...state,
          items: state.items.map((product) =>
            product.id === action.payload.id ? action.payload : product
          ),
        };
      case 'DELETE_PRODUCT':
        return {
          ...state,
          items: state.items.filter((product) => product.id !== action.payload),
        };
      default:
        return state;
    }
  };
  