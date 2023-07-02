export const ACTIONS = {
  // SET_PRODUCTS: 'set_products',
  SORT_PRODUCTS: 'sort_products',
  FILTER_PRODUCTS: 'filter_products',
  LIKE_PRODUCTS: 'like_products',
  ADD_PRODUCTS: 'add_products',
}

export const initialState = {
  products: []
}

const sort = (method) => {
  switch (method) {
    case 'relevance':
      return {
        
      }

    case 'cheap':
      return {

      }

    case 'expensive':
      return {

      } 

    case 'new':
      return {

      }

    case 'discount':
      return {

      }

    default:
      return state
  }
}

export const reduser = (state, action) => {
  switch (action.type) {
    // case ACTIONS.SET_PRODUCTS:
    //   return {
    //     ...state,
    //     ...action.payload
    //   };

    case ACTIONS.SORT_PRODUCTS:
      return {
        ...state,

      }

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