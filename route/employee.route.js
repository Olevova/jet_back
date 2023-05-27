const Route = require('express');
const router = require('express').Router();
const {createEmployee, getEmployee, getJetSite} = require('../controlers/employee.controller');

router.post('/employee', createEmployee);
router.get('/employee', getEmployee);
router.get('/team', getJetSite);

module.exports = router