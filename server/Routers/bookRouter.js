const Router = require('express')
const router = new Router()
const controller = require('../controllers/bookController')

router.post('/createBook', controller.createBook);
router.get('/getBooks', controller.getBooks);
router.post('/getBook', controller.getBook);
router.post('/deleteBook', controller.deleteBook);

module.exports = router
