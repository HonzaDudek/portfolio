import { NextApiRequest, NextApiResponse } from 'next';
import sendgrid from '@sendgrid/mail';

const RECIPIENT = 'honza@honzadudek.cz';

const HTML_ENTITIES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};

const escapeHtml = (value: unknown): string =>
  String(value ?? '').replace(/[&<>"']/g, (char) => HTML_ENTITIES[char]);

const sendEmail = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.SENDGRID_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'SENDGRID_API_KEY is not configured' });
  }
  sendgrid.setApiKey(apiKey);

  const { fullname, email, subject, message } = req.body ?? {};
  if (!email || !message) {
    return res.status(400).json({ error: 'Missing email or message' });
  }

  try {
    await sendgrid.send({
      to: RECIPIENT,
      from: RECIPIENT, // must be a verified sender in SendGrid
      replyTo: String(email),
      subject: String(subject || 'Poptávka z webu honzadudek.cz'),
      html: `<!DOCTYPE html>
<html lang="cs">
  <head><meta charset="utf-8"><title>Poptávka ze serveru honzadudek.cz</title></head>
  <body style="font-family: helvetica, sans-serif; margin: 20px;">
    <h3>Nová poptávka od ${escapeHtml(fullname)} (${escapeHtml(email)})</h3>
    <p>Zpráva:</p>
    <p style="font-size: 16px; white-space: pre-wrap;">${escapeHtml(message)}</p>
  </body>
</html>`,
    });
  } catch (error) {
    return res.status(error.code || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: '' });
};

export default sendEmail;
