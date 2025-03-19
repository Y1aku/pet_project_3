const asyncHandler = require('express-async-handler');

const Goal = require('../models/goalModel');

// @desc   Set goal
// @route  POST /api/goals
// @access Pravate

const setGoal = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400);
        throw new Error('Please add a text field');
    }
    res.status(200).json({message: "Set goal"});
});


// @desc   Get goals
// @route  GET /api/goals
// @access Pravate

const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find()
    res.status(200).json(goals);
});


// @desc   Update goal
// @route  PUT /api/goals/:id
// @access Pravate

const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`});
});


// @desc   Delete goal
// @route  DELETE /api/goals/:id
// @access Pravate

const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`});
});

module.exports = {
    setGoal,
    getGoals,
    updateGoal,
    deleteGoal
};