//req is an instance of http.IncomingMessage
//res is an instance of http.ServerResponse

export default function handler(req, res) {
	if (req.method === 'POST') {
		// Process a POST request
	} else {
		// Handle any other HTTP method
		res.status(200).json({ text: 'Hello' })

	}
}
