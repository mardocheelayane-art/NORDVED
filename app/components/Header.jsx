'use client';
import { useState } from 'react';
import Image from 'next/image';

const links = [['Produkter', '#produkter'], ['Om oss', '#om-oss'], ['Kontakt', '#offert']];
export default function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="container header-inner"><a className="brand" href="#hem" aria-label="NORDVED – startsida" onClick={() => setOpen(false)}><Image src="/images/logo.png" alt="" width={74} height={52} priority /><span><strong>NORDVED</strong><small>VÄRME DU KAN LITA PÅ</small></span></a><button className="menu-button" type="button" aria-label={open ? 'Stäng menyn' : 'Öppna menyn'} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}><span /><span /></button><nav id="main-navigation" className={`navigation ${open ? 'is-open' : ''}`} aria-label="Huvudmeny">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}<a className="nav-cta" href="#offert" onClick={() => setOpen(false)}>Begär offert <span>↗</span></a></nav></div></header>;
}
