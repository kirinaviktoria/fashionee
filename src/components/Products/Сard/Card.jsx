import { useEffect, useState } from 'react'
import './style.scss'
import { ReactComponent as Sale } from '../../../img/sale.svg'
import { ReactComponent as New } from '../../../img/new.svg'
import { ReactComponent as Like } from '../../../img/like.svg'
import { useContext } from 'react'
import { ProductsContext } from '../../../context/ProductsContext'

export default function Card({ product }) {
  const [like, setLike] = useState(false)
  const [add, setAdd] = useState(false)
  // const likedCards = []

  const { likedCards } = useContext(ProductsContext)
 

  //!!состояние не меняется сразу после клика
  const handleLikeClick = () => {
    setLike(!like);
    handleLikedCards(!like) 
  }

  //!!как удалить ненужный элемент из массива и как удалить его из localStorage
  const handleLikedCards = (like) => {
    if (like) likedCards.push(product)

    if(!localStorage.getItem('favourite')) localStorage.setItem('favourite', JSON.stringify(likedCards))
    localStorage.setItem('favourite', JSON.stringify(likedCards))

    console.log(likedCards)
    // console.log(like);
  }

  // useEffect(() => {
  //   if (like) likedCards.push(product)
  //   else likedCards.splice(product.id, 1)
  //   console.log(likedCards)
  //   console.log(like);

    // if (like) likedCards.push(product)
    // localStorage.setItem('favourite', JSON.stringify(likedCards))
    
    // console.log(likedCards)
  // }, [like])

  const addToCart = () => {
    setAdd(!add);
  }

  // useEffect (() =>{
  //   localStorage.setItem('favourite', JSON.stringify(product))
  // }, [like])

  return (
    <section className='card'>
      <div className='item-image'>

        <img className='image' src={product.image} alt="item" />

        {
          (product.isSale || product.isNew) && <div className='item-status'>
            {product.isSale && <Sale />}
            {product.isNew && <New />}
          </div>
        }

        <button onClick={() => handleLikeClick()} className='like'>
          {<Like className={`${like ? 'active': ''}`} />}
        </button>
      </div>

      <div className='card-info'>
        <p className='item-name'>
          {product.name}
        </p>


        <div className='card-bottom'>
          <div className='prices'>
            <p className='current-price'>${product.price}</p>
            {product.oldPrice && <p className='old-price'>${product.oldPrice}</p>}
          </div>
          <button onClick={() => addToCart()}  className={`addBtn ${add ? 'added' : ''}`}>{add ? '×' : '+'}</button>
        </div>
      </div>

    </section>
  )
}