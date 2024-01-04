const express = require('express');
const router = express.Router();

router.route('/').get((req, res) => {
  res.json({ message: 'get all contacts' });
});

router.route('/:id').get((req, res) => {
  res.json({ message: `get contact for ${req.params.id}` });
});

router.route('/').post((req, res) => {
  res.json({ message: 'create contact' });
});

router.route('/:id').put((req, res) => {
  res.json({ message: `update contact for ${req.params.id}` });
});

router.route('/:id').delete((req, res) => {
  res.json({ message: `delete contact ${req.params.id}` });
});

module.exports = router;