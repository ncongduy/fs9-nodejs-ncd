import http from 'http';

type Handler = (req: Request, res: Response) => void;

type Body = {
	[key: string]: any;
};

export class Request {
	body: Body;

	constructor(body: Body) {
		this.body = body;
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
		handler: Handler;
	}[];

	constructor() {
		this.request = [];
	}

	get(path: string, handler: Handler) {
		const newData = {
			path,
			method: 'GET',
			handler,
		};

		this.request = [...this.request, newData];
	}

	post(path: string, handler: Handler) {
		const newData = {
			path,
			method: 'POST',
			handler,
		};

		this.request = [...this.request, newData];
	}

	listen(port: number) {
		const server = http.createServer(async (req, res) => {
			// read data from request
			const buffers = [];
			for await (const chunk of req) {
				buffers.push(chunk);
			}
			const data = Buffer.concat(buffers).toString();
			const body = JSON.parse(data);

			// handle when user send a request
			const method = req.method;
			const url = req.url;

			const router = this.request.find(
				(rq) => rq.path === url && rq.method === method
			);

			if (typeof router === 'object') {
				const request = new Request(body);
				const response = new Response();
				router.handler(request, response);

				res.statusCode = response.statusCode;
				res.end(response.message);
			} else {
				res.end('Unrecognized method.');
			}
		});

		server.listen(port);
	}
}
