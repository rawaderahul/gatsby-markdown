import React from 'react'

import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'

const BlogPage = () =>{
    const data = useStaticQuery(graphql`
    query{
        allMarkdownRemark {
          edges {
            
            node {
              id
              frontmatter {
                title
                date
              }
              fields {
                slug
              }       
              
            }
          }
        }
      }
    `)
    return(
        
        <Layout>
            
            
            {console.log(data.allMarkdownRemark.edges)}
            <div>
                {/* <h1> {data.markdownRemark.frontmatter.title} </h1>
                <small> Date : {data.markdownRemark.frontmatter.date} </small>
            </div>
            <div>
                     {data.markdownRemark.html} */} 
                     <h1> Blog </h1>
                     <ol>
                         {data.allMarkdownRemark.edges.map((item)=>{
                             return(
                                 <li key={item.id}>
                                    <Link to={`/blog/${item.node.fields.slug}`}> 
                                        <h3>
                                        {item.node.frontmatter.title}
                                        </h3>
                                    </Link> 
                                    <div> Created Date:-  {item.node.frontmatter.date} </div>
                                 </li>
                             )
                         })}
                     </ol>
            </div>
        </Layout>
    )
}
export default BlogPage;