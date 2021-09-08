import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import client from '../client'

export async function getServerSideProps() {
  const res = await client.fetch(`
    *[_type == "post"]`, {})
  return {
    props: {
      res
    }
  }
}

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
          {props.res.map((post) => (
            <li className={utilStyles.listItem} key={post.slug.current}>
              <Link href={"/post/" + `${post.slug.current}`}>
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}