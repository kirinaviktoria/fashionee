import React, { useReducer, useState } from 'react';
import data from '../../products.json'
import './style.scss'
import Card from './card/Card';
import Pagination from '../Pagination/Pagination';
import {ProductsContext} from '../../context/ProductsContext'
import { ACTIONS, reduser, initialState } from '../../redusers/reducer';

const PRODUCTS_PER_PAGE = 12

export default function Products() {
  const [curPage, setCurPage] = useState(1)
  // const [likedCards, setLikedCards] = useState(null)
  //
  const [state, dispatch] = useReducer(reduser, initialState)
  //

  const firstIndex = (curPage - 1) * PRODUCTS_PER_PAGE
  const lastIndex = firstIndex + PRODUCTS_PER_PAGE
  const totalPages = data.products.length / PRODUCTS_PER_PAGE;

  // Добавить функцию обработки фильтра и сортировки
  const slicedCards = data.products.slice(firstIndex, lastIndex)

  const changeCurPage = (page) => {
    setCurPage(page)
  }

  //заппомнить в массим избранные товары
  const setLikedCards = () => {
    
  }


  return(
    <ProductsContext.Provider value={{ dispatch, state }}> 
    
    <section className='wrapper blocks'>
      <section className='products'>
        <div className='header'>
          <div className='amount'>
            <p>There are <span>{data.products.length}</span> products in this category</p>
          </div>

          <div className='sort'>
            <select defaultValue={'relevance'} className='select'>
              <option value='relevance'>By relevance</option>
              <option value='cheap'>From cheap to expensive</option>
              <option value='expensive'>From expensive to cheap</option>
              <option value='new'>New products</option>
              <option value='discount'>Discount goods</option>
            </select>
          </div>
        </div>

        <div className='cards'>
          {
            data.products.length && slicedCards.map((product) => <Card key={product.id} product={product} />)
          }
        </div>

        <Pagination totalPages={totalPages} changeCurPage={changeCurPage} curPage={curPage}/>
      </section>
    </section>   
    </ProductsContext.Provider>
  )

}