import React, { useEffect, useState } from 'react';
// import data from '../../products.json'
import { FAVOURITES_KEY } from '../constants/localStorage';
import './style.scss'
import Card from './Сard/Card';
import Pagination from '../Pagination/Pagination';
import { ReactComponent as IconChecked } from '../../img/icon-check.svg';
import { ReactComponent as Search } from '../../img/search.svg';

const PRODUCTS_PER_PAGE = 9

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

export default function Products({ dataProducts }) {
  // const [products, setProducts] = useState(data.products)
  const [products, setProducts] = useState(dataProducts)
  const [sortMethod, setSortMethod] = useState(SORTING.RELEVANCE)
  const [filterAll, setFilterAll] = useState(true)
  const [filterMen, setFilterMen] = useState(false)
  const [filterWomen, setFilterWomen] = useState(false)
  const [filterAcc, setFilterAcc] = useState(false)
  const [filterNew, setFilterNew] = useState(false)
  const [colorBlack, setColorBlack] = useState(false)
  const [colorBlue, setColorBlue] = useState(false)
  const [colorRed, setColorRed] = useState(false)
  const [colorYellow, setColorYellow] = useState(false)
  const [colorGreen, setColorGreen] = useState(false)
  const [curPage, setCurPage] = useState(1)

  // const [like, setLike] = useState(0)
  
  // let likedCards = []

  const firstIndex = (curPage - 1) * PRODUCTS_PER_PAGE
  const lastIndex = firstIndex + PRODUCTS_PER_PAGE
  const totalPages = products.length / PRODUCTS_PER_PAGE;
  let slisedCards = products.slice(firstIndex, lastIndex)

  const filterCards = (sortMethod) => {
    let filtered = products
    let sorted = []

    if (filterAll || filterMen || filterWomen || filterAcc || filterNew || sortMethod) {
      if (filterMen) filtered = dataProducts.filter(prod => prod.categories.includes('Men'))
      else if (filterWomen) filtered = dataProducts.filter(prod => prod.categories.includes('Women'))
      else if (filterAcc) filtered = dataProducts.filter(prod => prod.categories.includes('Accessories'))
      else if (filterNew) filtered = dataProducts.filter(prod => prod.isNew)
      else if (filterAll) filtered = dataProducts
    }

    switch (sortMethod) {
      case SORTING.RELEVANCE:
        sorted = filtered.sort((prod1, prod2) => prod1.id > prod2.id ? 1 : -1)
        break

      case SORTING.CHEAP:
        sorted = filtered.sort((prod1, prod2) => prod1.price > prod2.price ? 1 : -1)
        break

      case SORTING.EXPENSIVE:
        sorted = filtered.sort((prod1, prod2) => prod1.price < prod2.price ? 1 : -1)
        break

      case SORTING.NEW:
        sorted = filtered.sort((prod1, prod2) => prod1.isNew < prod2.isNew ? 1 : -1)
        break

      case SORTING.DISCOUNT:
        sorted = filtered.sort((prod1, prod2) => prod1.isSale < prod2.isSale ? 1 : -1)
        break

      default:
        sorted = filtered
    }

    slisedCards = sorted.slice(firstIndex, lastIndex)

    return sorted
  }


  useEffect(() => {
    setProducts(filterCards(sortMethod))
  }, [filterAll, filterMen, filterWomen, filterAcc, filterNew, sortMethod])

  const changeCurPage = (page) => {
    setCurPage(page)
  }

  const [likedCards, setLikedCards] = useState([])

  //функция добавления/удаления избранных товаров в LS
  const toggleFavourite = (toggleProduct) => {
    // setLike(!like)
    //получаем товары из localStorage на данный момент
    const likedInLS = localStorage.getItem(FAVOURITES_KEY)
    
    //если localStorage пустой, вносим текущий товар
    if (!likedInLS) {
      setLikedCards([toggleProduct])
      // likedCards.push([toggleProduct])
      localStorage.setItem(FAVOURITES_KEY, JSON.stringify([toggleProduct]))
      return
    }

    //парсим полученный localStorage
    const liked = JSON.parse(likedInLS) 
    //находим текущий товар в localStorage
    const inLS = liked.find((product) => product.id === toggleProduct.id)

    //если текущий товар найден
    if (inLS) {
      //delete from LS
      const filteredLiked = liked.filter((product) => product.id !== toggleProduct.id)
      setLikedCards(filteredLiked)
      // likedCards = filteredLiked
      localStorage.setItem(FAVOURITES_KEY, JSON.stringify(filteredLiked))
      return
    }

    //если текущий товар не найден
    //add to LS
    liked.push(toggleProduct)
    setLikedCards(liked)
    // likedCards = liked
    localStorage.setItem(FAVOURITES_KEY, JSON.stringify(liked))
  }


  useEffect(() => {
    //получаем товары из localStorage на данный момент
    const likedInLS = localStorage.getItem(FAVOURITES_KEY)

    if(likedInLS) {
      const likedProducts = JSON.parse(likedInLS)
      setLikedCards(likedProducts.map((prod) => prod.id))
      // likedCards = likedProducts.map((prod) => prod.id)
      console.log('likedProducts: ', likedProducts)
    }

    console.log('likedCards: ', likedCards) 
    // console.log(likedCards.includes(2))   
  }, [])

  return (
    <section className='wrapper blocks'>
      <section className='sidebar'>
        <div className="sidebar-block search">
          <input type="text" className='search' placeholder='Search' />
          <span className='icon-send'> <Search /> </span>
        </div>

        <div className="sidebar-block categories">
          <h3>Categories</h3>
          <div className="content">
            <p className={`filterCat ${filterAll && 'active'}`}
              value={CATEGORIES.ALL}
              onClick={() => {
                setFilterAll(!filterAll)
                setFilterMen(false)
                setFilterWomen(false)
                setFilterAcc(false)
                setFilterNew(false)
              }}
            >
            {CATEGORIES.ALL}
            </p>

            <p className={`filterCat ${filterMen && 'active'}`} 
              value={CATEGORIES.MEN}
              onClick={() => {
                setFilterMen(!filterMen)
                setFilterAll(false)
                setFilterWomen(false)
                setFilterAcc(false)
                setFilterNew(false)
              }}
            >
            {CATEGORIES.MEN}
            </p>

            <p className={`filterCat ${filterWomen && 'active'}`}  
              value={CATEGORIES.WOMEN}
              onClick={() => {
                setFilterWomen(!filterWomen)
                setFilterMen(false)
                setFilterAll(false)
                setFilterAcc(false)
                setFilterNew(false)
              }}
            >
            {CATEGORIES.WOMEN}
            </p>

            <p className={`filterCat ${filterAcc && 'active'}`}  
              value={CATEGORIES.ACC}
              onClick={() => {
                setFilterAcc(!filterAcc)
                setFilterMen(false)
                setFilterWomen(false)
                setFilterAll(false)
                setFilterNew(false)
              }}
            >
            {CATEGORIES.ACC}
            </p>

            <p className={`filterCat ${filterNew && 'active'}`}  
              value={CATEGORIES.NEW}
              onClick={() => {
                setFilterNew(!filterNew)
                setFilterMen(false)
                setFilterWomen(false)
                setFilterAcc(false)
                setFilterAll(false)
              }}
            >
            {CATEGORIES.NEW}
            </p>
          </div>       
        </div>

        <div className="sidebar-block price">
          <h3>Price</h3>
          <div className="content">

          </div>
        </div>

        {/* !!! Скорректировать цвета на акутальные */}
        <div className="sidebar-block colors">
          <h3>Colors</h3>

          <div className="content">
            
            <div className={`color-block black ${colorBlack && 'checked'}`} 
              value={colorBlack}
              onClick={() => {
                setColorBlack(!colorBlack)
              }}
            >
              <div className='square'>
              {colorBlack && <IconChecked />}
              </div>
              <p>Black</p>
            </div>

            <div className={`color-block blue ${colorBlue && 'checked'}`} 
              value={colorBlue}
              onClick={() => {
                setColorBlue(!colorBlue)
              }}
            >
              <div className='square'>
              {colorBlue && <IconChecked />}
              </div>
              <p>Blue</p>
            </div>

            <div className={`color-block red ${colorRed && 'checked'}`} 
              value={colorRed}
              onClick={() => {
                setColorRed(!colorRed)
              }}
            >
              <div className='square'>
              {colorRed && <IconChecked />}
              </div>
              <p>Red</p>
            </div>

            <div className={`color-block yellow ${colorYellow && 'checked'}`} 
              value={colorYellow}
              onClick={() => {
                setColorYellow(!colorYellow)
              }}
            >
              <div className='square'>
              {colorYellow && <IconChecked />}
              </div>
              <p>Yellow</p>
            </div>

            <div className={`color-block green ${colorGreen && 'checked'}`} 
              value={colorGreen}
              onClick={() => {
                setColorGreen(!colorGreen)
              }}
            >
              <div className='square'>
              {colorGreen && <IconChecked />}
              </div>
              <p>Green</p>
            </div>
          </div>
        </div>

        <div className='sidebar-block btn-block'>
          <button className='button'>
            Apply Filter
          </button>
          <div className='btn-after'/>
        </div>

        <div className="sidebar-block reviewed">
          <h3>Reviewed By You</h3>

        </div>

        <div className="sidebar-block sale-banner">
          <div className='sale-inner'>
            <div className='header'>
              <p className='header-first'>
                SEASON
              </p>
              SALE
            </div>

            <p className='sale-content'>
              Non aliqua reprehenderit
              reprehenderit culpa
              laboris nulla
            </p>
            <p className='target'>Shop Now</p>

          </div>
        </div>

      </section>

      <section className='products'>
        <div className='header'>
          <div className='amount'>
            <p>There are <span>{products.length}</span> products in this category</p>
            <p>SORT METHOD: {sortMethod}</p>
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


        </div>

        <div className='cards'>
          {
            products.length && slisedCards.map((product) => (
              <Card 
                key={product.id} 
                product={product} 
                toggleFavourite={toggleFavourite}
                inFavourites={likedCards.includes(product.id)}
                // like={like}
              />
            ))
          }
        </div>

        <Pagination totalPages={totalPages} changeCurPage={changeCurPage} curPage={curPage} />
      </section>
    </section>
  )

}