import React from 'react'
import Layout from "../components/layout"
import Seo from "../components/seo"
import Product from '../layout/Products'

const product = () => {
  return (
    <Layout>
         <Seo title="Transwind Products" />
         <Product />
    </Layout>
  )
}

export default product