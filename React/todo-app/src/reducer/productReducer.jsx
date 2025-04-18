export const initialState = {
  loading: false,
  products: [],
  error: "",
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case "ProductRequest":
      return { ...state, loading: true };
    case "ProductSuccess":
      return { ...state, loading: false, products: action.payload };
    case "ProductError":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
