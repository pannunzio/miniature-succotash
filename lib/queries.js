export const PAGES_QUERY = `query PagesQuery {
	posts {
		nodes {
			slug
		}
	}
}`

export const SINGLE_POST = `query SinglePost($id: ID!, $idType: PostIdType!) {
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
}`

export const INDEX_PAGE_QUERY = `query IndexPageQuery {
	posts {
		nodes {
			slug
			title
			date
		}
	}
}`