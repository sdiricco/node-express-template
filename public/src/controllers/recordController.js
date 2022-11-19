// In src/controllers/workoutController.js
const recordService = require("../services/recordService");

const getRecordForWorkout = (req, res) => {
  try {
    const {
        params: { workoutId },
      } = req;
    const record = recordService.getRecordForWorkout(workoutId);
    res.send({ status: "OK", data: record });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};


module.exports = {
    getRecordForWorkout
};