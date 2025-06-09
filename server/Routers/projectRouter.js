const Router = require('express')
const router = new Router()
const controller = require('../controllers/projectController')
const { check } = require("express-validator")

router.post('/getProjects', controller.getProjects);
router.post('/getProject', controller.getProject);
router.post('/createProject', controller.createProject);
router.post('/saveProject', controller.saveProject);
router.post('/downloadProject', controller.downloadProject);

module.exports = router
