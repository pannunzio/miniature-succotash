import Head from "next/head"
import Layout from "../../components/layout"
import { getPostPages, getSinglePost } from "../../lib/posts"
import utilStyles from '../../styles/utils.module.css'

export async function getStaticProps(context) {
	const res = await getSinglePost(context.params.slug)
	const jsonResult = await res.json()
	return {
		props: {
			postData: jsonResult.data.post,
		}
	}
}

export async function getStaticPaths() {
	const res = await getPostPages()
	const jsonResult = await res.json()
	const posts = jsonResult.data.posts.nodes
	const paths = posts.map((post) => ({
		params: { slug: post.slug }
	}))
	return {
		paths,
		fallback: false
	}
}

export default function Post({ postData }) {
	return <Layout>
		<Head>
			<title>{postData.title}</title>
		</Head>
		<h1 className={utilStyles.headingL}>
			{postData.title}
		</h1>
		<p>{postData.date}</p>
		<br />
		<div dangerouslySetInnerHTML={{ __html: postData.content }} />
	</Layout>
}