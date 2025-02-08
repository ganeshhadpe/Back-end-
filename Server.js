const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Mock data for companies
const companies = [
  { id: 1, name: 'TechCorp', price: 150 },
  { id: 2, name: 'Manufacture Inc.', price: 120 },
  { id: 3, name: 'Retailers LLC', price: 200 },
  { id: 4, name: 'OilMasters', price: 250 },
];

// Mock price data for price fluctuations
const priceData = {
  1: [150, 155, 153, 160, 165],
  2: [120, 125, 130, 128, 124],
  3: [200, 205, 198, 210, 215],
  4: [250, 255, 260, 258, 255],
};

// Route to get the list of companies
app.get('/api/stocks', (req, res) => {
  res.json(companies);
});

// Route to get price fluctuation data for a specific company
app.get('/api/price/:companyId', (req, res) => {
  const companyId = parseInt(req.params.companyId);
  const prices = priceData[companyId] || [];
  res.json(prices);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
