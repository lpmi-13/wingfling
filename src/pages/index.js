import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout";
import MainEvent from '../components/image';
import leskis from '../images/leskis.jpeg';
import vic from '../images/soete.jpeg';
import Countdown from '../components/countdown';
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Let's wing the thing!" />
    <div style={{
      background: `#30c2c4`,
      width: `100vw`,
      height: `100vh`,
      overflow: ``,
    }}>
      <div style={{
        color: `#000`,
      }}>
        <span>There will be an election. There will be wings.</span>
        <Countdown date={'2020-11-03T00:00:00'} />
      </div>
      <div style={{
        display: `flex`,
        flexDirection: `row`,
        justifyContent: `space-around`
      }}>
        <img style={{
          width: `8em`,
          height: `8em`,
        }} src={leskis}/>
        <img style={{
          width: `8em`,
          height: `8em`,
        }}src={vic}/>
      </div>
    </div>
  </Layout>
)

export default IndexPage
