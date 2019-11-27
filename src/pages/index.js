import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout";
import MainEvent from '../components/image';
import Countdown from '../components/countdown';
import SEO from "../components/seo";
import style from './style.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Let's wing the thing!" />
    <div className={style.content}>
      <div className={style.imageOverlay}>
        <span>There will be an election. There will be wings.</span>
        <Countdown date={'2020-11-24T00:00:00'} />
      </div>
      <div className={style.throwdown}>
        <MainEvent />
      </div>
    </div>
  </Layout>
)

export default IndexPage
