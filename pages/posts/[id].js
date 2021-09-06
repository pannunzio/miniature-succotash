import Head from 'next/head'
import { useRouter } from 'next/router'
import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'

export async function getStaticProps({ params }) {
	const postData = await getPostData(params.id)
	return {
		props: {
			postData
		}
	}
}

export function getStaticPaths() {
	const paths = getAllPostIds()
	return {
		paths,
		fallback: false
	}
}

export default function Post({ postData }) {
	const router = useRouter()
	if (router.isFallback) {
		return <div>LOADING...</div>
	}
	return <Layout>
		<Head>
			<title>{postData.title}</title>
		</Head>
		<br />
		{postData.id}
		<br />
		{postData.date}
		{/* dangerouslySetInnerHTML is for doing something risky on purpose - (might) exposes your HTML to XSS attacks */}
		<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
	</Layout>
}