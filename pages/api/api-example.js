//req is an instance of http.IncomingMessage
//res is an instance of http.ServerResponse

export default function handler(req, res) {
	switch (req.method) {
		case 'PUT':
			res.status(200).json({ text: 'PUT response' });
			break;
		case 'GET':
			res.status(200).json({ text: 'GET response: Hello World' });
			break;
		default:
			res.setHeader('Allow', ['GET', 'PUT']);
			res.status(405).end(`Method ${req.method} Not Allowed`);
			break;
	}
}
