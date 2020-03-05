import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import headerStyle from './header.module.scss'


const Header = () =>{

    const data = useStaticQuery(graphql`
    query{
        site {
          siteMetadata {
            title
          }
        }
      }
    `)

    return(
        
        <header> { console.log(data) }
            <h2> {data.site.siteMetadata.title}  </h2>
            <ul>
                <li> <Link activeClassName="active" className={headerStyle.link} to='/'> Home </Link> </li>
                <li> <Link activeClassName="active"  to='/about'> About </Link> </li>
                <li> <Link activeClassName="active"  to='/blog'> Blog </Link> </li>
                <li> <Link activeClassName="active" to='/contact'> Contact </Link> </li>
            </ul>
        </header>
    )
}
export default Header;