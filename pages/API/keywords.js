// /pages/api/keywords.js

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const prompt = req.body.prompt;

  try {
    const response = await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'text-davinci-003',
        prompt: `Generate relevant keywords for: ${prompt}`,
        max_tokens: 100
      })
    });

    const data = await response.json();
    return res.status(200).json({ keywords: data.choices[0].text.trim() });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch from OpenAI' });
  }
}
