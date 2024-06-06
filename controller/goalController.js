const GOAL = require('../models/goals')


const getAllGoals = async(req, res) => {
    try {
        const goals = await GOAL.find().sort("-createdAt")
        res.status(200).json({ success: true, numOfGoals: goals.length, goals})
    } catch (error) {
        console.log(error);
    }
};

const getSingleGoal = async (req, res) => {
    const { goalId } = req.params;
  try {
    const goal = await GOAL.findById({ _id: goalId});
    res.status(200).json({ success: true, goal});
  } catch (error) {
    console.log(error);
  }
};

const createGoal = async (req, res) => {
    // console.log(req.body);
    const { title, description} = req.body
    if(!title || !description) {
        return res.status(400).json({ message: "Please Provide all fields"})
    }
  try {
    const goal = await GOAL.create(req.body)
    res.status(201).json({ success: true, goal })
  } catch (error) {
    console.log(error);
  }
};

const updateGoal = async (req, res) => {
    const { goalId } = req.params;
  try {
    const goal = await GOAL.findByIdAndUpdate({ _id: goalId}, req.body, {runValidators:  true, new: true
    });
    res.status(200).json({ success: true, goal})
  } catch (error) {
    console.log(error);
  }
  
};


const deleteGoal = async (req, res) => {
  const { goalId } = req.params;
  await GOAL.findByIdAndDelete({ _id: goalId})
  res.status(200).json({ success: true, message: "Goal deleted"})
};


module.exports = {
    getAllGoals,
    getSingleGoal,
    createGoal,
    updateGoal,
    deleteGoal,
}