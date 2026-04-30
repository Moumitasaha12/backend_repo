const router = require('express').Router();
const db = require('../db');

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;
  try {
    await db.query(
      'INSERT INTO contact_messages (name, email, message) VALUES ($1,$2,$3)',
      [name, email, message]
    );
    res.json({ success: true });
  } catch (err) {
    console.error("DB ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
