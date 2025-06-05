require('dotenv').config();
const express = require('express');
const app = express();
const instructionRoutes = require('./routes/instruction');

app.use(express.json());
app.use('/api/instruction', instructionRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`TIMAIMoodle server running on port ${PORT}`);
});
