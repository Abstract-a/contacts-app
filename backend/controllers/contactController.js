//@desc Get all contacts
//@route GET /api/contacts
//access public

const getContacts = (req, res) => {
  res.json({ message: 'get all contacts' });
};
//@desc Get one contact
//@route GET /api/contacts/:id
//access public

const getContact = (req, res) => {
  res.json({ message: `get contact for ${req.params.id}` });
};

//@desc create one contact
//@route POST /api/contacts/:id
//access public

const postContact = (req, res) => {
  console.log(req.body);
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    throw new Error('All fields are required');
  }
  res.json({ message: 'create contact' });
};

//@desc update one contact
//@route PUT /api/contacts/:id
//access public

const putContact = (req, res) => {
  res.json({ message: `update contact for ${req.params.id}` });
};
//@desc delete one contact
//@route DELETE /api/contacts/:id
//access public

const deleteContact = (req, res) => {
  res.json({ message: `delete contact for ${req.params.id}` });
};

module.exports = {
  getContacts,
  getContact,
  postContact,
  putContact,
  deleteContact,
};
