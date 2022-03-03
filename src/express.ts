import http from 'http';

export class Request {
	body: {};

	constructor() {
		this.body = {};
	}
}

export class Response {
	statusCode: number;
	message: string;

	constructor() {
		this.statusCode = 200;
		this.message = '';
	}

	status(statusNumber: number) {
		this.statusCode = statusNumber;
		return this;
	}

	send(messageStr: string) {
		this.message = messageStr;
		return this;
	}
}

export default class Express {
	// your code goes here
	request: {
		path: string;
		method: string;
		status: number;
		message: string;
	}[];

	constructor() {
		this.request = [];
	}

	get(path: string, handler: (req: Request, res: Response) => void) {
		const request = new Request();
		const response = new Response();
		handler(request, response);

		const newData = {
			path,
			method: 'GET',
			status: response.statusCode,
			message: response.message,
		};

		this.request = [...this.request, newData];
	}

	post(path: string, handler: (req: Request, res: Response) => void) {
		const request = new Request();
		const response = new Response();
		handler(request, response);

		const newData = {
			path,
			method: 'POST',
			status: response.statusCode,
			message: response.message,
		};

		this.request = [...this.request, newData];
	}

	listen(port: number) {
		const server = http.createServer((req, res) => {
			const method = req.method;
			const url = req.url;

			const router = this.request.find(
				(rq) => rq.path === url && rq.method === method
			);

			if (typeof router === 'object') {
				res.statusCode = router.status;
				res.end(router.message);
			} else {
				res.end('Do not have match route.');
			}
		});

		server.listen(port);
	}
}
