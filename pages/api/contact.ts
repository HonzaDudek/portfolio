import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const RECIPIENT = 'honza@honzadudek.cz';
// Resend's shared sender only delivers to the Resend account owner's address.
// After verifying honzadudek.cz in Resend, set RESEND_FROM to e.g. "Web <web@honzadudek.cz>".
const DEFAULT_FROM = 'Web honzadudek.cz <onboarding@resend.dev>';

// Turns user-supplied text into something safe to drop inside the HTML email body.
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

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'RESEND_API_KEY is not configured' });
  }

  const { fullname, email, subject, message } = req.body ?? {};
  if (!email || !message) {
    return res.status(400).json({ error: 'Missing email or message' });
  }

  // Resend returns errors instead of throwing them
  const { error } = await new Resend(apiKey).emails.send({
    from: process.env.RESEND_FROM || DEFAULT_FROM,
    to: RECIPIENT,
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

  if (error) {
    // eslint-disable-next-line no-console
    console.error('Resend error', error);
    return res.status(502).json({ error: 'Email could not be sent' });
  }

  return res.status(200).json({ error: '' });
};

export default sendEmail;
