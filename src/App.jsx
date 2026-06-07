import React from "react";
import { createRoot } from "react-dom/client";
import { ArrowUpRight, Sparkles } from "lucide-react";
import "./styles.css";

const products = [
  {
    name: "Verdant Catchall",
    price: "$68",
    status: "Available soon",
    note: "For keys, olives, earrings, or whatever lands first.",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Amber Table Light",
    price: "$140",
    status: "Candidate object",
    note: "A little glow that changes the whole room.",
    image:
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "House Glasses",
    price: "$52",
    status: "Coming soon",
    note: "The glass everyone reaches for without asking.",
    image:
      "https://images.unsplash.com/photo-1603199506016-b9a594b593c0?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "The Object",
    price: "Soon",
    status: "Coming soon",
    note: "We are still looking for the right one.",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80",
  },
];

function App() {
  return (
    <main className="site-shell">
      <nav className="nav">
        <a className="brand" href="#top">TENSION</a>
        <div className="nav-links">
          <a href="#objects">Objects</a>
          <a href="#world">World</a>
          <a href="#join">Join</a>
        </div>
      </nav>

      <section id="top" className="hero">
        <div className="hero-image hero-main">
          <div className="hero-overlay" />
        </div>

        <div className="hero-copy">
          <p className="eyebrow">Socially magnetic modern living</p>
          <h1>cool people live here</h1>
          <p className="hero-text">
            Objects, atmosphere, and artifacts from apartments people want to end up in.
          </p>
          <a className="text-link" href="#objects">
            Shop the first objects <ArrowUpRight size={15} />
          </a>
        </div>

        <div className="floating-note">
          <Sparkles size={15} />
          <span>Not a showroom. Not a moodboard. A life with better lighting.</span>
        </div>
      </section>

      <section className="intro-section">
        <div>
          <p className="section-kicker">The world</p>
          <h2>socially magnetic modern living</h2>
        </div>
        <p>
          Tension is for homes with personality — warm but not sleepy, polished but not stiff,
          playful without trying too hard. The kind of place where the coffee turns into music,
          the music turns into people, and everyone stays longer than they meant to.
        </p>
      </section>

      <section id="objects" className="objects-section">
        <div className="section-header">
          <div>
            <p className="section-kicker">First objects</p>
            <h2>Artifacts from the apartment.</h2>
          </div>
          <a className="small-link" href="#join">Get first notice</a>
        </div>

        <div className="product-grid">
          {products.map((item, index) => (
            <article className={`product-card product-${index + 1}`} key={item.name}>
              <div className="product-image-wrap">
                <img src={item.image} alt={item.name} />
                <span>{item.status}</span>
              </div>
              <div className="product-info">
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.note}</p>
                </div>
                <strong>{item.price}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="world" className="life-section">
        <div className="life-photo photo-one" />
        <div className="life-copy">
          <p className="section-kicker">Made for living</p>
          <h2>hosting is one expression of a magnetic life.</h2>
          <p>
            The home still has to feel good when everyone leaves. Records alone. Late leftovers.
            A Sunday reset. A lamp you love more than the overhead light.
          </p>
        </div>
        <div className="life-photo photo-two" />
      </section>

      <section className="contrast-section">
        <div>
          <p className="section-kicker">The tension</p>
          <h2>Warmth, interrupted.</h2>
        </div>
        <p>
          Cream, walnut, rust, and amber — balanced by slate, mineral green, steel, and sharper
          modern contrast. The point is not cozy. The point is alive.
        </p>
      </section>

      <section id="join" className="join-section">
        <div>
          <p className="section-kicker">Join the world</p>
          <h2>Get the first drop before the room fills up.</h2>
        </div>

        <form className="email-form">
          <input type="email" placeholder="your email" aria-label="Email address" />
          <button type="button">Notify me</button>
        </form>
      </section>

      <footer className="footer">
        <span>TENSION</span>
        <span>cool people live here</span>
        <span>© 2026</span>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
