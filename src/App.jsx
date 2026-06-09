
import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const products = [
  {
    name: "Verdant Catchall",
    note: "For keys, olives, earrings, or whatever lands first.",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Amber Table Light",
    note: "A little glow that changes the whole room.",
    image:
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "House Glasses",
    note: "The glass everyone reaches for without asking.",
    image:
      "https://images.unsplash.com/photo-1603199506016-b9a594b593c0?auto=format&fit=crop&w=1200&q=80",
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

      <section className="hero" id="top">
        <div className="hero-bg"></div>

        <div className="hero-topline">
          socially magnetic modern living
        </div>

        <h1 className="hero-title">
          cool people
          <span>live here</span>
        </h1>

        <div className="hero-side">
          <p>
            Objects, atmosphere, and artifacts from apartments
            people want to end up in.
          </p>

          <a href="#objects" className="outline-button">
            Explore the apartment
          </a>
        </div>

        <div className="hero-card">
          <p>
            Not a showroom. Not a moodboard.
            <br />
            A life with better lighting.
          </p>
        </div>
      </section>

      <section className="ticker-wrap">
        <div className="ticker">
          <span>records at 4pm</span>
          <span>someone always stays late</span>
          <span>lamps on before sunset</span>
          <span>wine on the counter</span>
          <span>music in the kitchen</span>
          <span>objects people remember</span>
        </div>
      </section>

      <section className="statement-section">
        <div className="statement-grid">
          <h2>
            apartments
            <br />
            with gravity.
          </h2>

          <p>
            Warm but not sleepy. Editorial but lived in.
            A home that feels good full of people
            and still feels good after everyone leaves.
          </p>
        </div>
      </section>

      <section className="objects-section" id="objects">
        <div className="objects-header">
          <p>FIRST OBJECTS</p>
          <h2>artifacts from the apartment</h2>
        </div>

        <div className="objects-grid">
          {products.map((item, index) => (
            <article className={`object-card object-${index + 1}`} key={item.name}>
              <div className="object-image">
                <img src={item.image} alt={item.name} />
              </div>

              <div className="object-info">
                <h3>{item.name}</h3>
                <p>{item.note}</p>
              </div>
            </article>
          ))}

          <div className="editorial-block">
            <span>COMING SOON</span>
            <h3>
              the apartment
              <br />
              is still evolving.
            </h3>
          </div>
        </div>
      </section>

      <section className="world-section" id="world">
        <div className="world-image"></div>

        <div className="world-copy">
          <p className="kicker">THE WORLD</p>

          <h2>
            hosting is one expression
            of a magnetic life.
          </h2>

          <p>
            Coffee becomes music. Music becomes people.
            A dinner turns into another bottle.
            Someone asks where the lamp is from.
          </p>

          <a href="#join" className="outline-button dark">
            Join the first drop
          </a>
        </div>
      </section>

      <section className="closing-section">
        <h2>
          every apartment
          <br />
          has a mood.
          <span>some have gravity.</span>
        </h2>
      </section>

      <section className="join-section" id="join">
        <div>
          <p className="kicker">JOIN THE WORLD</p>
          <h2>Get first access to future objects.</h2>
        </div>

        <form className="email-form">
          <input type="email" placeholder="your email" />
          <button type="button">Notify me</button>
        </form>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
