import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import { getUserData } from '../lib/user'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  const user = getUserData()
  return {
    props: {
      allPostsData,
      user
    }
  }
}

// export async function getServerSideProps(context) {
//   return {
//     props: {
//       /**
//        * Because getServerSideProps is called at request time, its parameter (context) contains request specific parameters.
//        * 
//        * You should use getServerSideProps only if you need to pre-render a page whose data must be fetched at request time.
//        * Time to first byte (TTFB) will be slower than getStaticProps because the server must compute the result
//        * on every request, and the result cannot be cached by a CDN without extra configuration.
//        */
//     }
//   }
// }

export default function Home(props) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>{props.user.name}</p>
        <h1 className="title">
          Read{' '}
          <Link href="/posts/first-post">
            this page!
          </Link>
        </h1>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {props.allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}