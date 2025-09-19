const express = require("express");
const app = express();

app.use(express.json());

// POST /fibnocci
app.post("/fibnocci", (req, res) => {
  const { n } = req.body;

  if (!Number.isInteger(n) || n < 0) {
    return res.status(400).json({ message: "n must be a non-negative integer" });
  }

  // compute nth Fibonacci number
  let a = 0, b = 1;
  if (n === 0) return res.json({ message: 0 });
  if (n === 1) return res.json({ message: 1 });

  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }

  res.json({ message: b });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
