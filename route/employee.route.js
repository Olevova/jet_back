const Route = require('express');
const router = require('express').Router();
const UserController = require('../controlers/employee.controller');

router.post('/employee', UserController.createEmployee);
router.get('/employee',UserController.getEmployee);
router.get('/team', UserController.getJetSite);

module.exports = router