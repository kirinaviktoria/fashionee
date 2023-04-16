import React, {useContext} from 'react';
import data from '../../products.json'
import './style.scss'
import Card from './card/Card';
import ProductsContext from '../../context/ProductsContext';


export default function Products() {
  //const { products } = useContext(ProductsContext)

  return(
    <section className='products wrapper'>
      <div className='header'>
        <div className='amount'>
          <p>There are <span>{data.products.length}</span> products in this category</p>
        </div>

        <div className='sort'>
          <select className='select'>
            <option selected value='relevance'>By relevance</option>
            <option value='cheap'>From cheap to expensive</option>
            <option value='expensive'>From expensive to cheap</option>
            <option value='new'>New products</option>
            <option value='discount'>Discount goods</option>
          </select>
        </div>
      </div>

      <div className='cards'>
       {data.products.length && data.products.map((product) => <Card key={product.id} product={product}/>)
       } 
      </div>


    </section>
  )

}