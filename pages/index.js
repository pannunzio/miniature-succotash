import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    }
  }
}

/**
 * export async function getServerSideProps(context) {
    return {
      props: {

        Because getServerSideProps is called at request time, its parameter (context) contains request specific parameters.

        You should use getServerSideProps only if you need to pre-render a page whose data must be fetched at request time.
        Time to first byte (TTFB) will be slower than getStaticProps because the server must compute the result
        on every request, and the result cannot be cached by a CDN without extra configuration.
      }
    }
  }
 */

export default function Home(props) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <h1 className="title">
          PAGE TITLE
        </h1>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {props.allPostsData.map(({ id, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={"/posts/" + `${id}`}>
              {title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}