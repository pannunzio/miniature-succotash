import Head from 'next/head'
import Layout from '/components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Custom404() {
	return <Layout>
		<Head>
			<title>500</title>
		</Head>
		<section className={utilStyles.headingMd}>
			<h1 className="title">
				500 - Server-side error occurred
			</h1>
		</section>
	</Layout>
}