export default async function handler(req, res) {
  if (req.method === "POST") {
    const { phone } = req.body;

    // Generate a fake session ID (replace this with real logic later)
    const sessionId = `session_${Math.random().toString(36).substring(2, 10)}`;

    return res.status(200).json({ sessionId });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
