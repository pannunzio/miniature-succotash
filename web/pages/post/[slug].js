import client from '../../client'
import Layout from '../../components/layout'

export async function getServerSideProps(context) {
	const { slug = "" } = context.query
	const res = await client.fetch(`
    *[_type == "post" && slug.current == $slug][0]
  `, { slug })
	return {
		props: {
			body: res.body,
			slug: res.slug,
			title: res.title
		}
	}
}

export default function Post(props) {
	return (
		<Layout>
			<article>
				<h1>props: {props.title}</h1>
				<h4>slug: {props.slug.current}</h4>
				<p>{props.body[0].children[0].text}</p>
			</article>
		</Layout>
	)
}

// export async function getStaticPaths(context) {
// 	const slug = context.query || ""
// 	const paths = client.fetch(`
//     *[_type == "post" && slug.current == $slug]
//   `, { slug })
// 	return {
// 		paths: paths,
// 		fallback: false,
// 	};
// }