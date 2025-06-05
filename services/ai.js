const axios = require('axios');

async function processInstruction(instruction) {
  const provider = process.env.AI_PROVIDER || 'openai';

  const messages = [
    { role: 'system', content: 'You are a Moodle course designer assistant.' },
    { role: 'user', content: instruction }
  ];

  if (provider === 'openai') {
    const response = await axios.post(
      process.env.OPENAI_API_URL,
      { model: 'gpt-4', messages },
      { headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` } }
    );
    return response.data.choices[0].message.content;
  } else if (provider === 'azure') {
    const response = await axios.post(
      process.env.AZURE_API_URL,
      { messages },
      {
        headers: {
          'api-key': process.env.AZURE_API_KEY,
          'Content-Type': 'application/json'
        }
      }
    );
    return response.data.choices[0].message.content;
  } else {
    throw new Error('Unsupported AI provider');
  }
}

module.exports = { processInstruction };
