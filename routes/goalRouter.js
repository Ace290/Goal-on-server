const router = require('express').Router()
const {
    getAllGoals,
    getSingleGoal,
    createGoal,
    updateGoal,
    deleteGoal,
} = require("../controller/goalController");

// router.get('/', getAllGoals)
// router.post('/', createGoal)

router.route('/').get(getAllGoals).post(createGoal);

// router.get('/:goalId', getSingleGoal)
// router.patch('/:goalId', updateGoal);
// router.delete('/:goalId', deleteGoal);

router.route('/:goalId').get(getSingleGoal).patch(updateGoal).delete(deleteGoal)

module.exports = router 