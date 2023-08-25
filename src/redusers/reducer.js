import data from '../products.json'

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
        sorted: data.products.sort((prod1, prod2) => prod1.id > prod2.id ? 1 : -1)
      };

    case 'cheap':
      return {
        sorted: data.products.sort((prod1, prod2) => prod1.price > prod2.price ? 1 : -1)
      };

    case 'expensive':
      return {
        sorted: data.products.sort((prod1, prod2) => prod1.price < prod2.price ? 1 : -1)
      };

    case 'new':
      return {
        sorted: data.products.sort((prod1, prod2) => prod1.isNew < prod2.isNew ? 1 : -1)
      };

    case 'discount':
      return {
        sorted: data.products.sort((prod1, prod2) => prod1.isSale < prod2.isSale ? 1 : -1)
      };

    default:
      return data.products
  }
}

export const reduser = (state, action) => {
  switch (action.type) {
    case ACTIONS.SORT_PRODUCTS:
      return {
        ...state,
        sorted: sort(action.payload)
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