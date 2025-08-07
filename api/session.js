export default function handler(req, res) {
  const { userid } = req.query;

  if (!userid) {
    return res.status(400).json({ error: 'Missing userid in query' });
  }

  const baseUrl = "https://egbeyemi.vercel.app/session";
  const sessionLink = `${baseUrl}?ref=${userid}`;

  return res.status(200).json({
    message: "Session link generated",
    sessionLink: sessionLink
  });
    }
