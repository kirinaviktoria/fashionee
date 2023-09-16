import React, { useContext }  from 'react'
import './style.css'
import './style.scss'
import { ProductsContext } from '../../context/ProductsContext';

export default function Header() {
  // const liked = 0;
  const selected = 0;
  const { state } = useContext(ProductsContext)

  return (
    <div className='wrapper'>
      <div className="header__block">
        <div className='header_right'>
          <section className="header_burger">
            <a href="#"><img src="/img/burger-menu.svg" alt="burger"/></a>
          </section>

          <section className="header_logo">
            <a href="#"><img src="/img/logo.svg" alt="logo" className='logo-img'/></a>
          </section>
          
          <nav className="header_nav">
            <li className="nav_elem maintext"> <a href="#">Home</a> </li>
            <li className="nav_elem maintext"> <a href="#">Pages</a></li>
            <li className="nav_elem maintext" > <a href="#">Shop</a></li>
            <li className="nav_elem maintext"> <a href="#">Blog</a> </li>
            <li className="nav_elem maintext"> <a href="#">Contact</a> </li>
          </nav>
        </div>

        <section className="header_icons">
          <a href="#"><img src="/img/search.svg" alt="search" className='icon-img'/></a>
          <a href="#"><img src="/img/user.svg" alt="user" className='icon-img'/></a>
          <section><img src="/img/heart.svg" alt="heart" className='icon-img'/><span>{state.amountLiked.length}</span></section>
          <section><img src="/img/shopping-bag.svg" alt="shopping-bag" className='icon-img'/><span className='align-bottom'>{selected}</span></section>
        </section>
      </div>
    </div>
  )
}