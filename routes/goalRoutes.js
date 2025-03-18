const express = require("express");
const router = express.Router();
const {setGoal, getGoals, updateGoal, deleteGoal} = require('../controllers/goalController');

router.post('/', setGoal);

router.get('/', getGoals);

router.put('/:id', updateGoal);

router.delete('/:id', deleteGoal);

module.exports = router;