export const ACTIONS = {
  SET_PRODUCTS: 'set_products',
  SORT_PRODUCTS: 'sort_products',
  LIKE_PRODUCTS: 'like_products',
  ADD_PRODUCTS: 'add_products',
}

export const initialState = {
  products: []
}

export const reduser = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_PRODUCTS:
      return {
        ...state,
        ...action.payload
      };
      default:
        return state
  }
}