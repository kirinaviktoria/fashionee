import { useState } from 'react'
import './style.scss'
import { ReactComponent as Sale } from '../../../img/sale.svg'
import { ReactComponent as New } from '../../../img/new.svg'
import { ReactComponent as Like} from '../../../img/like.svg'
import { ReactComponent as Liked} from '../../../img/liked.svg'


export default function Card({product}) {
  const [like, setLike] = useState(false)

  const handleClick = () => {
    setLike(!like);
  }

  return (
    <section className='card'>
      <div className='item-image'>

          <img className='image' src={ product.image } alt="item"/>

        {
          (product.isSale || product.isNew) && <div className='item-status'>
          { product.isSale && <Sale/>}

          { product.isNew && <New/>}
        </div>
        }

        <button onClick={() => handleClick() } className='like'>
          { !like && <Like/> }         
          { like && <Liked/> }
        </button>
      </div>

      <div className='card-info'>
        <p className='item-name'>
          {product.name}
        </p>

        <div className='prices'>
          <p className='current-price'>${product.price}</p>
          { product.oldPrice && <p className='old-price'>${ product.oldPrice }</p> }
        </div>
      </div>
      
    </section>
  )
}