import React, { useContext }  from 'react'
import { ProductsContext } from '../../context/ProductsContext';
import './style.scss'
// import '../constants/global.scss'

export default function Header() {
  // const liked = 0;
  const selected = 0;
  const { state } = useContext(ProductsContext)

  return (
    <div className='wrapper'>
      <div className="header__block">
        <div className='header_right'>
          <section className="header_burger">
            <img src="/img/burger-menu.svg" alt="burger"/>
          </section>

          <section className="header_logo">
            <img src="/img/logo.svg" alt="logo" className='logo-img'/>
          </section>
          
          <nav className="header_nav">
            <li className="nav_elem maintext">Home</li>
            <li className="nav_elem maintext">Pages</li>
            <li className="nav_elem maintext" >Shop</li>
            <li className="nav_elem maintext">Blog</li>
            <li className="nav_elem maintext">Contact</li>
          </nav>
        </div>

        <section className="header_icons">
          <img src="/img/search.svg" alt="search" className='icon-img'/>
          <img src="/img/user.svg" alt="user" className='icon-img'/>
          <section><img src="/img/heart.svg" alt="heart" className='icon-img'/><span>{state.amountLiked.length}</span></section>
          <section><img src="/img/shopping-bag.svg" alt="shopping-bag" className='icon-img'/><span className='align-bottom'>{selected}</span></section>
        </section>
      </div>
    </div>
  )
}