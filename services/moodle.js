const axios = require('axios');

async function createCourseInMoodle(planText) {
  // This is a simplified example. You should parse the text to structured JSON.
  const courseData = {
    courses: [
      {
        fullname: "Generated Course",
        shortname: "GEN101",
        categoryid: 1,
        summary: planText,
        format: "topics"
      }
    ]
  };

  const url = `${process.env.MOODLE_URL}/webservice/rest/server.php`;
  const params = {
    wstoken: process.env.MOODLE_WS_TOKEN,
    wsfunction: 'core_course_create_courses',
    moodlewsrestformat: process.env.MOODLE_WS_FORMAT,
  };

  const response = await axios.post(url, new URLSearchParams({ ...params, ...courseData }));
  return response.data;
}

module.exports = { createCourseInMoodle };
