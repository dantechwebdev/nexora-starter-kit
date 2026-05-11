export const runtime = 'nodejs';

export default function handler(req, res) {
  const { searchParams } = new URL(req.url, `http://${req.headers.host}`);
  const title = searchParams.get('title') || 'Nexora';

  const svg = `
  <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="#0f172a"/>
    <text
      x="50%"
      y="50%"
      font-size="64"
      fill="white"
      text-anchor="middle"
      font-family="Arial, sans-serif"
    >
      ${title}
    </text>
  </svg>
  `;

  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
  res.status(200).send(svg);
}
