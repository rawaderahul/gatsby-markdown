import React from 'react'
import Layout from '../components/layout'

export const query = graphql`
query ($slug: String) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      frontmatter {
        title
        date
      }
      html
      headings {
        value
        depth
      }
    }
  }`


const Blog = (props) =>{
    
    return(
        <Layout> 
            <div>
                <div>
                    <h1>  { props.data.markdownRemark.frontmatter.title }  </h1>
                    <small> { props.data.markdownRemark.frontmatter.date } </small>
                </div>
                <div dangerouslySetInnerHTML={ {__html:props.data.markdownRemark.html} }>
                    
                </div>
        </div>
        </Layout>
       
    )
}
export default Blog;