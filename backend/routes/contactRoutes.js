const express = require('express');
const router = express.Router();
const {
  getContacts,
  getContact,
  postContact,
  putContact,
  deleteContact,
} = require('../controllers/contactController');

router.route('/').get(getContacts);

router.route('/').post(postContact);

router.route('/:id').get(getContact);

router.route('/:id').put(putContact);

router.route('/:id').delete(deleteContact);

module.exports = router;
