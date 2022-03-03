import express from 'express'

import todosRoutes from './router/todos'

const app = express()

app.use(express.json())


app.listen(3001);