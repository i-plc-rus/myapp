const { updateUserBalance } = require('../services/userService');

async function updateBalance(req, res) {
  const { userId, amount } = req.body;

  try {
    const user = await updateUserBalance(userId, amount);
    res.json(user);
  } catch (error) {
    if (error.message === 'Insufficient balance') {
      res.status(400).json({ error: error.message });
    } else {
      res.status(404).json({ error: error.message });
    }
  }
}

module.exports = { updateBalance };
