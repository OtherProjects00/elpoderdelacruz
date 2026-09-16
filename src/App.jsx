import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'INICIO', href: '#inicio' },
  { label: 'SOBRE NOSOTROS', href: '#nosotros' },
  { label: 'ACTIVIDADES', href: '#actividades' },
  { label: 'REUNIONES', href: '#reuniones' },
  { label: 'GALERÍA', href: '#galeria' },
  { label: 'CONTACTO', href: '#contacto' },
]

const activities = [
  {
    title: 'ESCUELA BÍBLICA',
    schedule: 'Sábado · 14:00 a 16:30 hs',
  },
  {
    title: 'REUNIÓN DE ORACIÓN',
    schedule: 'Miércoles · 19:30 hs',
  },
]

const mapEmbedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.4239220542704!2d-58.76991342462089!3d-34.568138572967165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc97fe2cabff85%3A0x6d1bf646c4678465!2sIGLESIA%20Y%20FUNDACION%20EL%20PODER%20DE%20LA%20CRUZ!5e0!3m2!1ses-419!2sar!4v1789561672775!5m2!1ses-419!2sar'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('menu-is-open', menuOpen)
    return () => document.body.classList.remove('menu-is-open')
  }, [menuOpen])

  return (
    <header className="site-header">
      <a className="brand" href="#inicio" onClick={() => setMenuOpen(false)}>
        EL PODER DE LA CRUZ
      </a>

      <nav className="desktop-nav" aria-label="Navegación principal">
        {navItems.map((item, index) => (
          <a className={index === 0 ? 'active' : ''} href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <button
        className="menu-button"
        type="button"
        aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>

      <nav
        id="mobile-navigation"
        className={`mobile-nav ${menuOpen ? 'open' : ''}`}
        aria-label="Navegación móvil"
      >
        {navItems.map((item) => (
          <a href={item.href} key={item.href} onClick={() => setMenuOpen(false)}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-content">
        <span className="eyebrow hero-eyebrow">NUESTRAS REUNIONES</span>
        <h1 className="hero-intro">Nuestras reuniones</h1>
        <p className="hero-times">
          Sábados <span className="desktop-separator">19:30 hs</span>
          <br />
          Domingos <span className="desktop-separator">09:30 hs</span>
        </p>
        <p className="hero-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <a className="primary-button" href="#contacto">VISITANOS</a>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="about section-anchor" id="nosotros">
      <img className="section-image about-image" src="/assets/community.png" alt="El Poder de la Cruz, nuestra comunidad" />
      <div className="about-content">
        <span className="eyebrow">SOBRE NOSOTROS</span>
        <h2>Titulo</h2>
        <p className="body-large">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<span className="desktop-copy"> Ut enim ad minim veniam.</span>
        </p>
        <p className="values">FE&nbsp; · &nbsp;COMUNIDAD&nbsp; · &nbsp;PROPÓSITO</p>
      </div>
    </section>
  )
}

function ActivityCard({ title, schedule }) {
  return (
    <article className="activity-card">
      <img src="/assets/activity.png" alt="" />
      <div className="card-content">
        <h3>{title}</h3>
        <p className="activity-schedule">{schedule}</p>
        <a href="https://wa.me/" target="_blank" rel="noreferrer">Escribinos por WhatsApp →</a>
      </div>
    </article>
  )
}

function Activities() {
  return (
    <section className="activities section-anchor" id="actividades">
      <div className="activities-heading">
        <h2>Nuestras actividades</h2>
        <p>Espacios para crecer en la fe y compartir en comunidad.</p>
      </div>
      <div className="activities-grid">
        {activities.map((activity) => <ActivityCard {...activity} key={activity.title} />)}
      </div>
    </section>
  )
}

function Meetings() {
  return (
    <section className="meetings section-anchor" id="reuniones">
      <img className="section-image meetings-image" src="/assets/meetings.png" alt="Nuestras reuniones" />
      <div className="meetings-content">
        <span className="eyebrow">ENCUENTROS PRESENCIALES</span>
        <h2>Nuestras reuniones</h2>
        <p className="meeting-times">Sábados · 19:30 hs<br />Domingos · 09:30 hs</p>
      </div>
    </section>
  )
}

function Gallery() {
  return (
    <section className="gallery section-anchor" id="galeria">
      <span className="eyebrow">GALERÍA DE REUNIONES</span>
      <h2>Momentos que compartimos</h2>
      <div className="gallery-grid">
        {[1, 2, 3, 4].map((item) => (
          <img src="/assets/gallery.png" alt={`Momento compartido en una reunión ${item}`} key={item} />
        ))}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="contact section-anchor" id="contacto">
      <div className="contact-copy">
        <span className="eyebrow contact-eyebrow">CONTACTO</span>
        <h2>Vení a conocernos</h2>
        <p className="contact-intro">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.</p>
        <p className="contact-times">Sábados · 19:30 hs<br />Domingos · 09:30 hs</p>
        <p className="address">República Argentina 264, B1736 Trujui, Provincia de Buenos Aires</p>
      </div>
      <div className="map-card">
        <iframe
          src={mapEmbedUrl}
          title="Mapa de Iglesia y Fundación El Poder de la Cruz"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <p className="footer-brand">EL PODER DE LA CRUZ</p>
      <p className="copyright">© 2026 El poder de la cruz<span className="desktop-only"> · Moreno, Buenos Aires</span></p>
      <p className="socials">
        <a href="https://www.instagram.com/elpoderdelacruzz/" target="_blank" rel="noreferrer">Instagram</a>
        <span>·</span>
        <a href="#facebook">Facebook</a>
      </p>
      <p className="developer-credit">
        Desarrollado por{' '}
        <a href="https://www.instagram.com/matt._dev/" target="_blank" rel="noreferrer">
          @matt._dev
        </a>
      </p>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Activities />
        <Meetings />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
