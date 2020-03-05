import React from 'react'
import { Link , graphql, useStaticQuery } from 'gatsby'

const Footer = () =>{
    const data = useStaticQuery(graphql`
    query{
        site {
          siteMetadata {
            author
          }
        }
      }
    `)
    return(
        <div>
           
            <h3> Footer </h3>
            <div> <strong> Created By {data.site.siteMetadata.author}   </strong> </div>
        </div>
    )
}
export default Footer;