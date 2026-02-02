const express = require('express');
const router = express.Router();

router.get('/team', (req, res) => {
  const { team } = req.query.team;

  if (!team) {
    return res.status(400).json({ message: 'team query parameter is required' });
  }

  // Temporary mock data
  const data = [
    { agent: 'Alice', team: 'Support', ticketsResolved: 120, avgScore: 4.6 },
    { agent: 'Bob', team: 'Sales', ticketsResolved: 95, avgScore: 4.2 },
    { agent: 'Carol', team: 'Support', ticketsResolved: 110, avgScore: 4.4},
  ];

  res.json(data.filter(a => a.team === team));
});

module.exports = router;