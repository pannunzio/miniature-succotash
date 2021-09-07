import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'


const postsDirectory = path.join(process.cwd(), 'data/posts')

export function getSortedPostsData() {
	// Get file names under /posts
	const fileNames = fs.readdirSync(postsDirectory)

	const allPostsData = fileNames.map(fileName => {
		const id = fileName.replace(/\.md$/, '')
		const fullPath = path.join(postsDirectory, fileName)
		const fileContents = fs.readFileSync(fullPath, 'utf8')
		const parsedResult = matter(fileContents)

		return {
			id,
			...parsedResult.data
		}
	})
	return allPostsData.sort(({ date: a }, { date: b }) => {
		if (a < b) {
			return 1
		} else if (a > b) {
			return -1
		} else {
			return 0
		}
	})
}

export function getAllPostIds() {
	const fileNames = fs.readdirSync(postsDirectory)
	return fileNames.map(fileName => {
		return {
			params: {
				id: fileName.replace(/\.md$/, '')
			}
		}
	})
}

export async function getPostData(id) {
	const fullPath = path.join(postsDirectory, `${id}.md`)
	const fileContents = fs.readFileSync(fullPath, 'utf8')

	const parsedResult = matter(fileContents)
	const processedContent = await remark()
		.use(html)
		.process(parsedResult.content)
	const contentHtml = processedContent.toString()


	return {
		id,
		contentHtml,
		...parsedResult.data
	}
}

