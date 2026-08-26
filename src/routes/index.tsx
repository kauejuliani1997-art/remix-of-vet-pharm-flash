import { createFileRoute } from "@tanstack/react-router";
import "../cardsvet.css";
import { Countdown } from "../components/Countdown";
import flashcardMeloxicam from "../assets/flashcard-meloxicam.png.asset.json";
import guaranteeSeal from "../assets/guarantee-seal.jpg.asset.json";
import cardOmeprazole from "../assets/card-omeprazole.png.asset.json";
import cardFamotidine from "../assets/card-famotidine.png.asset.json";
import cardAcvim from "../assets/card-acvim-staging.png.asset.json";
import cardAtenolol from "../assets/card-atenolol.png.asset.json";
import cardImidacloprid from "../assets/card-imidacloprid.png.asset.json";
import cardAlbendazole from "../assets/card-albendazole.png.asset.json";
import bonus01Img from "../assets/bonus01.png";
import bonus02Img from "../assets/bonus02.png";
import bonus03Img from "../assets/bonus03.png";
import bonus04Img from "../assets/bonus04.png";

const heroCards = [
  { src: cardOmeprazole.url, alt: "CardsVet flashcard on omeprazole, a proton pump inhibitor" },
  { src: cardFamotidine.url, alt: "CardsVet flashcard on famotidine, an H2 receptor antagonist" },
  { src: cardAcvim.url, alt: "CardsVet flashcard on ACVIM staging of myxomatous mitral valve disease" },
  { src: cardAtenolol.url, alt: "CardsVet flashcard on atenolol, a cardioselective beta-blocker" },
  { src: cardImidacloprid.url, alt: "CardsVet flashcard on imidacloprid, a neonicotinoid insecticide" },
  { src: cardAlbendazole.url, alt: "CardsVet flashcard on albendazole, a benzimidazole anthelmintic" },
];

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "CardsVet | Pocket Flashcards for Veterinary Pharmacology" },
      {
        name: "description",
        content:
          "150 veterinary pharmacology flashcards to check dose per species, route, and contraindication in seconds, without opening the textbook.",
      },
      { property: "og:title", content: "CardsVet | Pocket Flashcards for Veterinary Pharmacology" },
      {
        property: "og:description",
        content:
          "150 veterinary pharmacology flashcards with dose per species, route, and contraindications. Instant download, print-ready.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  return (
    <div className="cardsvet-page">


  
  <div className="urgency-bar">&#128293; Special offer ends in: <strong id="countdown-top">15:00</strong></div>

<main>

  
  <section className="dark hero">
    <div className="wrap">
      <h1>150 flashcards for <span className="accent">veterinary pharmacology</span>, with the dose, route, and contraindications for every drug</h1>
      <p className="sub">Dog, cat, horse, and cattle &mdash; the dose for every species, ready to check in seconds.</p>

      <div className="carousel">
        <div className="carousel-track">
          {[...heroCards, ...heroCards].map((card, i) => (
            <img key={i} src={card.src} alt={card.alt} className="carousel-card" loading="lazy" />
          ))}
        </div>
      </div>

      <a href="#pricing" className="cta-btn">I WANT MY FLASHCARDS</a>
      <div className="badge-line">
        <span>🔒 Secure checkout</span>
        <span className="badge-dot">•</span>
        <span>⚡ Instant access</span>
        <span className="badge-dot">•</span>
        <span>🛡️ 7-day guarantee</span>
      </div>
    </div>
  </section>

  
  <section>
    <div className="wrap">
      <div className="feature-grid">
        <div className="feature-card">
          <div className="feature-row">
            <div className="feature-icon" style={{ background: "#f0d9c5" }}>&#127919;</div>
            <h4>Prescribe with confidence</h4>
          </div>
          <p>The right dose, route, and contraindications for each species, all in one place.</p>
        </div>
        <div className="feature-card">
          <div className="feature-row">
            <div className="feature-icon" style={{ background: "#cfe3e0" }}>&#9201;&#65039;</div>
            <h4>Look it up in seconds</h4>
          </div>
          <p>One drug per flashcard. No scrolling, no searching, no opening the textbook.</p>
        </div>
        <div className="feature-card">
          <div className="feature-row">
            <div className="feature-icon" style={{ background: "#f4d7d7" }}>&#128737;&#65039;</div>
            <h4>Lower risk at the point of care</h4>
          </div>
          <p>The species alert sits right in front of you, before you calculate the dose.</p>
        </div>
        <div className="feature-card">
          <div className="feature-row">
            <div className="feature-icon" style={{ background: "#d9e6cf" }}>&#128218;</div>
            <h4>Works for exams too</h4>
          </div>
          <p>The same material you use on rotation is what you review for exams and residency.</p>
        </div>
      </div>
    </div>
  </section>

  
  <section className="cream">
<div className="wrap">
<div className="section-head">
<span className="tag-pill">Veterinary Pharmacology Flashcards</span>
<h2>From the PDF to your <span className="accent">coat pocket</span></h2>
<p>Every flashcard follows the same structure. Learn to read one, and you already know how to read them all.</p>
</div>
<img src={flashcardMeloxicam.url} alt="CardsVet flashcard for Meloxicam, showing indication, class, dosing per species, precautions, and contraindications" className="showcase-img" loading="lazy" />
    </div>
  </section>

  
  <section>
    <div className="wrap">
      <div className="section-head">
        <span className="tag-pill">Who&rsquo;s it for</span>
        <h2>Built for anyone who freezes up on <span className="accent">pharmacology</span></h2>
      </div>
      <div className="pain-grid">
        <div className="pain-card"><span className="check-round">&#10003;</span><p>Calculate a dose without freezing in front of the patient</p></div>
        <div className="pain-card"><span className="check-round">&#10003;</span><p>Check the cat&rsquo;s dose without assuming it&rsquo;s the same as the dog&rsquo;s</p></div>
        <div className="pain-card"><span className="check-round">&#10003;</span><p>Know instantly what&rsquo;s prohibited in each species</p></div>
        <div className="pain-card"><span className="check-round">&#10003;</span><p>Show up to rotation understanding what&rsquo;s being prescribed</p></div>
        <div className="pain-card"><span className="check-round">&#10003;</span><p>Review pharmacology for exams and residency without rereading the whole textbook</p></div>
      </div>
    </div>
  </section>

  
  <section className="dark">
    <div className="wrap-narrow center">
      <span className="tag-pill">Ready to print</span>
      <h2 style={{ fontSize: "clamp(1.6rem,3vw,2.3rem)" }}>8 flashcards per sheet &mdash; <span className="accent">just cut them out</span></h2>
      <p style={{ marginTop: "1rem", color: "rgba(255,255,255,.8)", maxWidth: "36rem", marginLeft: "auto", marginRight: "auto" }}>The material comes pre-laid out on A4 sheets with cut marks. Print it, cut it, laminate it &mdash; no assembly required.</p>

      <div className="print-stack">
        <img src="https://cardsvet.netlify.app/assets/folha-a4-2-MoC143Ig.webp" alt="A4 sheet of flashcards, page 2" loading="lazy" />
        <img src="https://cardsvet.netlify.app/assets/folha-a4-3-CsVrX1P8.webp" alt="A4 sheet of flashcards, page 3" loading="lazy" />
        <img src="https://cardsvet.netlify.app/assets/folha-a4-1-NlFx9rzv.webp" alt="A4 sheet of flashcards, page 1" loading="lazy" />
      </div>

      <ul className="spec-list">
        <li><span className="check-round">&#10003;</span>6.7 &times; 10 cm (2.6&Prime; &times; 3.9&Prime;) flashcard &mdash; fits in your coat pocket and badge holder</li>
        <li><span className="check-round">&#10003;</span>Cut marks on the margins, so you can cut edge-to-edge with a ruler</li>
        <li><span className="check-round">&#10003;</span>19 sheets cover the entire set</li>
      </ul>

      <a href="#pricing" className="cta-btn" style={{ marginTop: "2.5rem" }}>I WANT THE FLASHCARDS</a>
    </div>
  </section>

  
  <section>
    <div className="wrap">
      <div className="section-head">
        <span className="tag-pill">Full table of contents</span>
        <h2>All 150 flashcards, listed <span className="accent">one by one</span></h2>
        <p>No &ldquo;and much more.&rdquo; Everything is listed below, one by one, before you buy.</p>
      </div>

      <div className="module-list-wrap">
        <div className="module-card">
          <div className="module-head">
            <div className="module-head-left">
              <h3>Fundamentals & Dose Calculation</h3>
              <span className="module-badge">MODULE 01</span>
            </div>
            <span className="module-count">12 flashcards</span>
          </div>
          <ul className="module-list">
            <li><span className="check">&#10003;</span>How to Calculate the Dose</li>
            <li><span className="check">&#10003;</span>Volume from Concentration</li>
            <li><span className="check">&#10003;</span>The Rule of Three in Practice</li>
            <li><span className="check">&#10003;</span>Concentration Conversion</li>
            <li><span className="check">&#10003;</span>Routes of Administration</li>
            <li><span className="check">&#10003;</span>Prescription Abbreviations</li>
            <li><span className="check">&#10003;</span>How to Write a Prescription</li>
            <li><span className="check">&#10003;</span>Special Control Prescription Forms</li>
            <li><span className="check">&#10003;</span>Prohibited Drugs in Food-Producing Animals</li>
            <li><span className="check">&#10003;</span>Withdrawal Period</li>
            <li><span className="check">&#10003;</span>Pharmacokinetics (ADME)</li>
            <li><span className="check">&#10003;</span>Why Cats Metabolize Differently</li>
          </ul>
        </div>

        <div className="module-card">
          <div className="module-head">
            <div className="module-head-left">
              <h3>Anesthesia, Sedation & Premedication</h3>
              <span className="module-badge">MODULE 02</span>
            </div>
            <span className="module-count">18 flashcards</span>
          </div>
          <ul className="module-list">
            <li><span className="check">&#10003;</span>Acepromazine</li>
            <li><span className="check">&#10003;</span>Xylazine</li>
            <li><span className="check">&#10003;</span>Detomidine</li>
            <li><span className="check">&#10003;</span>Dexmedetomidine</li>
            <li><span className="check">&#10003;</span>Diazepam</li>
            <li><span className="check">&#10003;</span>Midazolam</li>
            <li><span className="check">&#10003;</span>Ketamine</li>
            <li><span className="check">&#10003;</span>Propofol</li>
            <li><span className="check">&#10003;</span>Alfaxalone</li>
            <li><span className="check">&#10003;</span>Tiletamine + Zolazepam</li>
            <li><span className="check">&#10003;</span>Etomidate</li>
            <li><span className="check">&#10003;</span>Isoflurane</li>
            <li><span className="check">&#10003;</span>Sevoflurane</li>
            <li><span className="check">&#10003;</span>Lidocaine</li>
            <li><span className="check">&#10003;</span>Bupivacaine</li>
            <li><span className="check">&#10003;</span>Atropine</li>
            <li><span className="check">&#10003;</span>Premedication Protocols</li>
            <li><span className="check">&#10003;</span>Locoregional Blocks</li>
          </ul>
        </div>

        <div className="module-card">
          <div className="module-head">
            <div className="module-head-left">
              <h3>Analgesia — Opioids, NSAIDs & Adjuvants</h3>
              <span className="module-badge">MODULE 03</span>
            </div>
            <span className="module-count">20 flashcards</span>
          </div>
          <ul className="module-list">
            <li><span className="check">&#10003;</span>Morphine</li>
            <li><span className="check">&#10003;</span>Methadone</li>
            <li><span className="check">&#10003;</span>Fentanyl</li>
            <li><span className="check">&#10003;</span>Buprenorphine</li>
            <li><span className="check">&#10003;</span>Butorphanol</li>
            <li><span className="check">&#10003;</span>Tramadol</li>
            <li><span className="check">&#10003;</span>Meperidine (Pethidine)</li>
            <li><span className="check">&#10003;</span>Meloxicam</li>
            <li><span className="check">&#10003;</span>Carprofen</li>
            <li><span className="check">&#10003;</span>Firocoxib</li>
            <li><span className="check">&#10003;</span>Ketoprofen</li>
            <li><span className="check">&#10003;</span>Flunixin Meglumine</li>
            <li><span className="check">&#10003;</span>Dipyrone (Metamizole)</li>
            <li><span className="check">&#10003;</span>Phenylbutazone</li>
            <li><span className="check">&#10003;</span>Robenacoxib</li>
            <li><span className="check">&#10003;</span>Grapiprant</li>
            <li><span className="check">&#10003;</span>Gabapentin</li>
            <li><span className="check">&#10003;</span>Bedinvetmab</li>
            <li><span className="check">&#10003;</span>Frunevetmab</li>
            <li><span className="check">&#10003;</span>Multimodal Pain Management</li>
          </ul>
        </div>

        <div className="module-card">
          <div className="module-head">
            <div className="module-head-left">
              <h3>Antimicrobials</h3>
              <span className="module-badge">MODULE 04</span>
            </div>
            <span className="module-count">30 flashcards</span>
          </div>
          <ul className="module-list">
            <li><span className="check">&#10003;</span>Penicillin G</li>
            <li><span className="check">&#10003;</span>Amoxicillin</li>
            <li><span className="check">&#10003;</span>Amoxicillin + Clavulanate</li>
            <li><span className="check">&#10003;</span>Ampicillin</li>
            <li><span className="check">&#10003;</span>Cephalexin</li>
            <li><span className="check">&#10003;</span>Cefovecin</li>
            <li><span className="check">&#10003;</span>Ceftriaxone</li>
            <li><span className="check">&#10003;</span>Ceftiofur</li>
            <li><span className="check">&#10003;</span>Gentamicin</li>
            <li><span className="check">&#10003;</span>Amikacin</li>
            <li><span className="check">&#10003;</span>Doxycycline</li>
            <li><span className="check">&#10003;</span>Oxytetracycline</li>
            <li><span className="check">&#10003;</span>Azithromycin</li>
            <li><span className="check">&#10003;</span>Tylosin</li>
            <li><span className="check">&#10003;</span>Clindamycin</li>
            <li><span className="check">&#10003;</span>Tulathromycin</li>
            <li><span className="check">&#10003;</span>Enrofloxacin</li>
            <li><span className="check">&#10003;</span>Marbofloxacin</li>
            <li><span className="check">&#10003;</span>Ciprofloxacin</li>
            <li><span className="check">&#10003;</span>Sulfa + Trimethoprim</li>
            <li><span className="check">&#10003;</span>Metronidazole</li>
            <li><span className="check">&#10003;</span>Chloramphenicol</li>
            <li><span className="check">&#10003;</span>Florfenicol</li>
            <li><span className="check">&#10003;</span>Rifampin</li>
            <li><span className="check">&#10003;</span>Nitrofurantoin</li>
            <li><span className="check">&#10003;</span>Itraconazole</li>
            <li><span className="check">&#10003;</span>Ketoconazole</li>
            <li><span className="check">&#10003;</span>Fluconazole</li>
            <li><span className="check">&#10003;</span>Terbinafine</li>
            <li><span className="check">&#10003;</span>Rational Use & Resistance</li>
          </ul>
        </div>

        <div className="module-card">
          <div className="module-head">
            <div className="module-head-left">
              <h3>Antiparasitics</h3>
              <span className="module-badge">MODULE 05</span>
            </div>
            <span className="module-count">16 flashcards</span>
          </div>
          <ul className="module-list">
            <li><span className="check">&#10003;</span>Ivermectin</li>
            <li><span className="check">&#10003;</span>Moxidectin</li>
            <li><span className="check">&#10003;</span>Milbemycin Oxime</li>
            <li><span className="check">&#10003;</span>Selamectin</li>
            <li><span className="check">&#10003;</span>Doramectin</li>
            <li><span className="check">&#10003;</span>Fipronil</li>
            <li><span className="check">&#10003;</span>Fluralaner</li>
            <li><span className="check">&#10003;</span>Afoxolaner</li>
            <li><span className="check">&#10003;</span>Sarolaner</li>
            <li><span className="check">&#10003;</span>Lotilaner</li>
            <li><span className="check">&#10003;</span>Imidacloprid</li>
            <li><span className="check">&#10003;</span>Praziquantel</li>
            <li><span className="check">&#10003;</span>Fenbendazole</li>
            <li><span className="check">&#10003;</span>Albendazole</li>
            <li><span className="check">&#10003;</span>Pyrantel</li>
            <li><span className="check">&#10003;</span>Toltrazuril</li>
          </ul>
        </div>

        <div className="module-card">
          <div className="module-head">
            <div className="module-head-left">
              <h3>Cardiovascular & Diuretics</h3>
              <span className="module-badge">MODULE 06</span>
            </div>
            <span className="module-count">14 flashcards</span>
          </div>
          <ul className="module-list">
            <li><span className="check">&#10003;</span>Furosemide</li>
            <li><span className="check">&#10003;</span>Spironolactone</li>
            <li><span className="check">&#10003;</span>Hydrochlorothiazide</li>
            <li><span className="check">&#10003;</span>Benazepril</li>
            <li><span className="check">&#10003;</span>Enalapril</li>
            <li><span className="check">&#10003;</span>Pimobendan</li>
            <li><span className="check">&#10003;</span>Digoxin</li>
            <li><span className="check">&#10003;</span>Diltiazem</li>
            <li><span className="check">&#10003;</span>Atenolol</li>
            <li><span className="check">&#10003;</span>Sildenafil</li>
            <li><span className="check">&#10003;</span>Amlodipine</li>
            <li><span className="check">&#10003;</span>Clopidogrel</li>
            <li><span className="check">&#10003;</span>Mannitol</li>
            <li><span className="check">&#10003;</span>ACVIM Staging</li>
          </ul>
        </div>

        <div className="module-card">
          <div className="module-head">
            <div className="module-head-left">
              <h3>GI & Antiemetics</h3>
              <span className="module-badge">MODULE 07</span>
            </div>
            <span className="module-count">10 flashcards</span>
          </div>
          <ul className="module-list">
            <li><span className="check">&#10003;</span>Maropitant</li>
            <li><span className="check">&#10003;</span>Metoclopramide</li>
            <li><span className="check">&#10003;</span>Ondansetron</li>
            <li><span className="check">&#10003;</span>Omeprazole</li>
            <li><span className="check">&#10003;</span>Famotidine</li>
            <li><span className="check">&#10003;</span>Sucralfate</li>
            <li><span className="check">&#10003;</span>Misoprostol</li>
            <li><span className="check">&#10003;</span>Cisapride</li>
            <li><span className="check">&#10003;</span>Lactulose</li>
            <li><span className="check">&#10003;</span>Butylscopolamine</li>
          </ul>
        </div>

        <div className="module-card">
          <div className="module-head">
            <div className="module-head-left">
              <h3>Endocrine & Corticosteroids</h3>
              <span className="module-badge">MODULE 08</span>
            </div>
            <span className="module-count">10 flashcards</span>
          </div>
          <ul className="module-list">
            <li><span className="check">&#10003;</span>Prednisolone</li>
            <li><span className="check">&#10003;</span>Dexamethasone</li>
            <li><span className="check">&#10003;</span>Hydrocortisone</li>
            <li><span className="check">&#10003;</span>Triamcinolone</li>
            <li><span className="check">&#10003;</span>Corticosteroid Equivalence</li>
            <li><span className="check">&#10003;</span>Insulin</li>
            <li><span className="check">&#10003;</span>Levothyroxine</li>
            <li><span className="check">&#10003;</span>Methimazole</li>
            <li><span className="check">&#10003;</span>Trilostane</li>
            <li><span className="check">&#10003;</span>Oxytocin</li>
          </ul>
        </div>

        <div className="module-card">
          <div className="module-head">
            <div className="module-head-left">
              <h3>Dermatology & Allergy</h3>
              <span className="module-badge">MODULE 09</span>
            </div>
            <span className="module-count">6 flashcards</span>
          </div>
          <ul className="module-list">
            <li><span className="check">&#10003;</span>Oclacitinib</li>
            <li><span className="check">&#10003;</span>Lokivetmab</li>
            <li><span className="check">&#10003;</span>Cyclosporine</li>
            <li><span className="check">&#10003;</span>Diphenhydramine</li>
            <li><span className="check">&#10003;</span>Chlorhexidine</li>
            <li><span className="check">&#10003;</span>Atopic Dermatitis</li>
          </ul>
        </div>

        <div className="module-card">
          <div className="module-head">
            <div className="module-head-left">
              <h3>Emergencies, Antidotes & Fluid Therapy</h3>
              <span className="module-badge">MODULE 10</span>
            </div>
            <span className="module-count">14 flashcards</span>
          </div>
          <ul className="module-list">
            <li><span className="check">&#10003;</span>Epinephrine</li>
            <li><span className="check">&#10003;</span>CPR Protocol</li>
            <li><span className="check">&#10003;</span>Anaphylaxis Management</li>
            <li><span className="check">&#10003;</span>Fluid Therapy: Maintenance</li>
            <li><span className="check">&#10003;</span>Fluid Therapy: Shock</li>
            <li><span className="check">&#10003;</span>Fluid Choice</li>
            <li><span className="check">&#10003;</span>Naloxone</li>
            <li><span className="check">&#10003;</span>Atipamezole</li>
            <li><span className="check">&#10003;</span>Flumazenil</li>
            <li><span className="check">&#10003;</span>N-acetylcysteine</li>
            <li><span className="check">&#10003;</span>Vitamin K1</li>
            <li><span className="check">&#10003;</span>Methylene Blue</li>
            <li><span className="check">&#10003;</span>Activated Charcoal</li>
            <li><span className="check">&#10003;</span>Poisonings & Antidotes</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  
  <section className="cream">
    <div className="wrap">
      <div className="section-head">
        <h2><span className="accent">Exclusive</span> Bonus</h2>
      </div>
      <div className="bonus-grid">
        <div className="bonus-card">
          <div className="bonus-mockup">
            <img src={bonus01Img} alt="CardsVet bonus mockup: Dose &amp; Dilution Conversion Chart" className="bonus-mockup-img" loading="lazy" />
            <span className="bonus-mockup-tag">BONUS 01</span>
          </div>
          <h4>Ready-to-Use Dose &amp; Dilution Conversion Chart</h4>
          <p>From mg/kg to mL, with the most common dilutions &mdash; calculate without errors.</p>
          <div className="bonus-price"><span className="strike">$9.90</span> <strong>$0</strong> <span className="free-tag">FREE</span></div>
        </div>

        <div className="bonus-card">
          <div className="bonus-mockup">
            <img src={bonus02Img} alt="CardsVet bonus mockup: Drugs to Avoid by Species poster" className="bonus-mockup-img" loading="lazy" />
            <span className="bonus-mockup-tag">BONUS 02</span>
          </div>
          <h4>Printable A4 Poster of Drugs Prohibited by Species</h4>
          <p>Print it and pin it up on the clinic or lab wall.</p>
          <div className="bonus-price"><span className="strike">$7.90</span> <strong>$0</strong> <span className="free-tag">FREE</span></div>
        </div>

        <div className="bonus-card">
          <div className="bonus-mockup">
            <img src={bonus03Img} alt="CardsVet bonus mockup: 10 Most Common Veterinary Prescription Errors checklist" className="bonus-mockup-img" loading="lazy" />
            <span className="bonus-mockup-tag">BONUS 03</span>
          </div>
          <h4>Checklist of the 10 Most Common Veterinary Prescription Errors</h4>
          <p>What causes the most dosing errors, and how to avoid each one.</p>
          <div className="bonus-price"><span className="strike">$12.90</span> <strong>$0</strong> <span className="free-tag">FREE</span></div>
        </div>

        <div className="bonus-card">
          <div className="bonus-mockup">
            <img src={bonus04Img} alt="CardsVet bonus mockup: 7-Day Study Schedule" className="bonus-mockup-img" loading="lazy" />
            <span className="bonus-mockup-tag">BONUS 04</span>
          </div>
          <h4>7-Day Study Schedule Using the Flashcards</h4>
          <p>For anyone using the material for exams or residency.</p>
          <div className="bonus-price"><span className="strike">$8.90</span> <strong>$0</strong> <span className="free-tag">FREE</span></div>
        </div>
      </div>
      <p className="bonus-total">Total value of bonuses: <span className="strike">$39.60</span> — <strong>FREE</strong> when you get it today</p>
    </div>
  </section>

  
  <section className="dark" id="pricing">
    <div className="wrap">
      <div className="offer-timer">
        <span className="tag-pill">Limited offer</span>
        <div className="offer-timer-digits" id="countdown-pricing">15:00</div>
      </div>
      <div className="section-head">
        <span className="tag-pill">The offer</span>
        <h2 style={{ fontSize: "clamp(1.7rem,3.4vw,2.6rem)" }}>PUT THE FLASHCARDS in <span className="accent">your pocket</span></h2>
        <p>One-time payment on both plans. No subscription, no monthly fee.</p>
      </div>

      <div className="pricing-stack">
        <div className="price-card">
          <h3>Basic Plan</h3>
          <div className="price-label">One-time payment</div>
          <div className="price-value">$17.90</div>
          <ul>
            <li><span className="check-round">&#10003;</span>150 veterinary pharmacology flashcards</li>
            <li><span className="check-round">&#10003;</span>Print-ready A4 version</li>
            <li><span className="check-round">&#10003;</span>Free updates whenever the drug label or its regulatory approval changes</li>
            <li><span className="check-round">&#10003;</span>7-day guarantee</li>
          </ul>
          <a href="#" className="plan-btn no-pulse">I WANT JUST THE BASIC PLAN</a>
        </div>

        <div className="price-card featured">
          <span className="best-seller">Best seller</span>
          <h3>Complete Plan</h3>
          <div className="price-label" style={{ color: "var(--cinza)" }}>One-time payment</div>
          <div className="price-value">$27.90</div>
          <ul>
            <li><span className="check-round">&#10003;</span>150 veterinary pharmacology flashcards</li>
            <li><span className="check-round">&#10003;</span>Print-ready A4 version</li>
            <li><span className="check-round">&#10003;</span>Free updates whenever the drug label or its regulatory approval changes</li>
            <li><span className="check-round">&#10003;</span>&#127873; Dose &amp; Dilution Conversion Chart</li>
            <li><span className="check-round">&#10003;</span>&#127873; A4 Poster of Drugs Prohibited by Species</li>
            <li><span className="check-round">&#10003;</span>&#127873; Checklist of the 10 Most Common Prescription Errors</li>
            <li><span className="check-round">&#10003;</span>&#127873; 7-Day Study Schedule</li>
            <li><span className="check-round">&#10003;</span>7-day guarantee</li>
          </ul>
          <a href="#" className="plan-btn">I WANT THE COMPLETE PLAN</a>
        </div>
      </div>

      <div className="badge-line trust-line">
        <span>🛡️ 7-day guarantee</span>
        <span className="badge-dot">&middot;</span>
        <span>🔒 Secure payment</span>
        <span className="badge-dot">&middot;</span>
        <span>⚡ Instant download</span>
      </div>
    </div>
  </section>

  
  <section className="cream">
    <div className="wrap">
      <div className="section-head">
        <span className="tag-pill">Customer reviews</span>
        <h2>What <span className="accent">vets and students</span> are saying</h2>
      </div>
    </div>
    <div className="carousel">
      <div className="carousel-track">
        <div className="testimonial-placeholder"><span>&#128247;</span><p>Add testimonial image here</p></div>
        <div className="testimonial-placeholder"><span>&#128247;</span><p>Add testimonial image here</p></div>
        <div className="testimonial-placeholder"><span>&#128247;</span><p>Add testimonial image here</p></div>
        <div className="testimonial-placeholder"><span>&#128247;</span><p>Add testimonial image here</p></div>
        <div className="testimonial-placeholder"><span>&#128247;</span><p>Add testimonial image here</p></div>
        <div className="testimonial-placeholder"><span>&#128247;</span><p>Add testimonial image here</p></div>
        <div className="testimonial-placeholder"><span>&#128247;</span><p>Add testimonial image here</p></div>
        <div className="testimonial-placeholder"><span>&#128247;</span><p>Add testimonial image here</p></div>
        <div className="testimonial-placeholder"><span>&#128247;</span><p>Add testimonial image here</p></div>
        <div className="testimonial-placeholder"><span>&#128247;</span><p>Add testimonial image here</p></div>
        <div className="testimonial-placeholder"><span>&#128247;</span><p>Add testimonial image here</p></div>
        <div className="testimonial-placeholder"><span>&#128247;</span><p>Add testimonial image here</p></div>
      </div>
    </div>
  </section>

  
  <section className="cream center">
    <div className="wrap-narrow">
      <h2 style={{ fontSize: "clamp(1.4rem,2.6vw,1.9rem)" }}>7-Day <span className="accent">Guarantee</span></h2>
      <div className="guarantee-seal">
        <img src={guaranteeSeal.url} alt="7-day guarantee seal" />
      </div>
      <p style={{ maxWidth: "34rem", margin: "0 auto", color: "var(--cinza)", fontSize: "1rem", lineHeight: "1.6" }}>Yes, an unconditional 7-day guarantee. If you don&rsquo;t like it, we&rsquo;ll refund you, no questions asked.</p>
    </div>
  </section>

  
  <section>
    <div className="wrap">
      <div className="section-head">
        <span className="tag-pill" style={{ background: "var(--branco)" }}>Frequently asked questions</span>
        <h2>Still have <span className="accent">questions?</span></h2>
      </div>
      <div className="faq-list">
        <details className="faq-item">
          <summary>
            <span>What are the payment methods?</span>
            <span className="faq-icon">&#9662;</span>
          </summary>
          <p>Credit or debit card.</p>
        </details>

        <details className="faq-item">
          <summary>
            <span>Is the payment secure?</span>
            <span className="faq-icon">&#9662;</span>
          </summary>
          <p>Yes, 100% secure &mdash; we use one of the largest sales platforms in the world.</p>
        </details>

        <details className="faq-item">
          <summary>
            <span>Is there a guarantee?</span>
            <span className="faq-icon">&#9662;</span>
          </summary>
          <p>Yes, an unconditional 7-day guarantee. If you don&rsquo;t like it, we&rsquo;ll refund you, no questions asked.</p>
        </details>

        <details className="faq-item">
          <summary>
            <span>How will I get access to the material?</span>
            <span className="faq-icon">&#9662;</span>
          </summary>
          <p>As soon as your payment is approved, you&rsquo;ll receive an email with your access details.</p>
        </details>

        <details className="faq-item">
          <summary>
            <span>Are the doses up to date?</span>
            <span className="faq-icon">&#9662;</span>
          </summary>
          <p>Yes. Every dose was checked against a recognized veterinary formulary and official drug labeling. Whenever a label or registration changes, you get the updated version at no extra cost.</p>
        </details>

        <details className="faq-item">
          <summary>
            <span>Is this for students, or only for licensed veterinarians?</span>
            <span className="faq-icon">&#9662;</span>
          </summary>
          <p>Both. The flashcard is a quick-reference tool &mdash; it works whether you&rsquo;re in vet school, on clinical rotation, or already in practice.</p>
        </details>

        <details className="faq-item">
          <summary>
            <span>Is this a printed product?</span>
            <span className="faq-icon">&#9662;</span>
          </summary>
          <p>It&rsquo;s digital, in PDF format, with instant access. It comes with a print-ready A4 version so you can print the part you use most.</p>
        </details>

        <details className="faq-item">
          <summary>
            <span>Who reviewed the content?</span>
            <span className="faq-icon">&#9662;</span>
          </summary>
          <p>The material went through technical review by a licensed veterinarian (Dr. Michael Turner, DVM &middot; License No. 48213) covering indication, route, dose per species, and contraindications.</p>
        </details>

        <details className="faq-item">
          <summary>
            <span>Does this replace the drug label or a therapeutic formulary?</span>
            <span className="faq-icon">&#9662;</span>
          </summary>
          <p>No. It&rsquo;s a quick-reference tool built from official sources. The final dose, indication, and clinical decision always rest with the veterinarian responsible for the patient.</p>
        </details>
      </div>
    </div>
  </section>

  
  <section className="cream">
    <div className="wrap reviewer">
      <span className="tag-pill" style={{ background: "var(--branco)" }}>Technical review</span>
      <h3>Dr. Michael Turner</h3>
      <p className="credential">DVM &middot; License No. 48213</p>
      <p>All 150 veterinary pharmacology flashcards were reviewed for indication, drug class and mechanism of action, route, dose per species, precautions, and contraindications.</p>
      <p className="disclaimer">A quick-reference tool built from approved drug labels and recognized therapeutic formularies. It does not replace the package insert, your institution&rsquo;s protocol, or the clinical judgment of the veterinarian responsible for the patient.</p>
    </div>
  </section>

  
  <section className="dark final-cta">
    <div className="wrap">
      <p className="lead-in">Everything you need to stop guessing doses, starting today.<br />This price won&rsquo;t stay this low forever.</p>
      <a href="#pricing" className="cta-btn">I WANT MY FLASHCARDS</a>
      <div className="badge-line">
        <span>🔒 Secure checkout</span>
        <span className="badge-dot">•</span>
        <span>⚡ Instant access</span>
        <span className="badge-dot">•</span>
        <span>🛡️ 7-day guarantee</span>
      </div>
    </div>
  </section>

  
  <footer>&copy; 2026 CardsVet. All rights reserved.</footer>

</main>


      <Countdown />
    </div>
  );
}
