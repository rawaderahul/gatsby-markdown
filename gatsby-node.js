const path = require('path')


module.exports.onCreateNode = ({ node, actions }) => {
  const { createNode, createNodeField } = actions
  // Transform the new node here and create a new node or
  // create a new node field.

  

  if(node.internal.type === 'MarkdownRemark')
  {
    const slug = path.basename(node.fileAbsolutePath, '.md');
    console.log(slug)
    createNodeField({
      node,
      name:'slug',
      value:slug
    })
  }
  

}


module.exports.createPages = async({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve('./src/templates/blog.js')
  const res = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  res.data.allMarkdownRemark.edges.forEach((item)=>{
    
    createPage({
      component:blogTemplate,
      path : `/blog/${item.node.fields.slug}`,
      context:{
        slug: item.node.fields.slug
      }
    })


    


  })

}
