const { User } = require('../models');

async function updateUserBalance(userId, amount) {
  const user = await User.findOne({ where: { userId } });
  if (!user) throw new Error('User not found');

  const newBalance = user.balance + amount;
  if (newBalance < 0) throw new Error('Negative balance');

  await user.update({ balance: newBalance });
  return user;
}

module.exports = { updateUserBalance };
