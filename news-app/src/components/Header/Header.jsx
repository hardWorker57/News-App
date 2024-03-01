import React from 'react'
import { Link } from 'react-router-dom'
import s from './Header.module.scss'
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
      <div>
          <div className="container">
            <div className={s.nav}>
                <ul className={s.menu}>
                    <li><Link to="/" className={s.menu_list}>ITC-news</Link></li>
                    <li><Link to="#" className={s.menu_list}>International</Link></li>
                    <li><Link to="#" className={s.menu_list}>Sports</Link></li>
                    <li><Link to="#" className={s.menu_list}>Opinion</Link></li>
                    <li><Link to="#" className={s.menu_list}>Business</Link></li>
                    <li><Link to="#" className={s.menu_list}>Youth</Link></li>
                    <li><Link to="#" className={s.menu_list}>Entertainment</Link></li>
                    <li><Link to="#" className={s.menu_list}>Lifestyle</Link></li>
                    <li><Link to="#" className={s.menu_list}>Pages down</Link></li>
                </ul>
                <div className="search_bar">
                    <input type="search" name="" id="" placeholder='Search anything'/> <FaSearch />
                </div>
            </div>
          </div>
      </div>
  )
}

export default Header