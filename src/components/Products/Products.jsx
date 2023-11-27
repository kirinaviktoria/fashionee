import React, { useEffect, useState } from 'react';
// import data from '../../products.json'
import { FAVOURITES_KEY } from '../constants/localStorage';
import './style.scss'
import Card from './Сard/Card';
import Pagination from '../Pagination/Pagination';
import { SORTING } from '../constants/localStorage';
import { ReactComponent as IconChecked } from '../../img/icon-check.svg';
import { ReactComponent as Search } from '../../img/search.svg';

const PRODUCTS_PER_PAGE = 9

const CATEGORIES = {
  ALL: 'All',
  MEN: 'Men',
  WOMEN: 'Women',
  ACC: 'Accessories',
  NEW: 'New Arrivals'
}

export default function Products({ dataProducts }) {
  const [products, setProducts] = useState(dataProducts)
  const [sortMethod, setSortMethod] = useState(SORTING.RELEVANCE)
  const [filterMethod, setFilterMethod] = useState(CATEGORIES.ALL)

  const [colorBlack, setColorBlack] = useState(false)
  const [colorBlue, setColorBlue] = useState(false)
  const [colorRed, setColorRed] = useState(false)
  const [colorYellow, setColorYellow] = useState(false)
  const [colorGreen, setColorGreen] = useState(false)
  const [curPage, setCurPage] = useState(1)

  const [active, setActive] = useState(false)

  // const [likedCards, setLikedCards] = useState([])
  const [productsInLS, setProductsInLS] = useState([])

  const [categoriesArr, setCategoriesArr] = useState([])

  // const [like, setLike] = useState(0)
  
  // let likedCards = []

  // useEffect(() => {
  //   let newArr = []

  //   newArr = dataProducts.map(item => {
  //    return item.categories
  //   })

  //   newArr = newArr.flat(2).sort().map(item => {return item !== item + 1 ? item : ''})

  //   setCategoriesArr(newArr)
  // }, [])

  // generateCategories(dataProducts)
  // console.log('categoriesArr:', categoriesArr);

  const firstIndex = (curPage - 1) * PRODUCTS_PER_PAGE
  const lastIndex = firstIndex + PRODUCTS_PER_PAGE
  const totalPages = products.length / PRODUCTS_PER_PAGE;
  let slisedCards = products.slice(firstIndex, lastIndex)

  const sortProducts = (sortMethod) => {
    let sorted = [...products]

    switch (sortMethod) {
      case SORTING.RELEVANCE:
        sorted.sort((prod1, prod2) => prod1.id > prod2.id ? 1 : -1)
        break

      case SORTING.CHEAP:
        sorted.sort((prod1, prod2) => prod1.price > prod2.price ? 1 : -1)
        break

      case SORTING.EXPENSIVE:
        sorted.sort((prod1, prod2) => prod1.price < prod2.price ? 1 : -1)
        break

      case SORTING.NEW:
        sorted.sort((prod1, prod2) => prod1.isNew < prod2.isNew ? 1 : -1)
        break

      case SORTING.DISCOUNT:
        sorted.sort((prod1, prod2) => prod1.isSale < prod2.isSale ? 1 : -1)
        break

      default:
        return sorted
    }

    slisedCards = sorted.slice(firstIndex, lastIndex)
    return sorted
  }


  const filterProducts = (filterMethod) => {
    let filtered = [...products]

    if (filterMethod === 'All') {
      filtered = dataProducts
    } 
    else if (filterMethod === 'New Arrivals') {
      filtered = dataProducts.filter(prod => prod.isNew === true)
    }
    else {
      filtered = dataProducts.filter(prod => prod.categories.includes(filterMethod));
    }
  
      // switch (filterMethod) {
      //   case CATEGORIES.ALL:
      //     filtered = dataProducts
      //     break

      //   case CATEGORIES.MEN:
      //     filtered = dataProducts.filter(prod => prod.categories.includes(filterMethod));
      //     break

      //   case CATEGORIES.WOMEN:
      //     filtered = dataProducts.filter(prod => prod.categories.includes('Women'))
      //     break 

      //   case CATEGORIES.ACC:
      //     filtered = dataProducts.filter(prod => prod.categories.includes('Accessories'))
      //     break 

      //   case CATEGORIES.NEW:
      //     filtered = dataProducts.filter(prod => prod.isNew === true)
      //     break  
      // }

      slisedCards = filtered.slice(firstIndex, lastIndex)
      return filtered
  }

  const onSortChange = (method) => {
    setSortMethod(method)
    setProducts(sortProducts(method))
  }

  const onFilterChange = (method) => {
    setFilterMethod(method)
    setProducts(filterProducts(method))
  }

  const changeCurPage = (page) => {
    setCurPage(page)
  }

  //функция добавления/удаления избранных товаров в LS
  const toggleFavourite = (toggleProduct) => {
    //получаем товары из localStorage на данный момент
    const likedInLS = localStorage.getItem(FAVOURITES_KEY)
    
    //если localStorage пустой, вносим текущий товар
    if (!likedInLS) {
              //тут я пыталась добавить в LS все данные о продукте, тогда кнопка лайка не обновлялась сразу, а только после обновления страницы
              // setProductsInLS([toggleProduct])
      setProductsInLS([toggleProduct.id])
              //тут я пыталась добавить в LS все данные о продукте, тогда кнопка лайка не обновлялась сразу, а только после обновления страницы
              // localStorage.setItem(FAVOURITES_KEY, JSON.stringify([toggleProduct]))
      localStorage.setItem(FAVOURITES_KEY, JSON.stringify([toggleProduct.id]))
      return
    }

    //парсим полученный localStorage
    const liked = JSON.parse(likedInLS) 
    //находим текущий товар в localStorage
        //тут я пыталась добавить в LS все данные о продукте, тогда кнопка лайка не обновлялась сразу, а только после обновления страницы
        // const inLS = liked.find((product) => product.id === toggleProduct.id) 
    const inLS = liked.find((id) => id === toggleProduct.id)

    //если текущий товар найден
    if (inLS) {
      //delete from LS
          //тут я пыталась добавить в LS все данные о продукте, тогда кнопка лайка не обновлялась сразу, а только после обновления страницы
          // const filteredLiked = liked.filter((product) => product.id !== toggleProduct.id)
      const filteredLiked = liked.filter((id) => id !== toggleProduct.id)
      setProductsInLS(filteredLiked)
      localStorage.setItem(FAVOURITES_KEY, JSON.stringify(filteredLiked))
      return
    }

    //если текущий товар не найден
    //add to LS
        //тут я пыталась добавить в LS все данные о продукте, тогда кнопка лайка не обновлялась сразу, а только после обновления страницы
        // liked.push(toggleProduct)
    liked.push(toggleProduct.id)
    setProductsInLS(liked)
    localStorage.setItem(FAVOURITES_KEY, JSON.stringify(liked))
  }

  //эффект для отслеживания избранных товаров для отображения лайков на карточках
  useEffect(() => {
    //получаем товары из localStorage на данный момент
    const likedInLS = localStorage.getItem(FAVOURITES_KEY)

    if(likedInLS) {
      const likedProducts = JSON.parse(likedInLS)
          //тут я пыталась добавить в LS все данные о продукте, тогда кнопка лайка не обновлялась сразу, а только после обновления страницы
          // setProductsInLS(likedProducts.map((prod) => prod.id))
      setProductsInLS(likedProducts.map((id) => id))
    }
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
            <button className={`filterCat ${filterMethod === CATEGORIES.ALL && 'active'}`}
              value={CATEGORIES.ALL}
              onClick={(e) => onFilterChange(e.target.value)}
            >
            {CATEGORIES.ALL}
            </button>

            <button className={`filterCat ${filterMethod === CATEGORIES.MEN && 'active'}`} 
              value={CATEGORIES.MEN}
              onClick={(e) => onFilterChange(e.target.value)}
            >
            {CATEGORIES.MEN}
            </button>

            <button className={`filterCat ${filterMethod === CATEGORIES.WOMEN && 'active'}`}  
              value={CATEGORIES.WOMEN}
              onClick={(e) => onFilterChange(e.target.value)}
            >
            {CATEGORIES.WOMEN}
            </button>

            <button className={`filterCat ${filterMethod === CATEGORIES.ACC && 'active'}`}  
              value={CATEGORIES.ACC}
              onClick={(e) => onFilterChange(e.target.value)}
            >
            {CATEGORIES.ACC}
            </button>

            <button className={`filterCat ${filterMethod === CATEGORIES.NEW && 'active'}`}  
              value={CATEGORIES.NEW}
              onClick={(e) => onFilterChange(e.target.value)}
            >
            {CATEGORIES.NEW}
            </button>
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
            {/* <p>SORT METHOD: {sortMethod}</p>
            <p>FILTER METHOD: {filterMethod}</p> */}
          </div>

          <div className='sort'>
            <select value={sortMethod} className='select' onChange={e => onSortChange(e.target.value)}>
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
                inFavourites={productsInLS.includes(product.id)}
              />
            ))
          }
        </div>

        <Pagination totalPages={totalPages} changeCurPage={changeCurPage} curPage={curPage} />
      </section>
    </section>
  )

}