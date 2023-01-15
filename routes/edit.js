const express = require('express')
const router = express.Router()
const editController = require('../controllers/edit')

router.get('/', editController.getEdit) // get the edit page with the item id that we want to edit
router.get('', editController.deleteItem) // deletes the item
router.post('', editController.updateItem) // updates the item using data passed in from the form

module.exports = router