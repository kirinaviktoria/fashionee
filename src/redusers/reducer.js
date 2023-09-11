import data from '../products.json'

export const ACTIONS = {
  LIKE_PRODUCTS: 'like_products',
  ADD_PRODUCTS: 'add_products',
}

export const initialState = {
  products: []
}
export const reduser = (state, action) => {
  switch (action.type) {
    //разобраться, как добавить карточки в локалсторедж
    case ACTIONS.LIKE_PRODUCTS:
      return {
        ...state,
        ...action.payload,
      }

    default:
      return state
  }
}