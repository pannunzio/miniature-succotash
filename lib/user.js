import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const userDirectory = path.join(process.cwd(), 'user/user-mrn.md')

export function getUserData() {

	const fileContents = fs.readFileSync(userDirectory, 'utf8')
	const matterResult = matter(fileContents)
	return {
		...matterResult.data
	}
}
