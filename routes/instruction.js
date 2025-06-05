const express = require('express');
const router = express.Router();
const { processInstruction } = require('../services/ai');
const { createCourseInMoodle } = require('../services/moodle');

router.post('/', async (req, res) => {
  try {
    const instruction = req.body.instruction;
    const plan = await processInstruction(instruction);
    const moodleResponse = await createCourseInMoodle(plan);
    res.json({ success: true, plan, moodleResponse });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
