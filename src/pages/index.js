import React from 'react'
import Layout from "../components/layout"
import Seo from "../components/seo"
import Home from '../layout/home'

const index = () => {
  return (
    <Layout>
    <Seo title="Transwind Home" />
    <Home />
    </Layout>
  )
}

export default index