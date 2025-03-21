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

    const goal = await Goal.create({
        text: req.body.text
    });

    res.status(200).json(goal);
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
    const goal = await Goal.findById(req.params.id);

    if (!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true});

    res.status(200).json(updatedGoal);
});


// @desc   Delete goal
// @route  DELETE /api/goals/:id
// @access Pravate

const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);

    if (!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }

    await goal.deleteOne();
    res.status(200).json({id: req.params.id});
});

module.exports = {
    setGoal,
    getGoals,
    updateGoal,
    deleteGoal
};