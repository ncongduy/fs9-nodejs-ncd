import Express, { Request, Response } from './express';

const app = new Express();

app.get('/', (req: Request, res: Response) => {
	res.status(200).send('hello');
});

app.get('/user', (req: Request, res: Response) => {
	res.status(200).send('hello user');
});

app.post('/', (req: Request, res: Response) => {
	const body = req.body;
	res.status(200).send('post request');
});

app.post('/user', (req: Request, res: Response) => {
	const body = req.body;
	res.status(200).send('post request user');
});

app.listen(3000);
