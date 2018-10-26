import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <h1>Hello, My name is Aaron</h1>
    <p>I just graduated from Lambda School and I think Gatsby is great! </p>
    <p>Here is a site I build using it <a href="https://www.escmattresscenter.com/">E.S.C Mattress Center</a></p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
