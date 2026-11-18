/**
 * Vercel Serverless Function: POST /api/lead
 * Forwards discovery form submissions to Telegram securely using env vars:
 *   - TELEGRAM_BOT_TOKEN
 *   - TELEGRAM_CHAT_ID
 */

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return res.status(500).json({ error: 'Telegram environment variables not configured' });
  }

  const { firstname = '', lastname = '', phone = '', company = '' } = req.body || {};

  if (!firstname.trim() || !phone.trim()) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const clean = (str) =>
    String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

  const now = new Date().toLocaleString('fr-BE', { timeZone: 'Europe/Brussels' });

  const message = [
    '<b>🚀 NOUVEAU LEAD WEBELY</b>',
    '',
    `<b>👤 Nom :</b> ${clean(firstname)} ${clean(lastname)}`,
    `<b>📱 GSM :</b> <a href="tel:${clean(phone.replace(/\s+/g, ''))}">${clean(phone)}</a>`,
    `<b>🏢 Entreprise :</b> ${clean(company || 'Non précisé')}`,
    `<b>🕒 Reçu le :</b> ${clean(now)}`,
  ].join('\n');

  try {
    const tgRes = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'HTML',
        disable_web_page_preview: true,
      }),
    });

    const tgData = await tgRes.json();

    if (!tgRes.ok || !tgData.ok) {
      return res.status(502).json({ error: 'Telegram API error', details: tgData.description });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    return res.status(500).json({ error: 'Failed to reach Telegram', details: err.message });
  }
}
