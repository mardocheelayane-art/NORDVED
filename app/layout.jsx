
import './globals.css';
import { DM_Sans, Playfair_Display } from 'next/font/google';
import LoadingScreen from './components/LoadingScreen';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-dm-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  display: 'swap',
  variable: '--font-playfair',
});

export const metadata = {
  metadataBase: new URL('https://example.com'),
  title: 'NORDVED | Ved premium livrée chez vous',
  description:
    'Découvrez notre sélection de bois de chauffage : bouleau, chêne et bois sec. Contactez NORDVED pour demander un devis de livraison.',
  applicationName: 'NORDVED',
  icons: {
    icon: '/images/favicon.png',
  },
  openGraph: {
    title: 'NORDVED | Ved premium',
    description: 'Du bois de chauffage de qualité, avec un service fiable.',
    type: 'website',
    images: ['/images/hero.webp'],
    locale: 'sv_SE',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="sv">
      <body className={`${dmSans.variable} ${playfair.variable}`}>
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}
