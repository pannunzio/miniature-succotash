import Head from 'next/head'
import { useRouter } from 'next/router'
import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/locally-stored'

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
			<title>Locally saved {postData.title}</title>
		</Head>
		<br />
		<h1>Locally saved post: {postData.id}</h1>
		<br />
		{postData.date}
		<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
	</Layout>
}