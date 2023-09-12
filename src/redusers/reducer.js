export const ACTIONS = {
  LIKE_PRODUCTS: 'like_products',
  ADD_PRODUCTS: 'add_products',
}

export const initialState = {
  amountLiked: [],
  liked: false
}

export const reduser = (state, action) => {
  switch (action.type) {
    //разобраться, как добавить карточки в локалсторедж
    case ACTIONS.LIKE_PRODUCTS:
      return {
        ...state,
        amountLiked: [
          ...state.amountLiked,
          action.payload
        ], 
        // liked: state.liked
      };
        
    default:
      return state
  }
}