export default function handler(req, res) {
  if (req.method === 'POST') {
    const { phone } = req.body;

    if (!phone) {
      return res.status(400).json({ error: 'Phone number is required' });
    }

    // Dummy session generation
    const sessionId = `session_${Math.floor(Math.random() * 100000)}`;

    res.status(200).json({
      phone,
      sessionId,
      message: 'Session generated successfully',
    });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
