import express from 'express'
import cors from 'cors'

import productRoutes from './routes/products.routes.js'

const app = express()
const port = 3030

/* Global middlewares */
app.use(cors())
app.use(express.json())

/* Routes */
app.use('/products', productRoutes)

/* Server setup */
if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => console.log(`⚡️[server]: Server is running at https://localhost:${port}`))
}

// Define a route for HTTP GET requests to the root URL ('/')
// This route sends a simple text response to the client
app.get('/', (req, res) => {
  res.send('RESTful API Demonstration with routes');  // Sends a static response
});

export default app