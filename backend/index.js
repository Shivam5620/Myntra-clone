const express = require('express');
const bodyParser = require('body-parser');
const productsRouter = require('./routes/products');
const ordersRouter = require('./routes/orders');
const cors = require('cors')
const app = express();
 app.use(cors())
// Middleware
app.use(bodyParser.json());

// Routes
app.use('/products', productsRouter);
app.use('/api/orders', ordersRouter);

// Start server
const PORT =  5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
