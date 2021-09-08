// client.js
import sanityClient from '@sanity/client'

export default sanityClient({
	projectId: '36eqh7tu', // you can find this in sanity.json
	dataset: 'blog-example', // or the name you chose in step 1
	useCdn: true // `false` if you want to ensure fresh data
})