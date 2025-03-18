// @desc   Set goal
// @route  POST /api/goals
// @access Pravate

const setGoal = (req, res) => {
    console.log(req.body);
    res.status(200).json({message: "Set goal"});
};


// @desc   Get goals
// @route  GET /api/goals
// @access Pravate

const getGoals = (req, res) => {
    res.status(200).json({message: "Get goals"});
};


// @desc   Update goal
// @route  PUT /api/goals/:id
// @access Pravate

const updateGoal = (req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`});
};


// @desc   Delete goal
// @route  DELETE /api/goals/:id
// @access Pravate

const deleteGoal = (req, res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`});
};

module.exports = {
    setGoal,
    getGoals,
    updateGoal,
    deleteGoal
};