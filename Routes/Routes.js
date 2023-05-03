const express = require('express')
const controllers = require('../Controllers/Controllers')

const router = express.Router()






router.get('/add-data' , controllers.addData )
router.get('/get-data' , controllers.getData )



module.exports = router



