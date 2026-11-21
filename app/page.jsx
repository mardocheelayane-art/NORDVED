
import Image from 'next/image';
import Header from './components/Header';
import QuoteForm from './components/QuoteForm';

const products = [
  {
    name: 'Björkved',
    tag: 'Bouleau',
    image: '/images/bois-bouleau.webp',
    alt: 'Bois de bouleau soigneusement empilé',
    text: 'Björkved avsedd för dig som uppskattar en behaglig brasa. Kontakta oss för information om tillgängliga format och leverans.',
  },
  {
    name: 'Ekved',
    tag: 'Chêne',
    image: '/images/bois-chene.webp',
    alt: 'Bûches de chêne prêtes à être livrées',
    text: 'Ekved med tät struktur och lång brinntid. Fråga oss om olika försäljningsformat och aktuella priser.',
  },
  {
    name: 'Torr ved',
    tag: 'Bois sec',
    image: '/images/bois-sec.webp',
    alt: 'Bois de chauffage sec',
    text: 'Torr ved för en smidig och behaglig eldning. Vi erbjuder flera format för olika behov. Kontakta oss för mer information.',
  },
];

const benefits = [
  [
    '01',
    'Personlig service',
    'Vi hjälper dig att välja ved och mängd utifrån dina önskemål.',
  ],
  [
    '02',
    'Fokus på kvalitet',
    'Vi sätter kvalitet och tydlig information i centrum för varje förfrågan.',
  ],
  [
    '03',
    'Leverans enligt överenskommelse',
    'Kontakta oss för att kontrollera leveransområde och tillgängliga tider.',
  ],
];

const promises = [
  {
    number: '01',
    title: 'Personlig service',
    text: 'Vi hjälper dig att hitta rätt ved utifrån ditt hem och dina behov.',
  },
  {
    number: '02',
    title: 'Kvalitet i fokus',
    text: 'Vi erbjuder ved med tydlig information om träslag, kvalitet och tillgänglighet.',
  },
  {
    number: '03',
    title: 'En enkel kontakt',
    text: 'Kontakta oss för frågor, prisuppgifter och information om leverans.',
  },
];

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* HERO */}
        <section className="hero" id="hem" aria-labelledby="hero-title">
          <Image
            src="/images/hero.webp"
            alt="Skogsmiljö i varmt morgonljus"
            fill
            priority
            sizes="100vw"
            className="hero-image"
          />

          <div className="hero-shade" />

          <div className="container hero-content">
            <p className="eyebrow eyebrow-light">
              NORDVED · VÄRME DU KAN LITA PÅ
            </p>

            <h1 id="hero-title">
              Rätt ved.
              <br />
              <em>Rätt värme.</em>
            </h1>

            <p className="hero-lead">
              Kvalitetsved för hemmet – med personlig service från första
              kontakt till leverans.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#produkter">
                Upptäck vårt sortiment{' '}
                <span aria-hidden="true">↗</span>
              </a>

              <a className="button button-ghost" href="#offert">
                Begär offert
              </a>
            </div>

            <div className="hero-note">
              <span className="note-line" />
              Ved för hem och företag
            </div>
          </div>

          <a
            className="scroll-cue"
            href="#produkter"
            aria-label="Scrolla till produkter"
          >
            SCROLLA <span>↓</span>
          </a>
        </section>

        {/* INTRO */}
        <section
          className="intro section-pad"
          aria-labelledby="intro-title"
        >
          <div className="container intro-grid">
            <div>
              <p className="eyebrow">VÄLKOMMEN TILL NORDVED</p>

              <h2 id="intro-title">
                En enklare väg till <em>skön värme.</em>
              </h2>
            </div>

            <div className="intro-copy">
              <p>
                Vi erbjuder ved för dig som uppskattar värmen från en riktig
                brasa. Utforska sortimentet och berätta vad du behöver – så
                hjälper vi dig vidare.
              </p>

              <a className="text-link" href="#om-oss">
                Lär känna NORDVED <span>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* PRODUCTS */}
        <section
          className="products section-pad"
          id="produkter"
          aria-labelledby="products-title"
        >
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">VÅRT SORTIMENT</p>

                <h2 id="products-title">
                  Ved för varje <em>eldstad.</em>
                </h2>
              </div>

              <p>
                Välj din vedtyp och kontakta oss för information om
                tillgänglighet, volym och leverans.
              </p>
            </div>

            <div className="product-grid">
              {products.map((product, index) => (
                <article
                  className="product-card"
                  key={product.name}
                >
                  <div className="product-image">
                    <Image
                      src={product.image}
                      alt={product.alt}
                      fill
                      sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 33vw"
                    />

                    <span className="product-number">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="product-info">
                    <p className="product-tag">{product.tag}</p>

                    <h3>{product.name}</h3>

                    <p>{product.text}</p>

                    <a href="#offert" className="text-link">
                      Fråga om produkten <span>↗</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section
          className="about section-pad"
          id="om-oss"
          aria-labelledby="about-title"
        >
          <div className="container about-grid">
            <div className="about-photo">
              <Image
                src="/images/about.webp"
                alt="Ved och natur – NORDVEDs verksamhetsområde"
                fill
                sizes="(max-width: 800px) 100vw, 50vw"
              />
            </div>

            <div className="about-copy">
              <p className="eyebrow eyebrow-light">OM NORDVED</p>

              <h2 id="about-title">
                Kvalitet börjar med <em>omtanke.</em>
              </h2>

              <p>
                NORDVED vill göra det enkelt att hitta ved som passar ditt
                hem eller din verksamhet. Vi tror på tydlig kommunikation,
                ett personligt bemötande och kvalitet i varje steg.
              </p>

              <p>
                Har du frågor om träslag, mängd eller leverans? Hör av dig
                – vi hjälper dig gärna.
              </p>

              <a href="#offert" className="button button-light">
                Prata med oss <span>↗</span>
              </a>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section
          className="benefits section-pad"
          aria-labelledby="benefits-title"
        >
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">DÄRFÖR NORDVED</p>

                <h2 id="benefits-title">
                  Det ska kännas <em>enkelt.</em>
                </h2>
              </div>

              <p>
                En trygg upplevelse handlar om mer än själva veden. Vi vill
                att det ska vara enkelt att få svar och komma vidare.
              </p>
            </div>

            <div className="benefit-grid">
              {benefits.map(([number, title, text]) => (
                <article className="benefit" key={number}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* OUR PROMISE */}
        <section
          className="testimonials section-pad"
          id="lofte"
          aria-labelledby="promise-title"
        >
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">VARFÖR VÄLJA NORDVED</p>

                <h2 id="promise-title">
                  Vårt löfte <em>till dig.</em>
                </h2>
              </div>

              <p>
                Vi vill göra det enkelt och tryggt att köpa ved.
                Därför sätter vi personlig service och tydlig information
                i fokus.
              </p>
            </div>

            <div className="testimonial-grid">
              {promises.map((promise) => (
                <article
                  className="testimonial-card"
                  key={promise.number}
                >
                  <span className="product-number">
                    {promise.number}
                  </span>

                  <h3>{promise.title}</h3>

                  <p>{promise.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section
          className="gallery section-pad"
          id="galleri"
          aria-labelledby="gallery-title"
        >
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">NÄRA NATUREN</p>

                <h2 id="gallery-title">
                  En känsla av <em>värme.</em>
                </h2>
              </div>

              <p>
                En glimt av materialet och miljön bakom NORDVED.
              </p>
            </div>

            <div className="gallery-grid">
              <div className="gallery-large">
                <Image
                  src="/images/bois-bouleau.webp"
                  alt="Björkved i närbild"
                  fill
                  sizes="(max-width: 700px) 100vw, 60vw"
                />
              </div>

              <div>
                <Image
                  src="/images/bois-chene.webp"
                  alt="Vedträn av ek"
                  fill
                  sizes="(max-width: 700px) 100vw, 35vw"
                />
              </div>

              <div>
                <Image
                  src="/images/forest.webp"
                  alt="Grön skog"
                  fill
                  sizes="(max-width: 700px) 100vw, 35vw"
                />
              </div>
            </div>

            <div className="gallery-video-placeholder">
              <span aria-hidden="true">▶</span>

              <strong>Videor kommer snart</strong>

              <p>
                Här kommer NORDVEDs videor att visas när materialet har
                levererats.
              </p>
            </div>
          </div>
        </section>

        {/* LOCATION */}
        <section
          className="location section-pad"
          id="plats"
          aria-labelledby="location-title"
        >
          <div className="container location-grid">
            <div className="location-info">
              <p className="eyebrow">HITTA OSS</p>

              <h2 id="location-title">
                Vi finns <em>här.</em>
              </h2>

              <p>
                NORDVEDs adress och karta kommer att läggas till när vi har
                fått företagets exakta platsuppgifter.
              </p>
            </div>

            <div className="location-placeholder">
              <span aria-hidden="true">⌖</span>

              <strong>Vår plats kommer snart</strong>

              <p>
                Företagets adress och karta publiceras här när uppgifterna
                har bekräftats.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT / QUOTE */}
        <section
          className="quote section-pad"
          id="offert"
          aria-labelledby="quote-title"
        >
          <div className="container quote-grid">
            <div className="quote-copy">
              <p className="eyebrow eyebrow-light">KONTAKTA OSS</p>

              <h2 id="quote-title">
                Redo för en <em>varmare</em> vardag?
              </h2>

              <p>
                Berätta vilken ved du söker och vart den ska levereras.
                Skicka en förfrågan så återkommer vi.
              </p>

              <div className="contact-detail">
                <span className="detail-icon">✳</span>

                <div>
                  <strong>Personlig offert</strong>
                  <span>Vi återkommer så snart vi kan.</span>
                </div>
              </div>

              <div className="contact-pending">
                Telefonnummer och WhatsApp kommer att läggas till när
                företagets kontaktuppgifter har bekräftats.
              </div>
            </div>

            <QuoteForm />
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-main">
          <a href="#hem" className="footer-brand">
            <Image
              src="/images/logo.png"
              alt="NORDVED"
              width={112}
              height={75}
            />

            <span>VÄRME DU KAN LITA PÅ</span>
          </a>

          <div>
            <p className="footer-label">UTFORSKA</p>

            <a href="#produkter">Produkter</a>
            <a href="#om-oss">Om oss</a>
            <a href="#lofte">Vårt löfte</a>
            <a href="#galleri">Galleri</a>
            <a href="#plats">Hitta oss</a>
            <a href="#offert">Begär offert</a>
          </div>

          <div>
            <p className="footer-label">KONTAKT</p>

            <p>
              För frågor om sortiment och leverans, skicka en
              offertförfrågan.
            </p>

            <a href="#offert" className="footer-cta">
              Kontakta NORDVED ↗
            </a>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>
            © {new Date().getFullYear()} NORDVED. Alla rättigheter
            förbehållna.
          </span>

          <a href="#hem">Till toppen ↑</a>
        </div>
      </footer>
    </>
  );
}
