export async function getSinglePost(slug) {
	return await fetch(process.env.WORDPRESS_GRAPHQL_ENDPOINT, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			query: `query SinglePost($id: ID!, $idType: PostIdType!) {
				post(id: $id, idType: $idType) {
					date
					slug
					title
					content
					featuredImage {
						node {
							sourceUrl
						}
					}
				}
			}`,
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
			query: `query PagesQuery {
        posts {
          nodes {
            slug
          }
        }
      }`
		})
	})
}

export async function getAllPosts() {
	return await fetch(process.env.WORDPRESS_GRAPHQL_ENDPOINT, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			query: `query IndexPageQuery {
        posts {
          nodes {
            slug
            title
            date
          }
        }
      }`
		})
	})
}