const express = require('express');
const router = express.Router();

// POST place order
router.post('/', (req, res) => {
  const { firstName, lastName, address } = req.body;

  // Validate input
  if (!firstName || !lastName || !address) {
    return res.status(400).json({ error: 'Missing required fields or empty cart' });
  }

  // Simulate order placement
  console.log('Order placed:');
  console.log('First Name:', firstName);
  console.log('Last Name:', lastName);
  console.log('Address:', address);

  res.json({ message: 'Order placed successfully' });
});

module.exports = router;
