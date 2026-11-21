'use client';
import { useState } from 'react';

const initial = { name: '', phone: '', email: '', city: '', wood: '', quantity: '', message: '', website: '' };
export default function QuoteForm() {
  const [values, setValues] = useState(initial);
  const [status, setStatus] = useState('idle');
  const [feedback, setFeedback] = useState('');
  function update(event) { setValues(current => ({ ...current, [event.target.name]: event.target.value })); }
  async function submit(event) {
    event.preventDefault(); setStatus('sending'); setFeedback('');
    try {
      const response = await fetch('/api/quote', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(values) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Det gick inte att skicka din förfrågan.');
      setStatus('success'); setFeedback('Tack! Din förfrågan har skickats.'); setValues(initial);
    } catch (error) { setStatus('error'); setFeedback(error.message || 'Ett fel uppstod. Försök igen senare.'); }
  }
  return <form className="quote-form" onSubmit={submit}>
    <div className="form-heading"><span>01 / OFFERTFÖRFRÅGAN</span><p>Fyll i uppgifterna så kontaktar vi dig.</p></div>
    <div className="form-fields">
      <label>Namn *<input name="name" value={values.name} onChange={update} autoComplete="name" required maxLength={100} placeholder="Ditt namn" /></label>
      <label>Telefon *<input name="phone" type="tel" value={values.phone} onChange={update} autoComplete="tel" required maxLength={30} placeholder="Ditt telefonnummer" /></label>
      <label>E-post *<input name="email" type="email" value={values.email} onChange={update} autoComplete="email" required maxLength={254} placeholder="namn@exempel.se" /></label>
      <label>Ort<input name="city" value={values.city} onChange={update} autoComplete="address-level2" maxLength={100} placeholder="Din ort" /></label>
      <label>Vedtyp<select name="wood" value={values.wood} onChange={update}><option value="">Välj vedtyp</option><option>Björkved</option><option>Ekved</option><option>Blandved</option><option>Annat / osäker</option></select></label>
      <label>Mängd<select name="quantity" value={values.quantity} onChange={update}><option value="">Välj mängd</option><option>1 m³</option><option>2 m³</option><option>3 m³</option><option>4+ m³</option><option>Vill diskutera</option></select></label>
      <label className="field-wide">Meddelande<textarea name="message" value={values.message} onChange={update} rows={4} maxLength={2000} placeholder="Berätta gärna mer om vad du behöver…" /></label>
      <div className="honeypot" aria-hidden="true"><label>Lämna detta fält tomt<input name="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={update} /></label></div>
    </div>
    <button className="button button-primary form-submit" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Skickar…' : 'Skicka förfrågan'} <span aria-hidden="true">↗</span></button>
    <p className="form-privacy">* Obligatoriska fält. Dina uppgifter används för att besvara din förfrågan.</p>
    {feedback && <p className={`form-feedback ${status}`} role="status" aria-live="polite">{feedback}</p>}
  </form>;
}
