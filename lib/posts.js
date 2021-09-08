import { INDEX_PAGE_QUERY, PAGES_QUERY, SINGLE_POST } from "./queries"

export async function getSinglePost(slug) {
	return await fetch(process.env.WORDPRESS_GRAPHQL_ENDPOINT, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			query: SINGLE_POST,
			variables: {
				id: slug,
				idType: 'SLUG',
			}
		})
	})
}

export async function getPostPages() {
	return await fetch(process.env.WORDPRESS_GRAPHQL_ENDPOINT, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			query: PAGES_QUERY
		})
	})
}

export async function getAllPosts() {
	return await fetch(process.env.WORDPRESS_GRAPHQL_ENDPOINT, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			query: INDEX_PAGE_QUERY
		})
	})
}