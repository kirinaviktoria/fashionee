import React, { useEffect, useReducer, useState } from 'react';
import data from '../../products.json'
import './style.scss'
import Card from './Card/Card';
import Pagination from '../Pagination/Pagination';
// import {ProductsContext} from '../../context/ProductsContext'
// import { ACTIONS, reduser, initialState } from '../../redusers/reducer';

const PRODUCTS_PER_PAGE = 9

const ACTIONS = {
  // SET_PRODUCTS: 'set_products',
  SORT_PRODUCTS: 'sort_products',
  FILTER_PRODUCTS: 'filter_products',
  LIKE_PRODUCTS: 'like_products',
  ADD_PRODUCTS: 'add_products',
}

const SORTING = {
  RELEVANCE: 'relevance',
  CHEAP: 'cheap',
  EXPENSIVE: 'expensive',
  NEW: 'new',
  DISCOUNT: 'discount'
}

const CATEGORIES = {
  ALL: 'All',
  MEN: 'Men',
  WOMEN: 'Women',
  ACC: 'Accessories',
  NEW: 'New Arrivals'
}

// const sortOptions = [SORTING.RELEVANCE, SORTING.CHEAP, SORTING.EXPENSIVE, SORTING.NEW, SORTING.DISCOUNT]

export default function Products() {
  const [products, setProducts] = useState(data.products)
  const [sortMethod, setSortMethod] = useState(SORTING.RELEVANCE)
  const [filterMethod, setFilterMethod] = useState(null)
  const [filterAll, setFilterAll] = useState(false)
  const [filterMen, setFilterMen] = useState(false)
  const [filterWomen, setFilterWomen] = useState(false)
  const [filterAcc, setFilterAcc] = useState(false)
  const [filterNew, setFilterNew] = useState(false)

  const [checked, setChecked] = useState(0)

  const [curPage, setCurPage] = useState(1)
  // const [likedCards, setLikedCards] = useState([])
  //
  // const [state, dispatch] = useReducer(reduser, initialState)
  //
  // const [process, setProcess] = useState('')
  //!!запомнить в массив избранные товары

  const firstIndex = (curPage - 1) * PRODUCTS_PER_PAGE
  const lastIndex = firstIndex + PRODUCTS_PER_PAGE
  const totalPages = products.length / PRODUCTS_PER_PAGE;
  let slisedCards = products.slice(firstIndex, lastIndex)

  //рабочая сортировка по всем карточкам
  const sorting = (sortMethod) => {
    if (sortMethod) {
      switch (sortMethod) {
        case SORTING.RELEVANCE:
          setProducts(data.products.sort((prod1, prod2) => prod1.id > prod2.id ? 1 : -1))
          break

        case SORTING.CHEAP:
          setProducts(data.products.sort((prod1, prod2) => prod1.price > prod2.price ? 1 : -1))
          break
              
        case SORTING.EXPENSIVE:
          setProducts(data.products.sort((prod1, prod2) => prod1.price < prod2.price ? 1 : -1))
          break
    
        case SORTING.NEW:
          setProducts(data.products.sort((prod1, prod2) => prod1.isNew < prod2.isNew ? 1 : -1))
          break
    
        case SORTING.DISCOUNT:
          setProducts(data.products.sort((prod1, prod2) => prod1.isSale < prod2.isSale ? 1 : -1))
          break
    
        default:
          setProducts(data.products)
      }
    }
             
    return slisedCards = products.slice(firstIndex, lastIndex)
  }

  //рабочий фильтр через селект
  const filtering = (filterMethod) => {
    let filtered = []

    switch (filterMethod) {
      case CATEGORIES.ALL:    
        filtered = data.products
        break
  
      case CATEGORIES.MEN:
        filtered = products.filter(prod => prod.categories.includes('Men'))
        console.log(filtered)
        break
  
      case CATEGORIES.WOMEN:
        filtered = products.filter(prod => prod.categories.includes('Women'))
        break
  
      case CATEGORIES.ACC:
        filtered = products.filter(prod => prod.categories.includes('Accessories'))
        break
  
      case CATEGORIES.NEW:
        filtered = products.filter(prod => prod.isNew == 1)
        break

      default:
        filtered = data.products
    }
           
    slisedCards = filtered.slice(firstIndex, lastIndex)
    return filtered
  }

  //!! Добавить функцию обработки фильтра и сортировки
  const filterCards = () => { 
    let filtered = products 

    // if (filterAll && filterMethod == CATEGORIES.ALL) {
    //   filtered = data.products
    // }

    // if (filterAcc) {
    //   filtered = filtered.filter(prod => prod.categories.includes('Accessories'))
    // }

    // if (filterWomen) {
    //   filtered = filtered.filter(prod => prod.categories.includes('Women'))
    // }
    // else if (filterWomen && filterMethod == CATEGORIES.MEN) {
    //   filtered = products.filter(prod => prod.categories.includes('Men'))
    // }
    // else if (filterWomen && filterMethod == CATEGORIES.NEW) {
    //   filtered = products.filter(prod => prod.isNew == 1)
    // }
    // else filtered = data.products
    // console.log(filtered)

    if (filterAll || filterMen ||  filterWomen || filterAcc || filterNew) {
      if(filterAll) filtered = data.products
      else if(filterMen) filtered = data.products.filter(prod => prod.categories.includes('Men'))
      else if(filterWomen) filtered = data.products.filter(prod => prod.categories.includes('Women'))
      else if(filterAcc) filtered = data.products.filter(prod => prod.categories.includes('Accessories'))
      else if(filterNew) filtered = data.products.filter(prod => prod.isNew == 1)
      else filtered = data.products
    }
            
    slisedCards = filtered.slice(firstIndex, lastIndex)
    // setProducts(filtered)
    return filtered
  }

  const check = () => {
    let arr = data.products[2].categories
    // for (let i = 0; i < arr.length; i++) {
    //   // console.log(arr[i])
      
    //   if (arr[i] === 'Women') console.log('success', arr[i])
    // }
    // console.log(arr.length)
    // console.log('arr = ', arr)


    arr.forEach(elem => elem === 'Men' ? console.log('success', elem) : console.log('fail', elem) )

    const answer = data.products.filter((prod) => prod.categories.forEach(cat => cat === 'Men' ? true : false ))

    if (answer) {
      console.log('MEN exsists')
    }
  }

  const log = (sorted) => {
    sorted.forEach(sort => console.log('sorted:', sort))
  }

  useEffect(() => {
    setProducts(filterCards())
  }, [filterAll, filterMen, filterWomen, filterAcc, filterNew])


  const changeCurPage = (page) => {
    setCurPage(page)
  }

  const changeFilterMethod = (e) => {
    // setFilterMethod(e.target.value)
    // console.log(filterMethod)
    // e.target.value ? setFilterMethod(e.target.value) : setProducts(filterCards(filterMethod))
    
  }

  return(
      <section className='wrapper blocks'>
        <section className='products'>
          <div className='header'>
            <div className='amount'>
              <p>There are <span>{products.length}</span> products in this category</p>
              <p>FILTER METHOD: {filterMethod}</p>
            </div>

            <div className='sort'>
              <select value={sortMethod} className='select' onChange={e => setSortMethod(e.target.value)}>
                <option value={SORTING.RELEVANCE}>By relevance</option>
                <option value={SORTING.CHEAP}>From cheap to expensive</option>
                <option value={SORTING.EXPENSIVE}>From expensive to cheap</option>
                <option value={SORTING.NEW}>New products</option>
                <option value={SORTING.DISCOUNT}>Discount goods</option>
              </select>
            </div>

            {/* <div className='sort'> */}
              {/* <input type='checkbox' name='sortAll' value={filterMethod} className='select' onChange={e => setFilterMethod(e.target.value)}> */}
                <label> 
                  <input type='checkbox' name='sortAll' value={CATEGORIES.ALL} checked={filterAll} 
                    onChange={() => {
                      setFilterAll(!filterAll)
                      // setProducts(filterCards())
                    }} 
                  />
                  {CATEGORIES.ALL}
                </label>
                <label> 
                  <input type='checkbox' name='sortMen' value={CATEGORIES.MEN} checked={filterMen} 
                    onChange={(e) => {
                      setFilterMen(!filterMen)
                      // setProducts(filterCards())
                    }} 
                  />
                  {CATEGORIES.MEN}
                </label>
                <label> 
                  <input type='checkbox' name='sortWomen' value={CATEGORIES.WOMEN} checked={filterWomen} 
                    onChange={(e) => {
                      setFilterWomen(!filterWomen)
                      // setProducts(filterCards())                      
                    }}  
                  />
                  {CATEGORIES.WOMEN}
                </label>
                <label> 
                  <input type='checkbox' name='sortAcc' value={CATEGORIES.ACC} checked={filterAcc} 
                    onChange={(e) => {
                      setFilterAcc(!filterAcc)
                      // setProducts(filterCards())
                    }}  
                  />
                  {CATEGORIES.ACC}
                </label>
                <label> 
                  <input type='checkbox' name='sortNew' value={CATEGORIES.NEW} checked={filterNew} 
                  onChange={(e) => {
                    setFilterNew(!filterNew)
                    // setProducts(filterCards())
                  }} 
                  />
                  {CATEGORIES.NEW}
                </label>

                {/* <option value={CATEGORIES.MEN}>Men</option>
                <option value={CATEGORIES.WOMEN}>Women</option>
                <option value={CATEGORIES.ACC}>Accessories</option>
                <option value={CATEGORIES.NEW}>New Arrivals</option> */}
              {/* </input> */}
            {/* </div> */}
          </div>

          <div className='cards'>
            {
              products.length && slisedCards.map((product) => <Card key={product.id} product={product} /> )
            }
          </div>

          <Pagination totalPages={totalPages} changeCurPage={changeCurPage} curPage={curPage} />
        </section>
      </section>   
  )

}