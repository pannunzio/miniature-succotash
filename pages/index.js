import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import { getAllPosts } from '../lib/posts'
import utilStyles from '../styles/utils.module.css'

export async function getStaticProps() {
  const res = await getAllPosts()
  const jsonResult = await res.json()
  return {
    props: {
      allPostsData: jsonResult.data.posts,
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

          {props.allPostsData.nodes.map(
            (post) => (
              <li className={utilStyles.listItem} key={post.slug}>
                <Link href={"/posts/" + `${post.slug}`}>
                  {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}