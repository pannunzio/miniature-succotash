import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'


export async function getUserData() {

	const userDirectory = path.join(process.cwd(), 'data/user/user-mrn.md')
	const fileContents = fs.readFileSync(userDirectory, 'utf8')

	const parsedResult = matter(fileContents)
	const processedContent = await remark()
		.use(html)
		.process(parsedResult.content)
	const contentHtml = processedContent.toString()


	return {
		contentHtml,
		...parsedResult.data
	}
}
