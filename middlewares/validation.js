const { body, validationResult } = require('express-validator');

const validateUpdateBalance = [
  body('userId').isInt().withMessage('User ID must be an integer'),
  body('amount').isInt().withMessage('Amount must be an integer'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = { validateUpdateBalance };
