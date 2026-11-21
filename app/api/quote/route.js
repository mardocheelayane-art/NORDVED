import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
const clean = (value, max) => typeof value === 'string' ? value.trim().slice(0, max) : '';
export async function POST(request) {
  let body;
  try { body = await request.json(); } catch { return NextResponse.json({ error: 'Ogiltig förfrågan.' }, { status: 400 }); }
  // Honeypot: answer as if successful without forwarding spam.
  if (clean(body.website, 200)) return NextResponse.json({ ok: true });
  const name = clean(body.name, 100), phone = clean(body.phone, 30), email = clean(body.email, 254);
  const city = clean(body.city, 100), wood = clean(body.wood, 80), quantity = clean(body.quantity, 40), message = clean(body.message, 2000);
  if (!name || !phone || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return NextResponse.json({ error: 'Kontrollera namn, telefonnummer och e-postadress.' }, { status: 400 });
  const { RESEND_API_KEY, CONTACT_EMAIL, RESEND_FROM_EMAIL } = process.env;
  if (!RESEND_API_KEY || !CONTACT_EMAIL || !RESEND_FROM_EMAIL) return NextResponse.json({ error: 'Formuläret är ännu inte aktiverat. Kontakta webbplatsägaren eller försök igen senare.' }, { status: 503 });
  const text = [`Ny offertförfrågan från NORDVED`, `Namn: ${name}`, `Telefon: ${phone}`, `E-post: ${email}`, `Ort: ${city || 'Ej angiven'}`, `Vedtyp: ${wood || 'Ej angiven'}`, `Mängd: ${quantity || 'Ej angiven'}`, '', 'Meddelande:', message || 'Inget meddelande'].join('\n');
  try {
    const response = await fetch('https://api.resend.com/emails', { method: 'POST', headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' }, body: JSON.stringify({ from: RESEND_FROM_EMAIL, to: [CONTACT_EMAIL], reply_to: email, subject: `Offertförfrågan – ${name}`, text }) });
    if (!response.ok) return NextResponse.json({ error: 'Meddelandet kunde inte skickas just nu. Försök igen senare.' }, { status: 502 });
    return NextResponse.json({ ok: true });
  } catch { return NextResponse.json({ error: 'Tjänsten är tillfälligt otillgänglig. Försök igen senare.' }, { status: 502 }); }
}
