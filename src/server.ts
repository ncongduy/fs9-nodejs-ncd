import Express, { Request, Response } from './express'

const app = new Express()

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('hello')
})

app.post('/', (req: Request, res: Response) => {
  const body = req.body
  res.status(200).send('post request')
})

app.listen(3000)
