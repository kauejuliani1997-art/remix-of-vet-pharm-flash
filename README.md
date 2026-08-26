# Remix of Vet Pharm Flash

<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>CardsVet | Pocket Flashcards for Veterinary Pharmacology</title>
<meta name="description" content="150 veterinary pharmacology flashcards to check dose per species, route, and contraindication in seconds, without opening the textbook." />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />
<style>
  :root {
    --creme: hsl(42, 55%, 96%);
    --branco: hsl(0, 0%, 100%);
    --verde: hsl(168, 55%, 33%);
    --azul: hsl(193, 55%, 45%);
    --azul-profundo: hsl(193, 60%, 22%);
    --laranja: hsl(36, 87%, 59%);
    --grafite: hsl(200, 18%, 18%);
    --cinza: hsl(218, 12%, 42%);
    --borda: hsl(220, 13%, 91%);
    --radius-lg: 1.5rem;
    --radius-md: 1.25rem;
    --radius-sm: 0.75rem;
    --shadow-card: 0 2px 6px rgba(20,40,45,.08), 0 18px 44px rgba(20,40,45,.12);
  }

  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body {
    margin: 0;
    font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
    color: var(--grafite);
    background: var(--branco);
    -webkit-font-smoothing: antialiased;
    padding-bottom: 84px; /* space for sticky bar */
  }
  img { max-width: 100%; display: block; }
  .accent {
    font-family: 'Instrument Serif', ui-serif, Georgia, serif;
    font-style: italic;
    font-weight: 400;
  }
  .wrap { max-width: 72rem; margin: 0 auto; padding: 0 1.5rem; }
  .wrap-narrow { max-width: 56rem; margin: 0 auto; padding: 0 1.5rem; }
  section { padding: 5rem 0; }
  .dark { background: var(--azul-profundo); color: var(--branco); }
  .cream { background: var(--creme); }

  .tag-pill {
    display: inline-block;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 0.4rem 1rem;
    border-radius: 9999px;
    border: 1px solid rgba(255,255,255,.35);
    color: inherit;
    opacity: .85;
    margin-bottom: 1.5rem;
  }
  .dark .tag-pill { border-color: rgba(255,255,255,.3); }
  section:not(.dark) .tag-pill { border-color: var(--borda); color: var(--cinza); background: var(--branco); }

  h1, h2, h3, h4 { font-weight: 800; line-height: 1.15; margin: 0; }
  .center { text-align: center; }

  /* HERO */
  .hero { padding-top: 5.5rem; padding-bottom: 4rem; text-align: center; }
  .hero h1 { font-size: clamp(1.9rem, 4.2vw, 3.1rem); max-width: 56rem; margin: 0 auto; }
  .hero .sub { margin: 1.75rem auto 0; max-width: 40rem; font-size: 1.1rem; color: rgba(255,255,255,.82); }
  .cta-btn {
    display: inline-block;
    margin-top: 2.5rem;
    background: var(--branco);
    color: var(--azul-profundo);
    font-weight: 700;
    letter-spacing: 0.03em;
    font-size: 0.95rem;
    padding: 1.05rem 2.4rem;
    border-radius: 9999px;
    border: none;
    cursor: pointer;
    text-decoration: none;
    transition: transform .15s ease, box-shadow .15s ease;
    box-shadow: 0 10px 25px rgba(0,0,0,.18);
  }
  .cta-btn:hover { transform: translateY(-2px); box-shadow: 0 14px 30px rgba(0,0,0,.22); }
  .cta-btn.solid {
    background: var(--azul-profundo);
    color: var(--branco);
  }
  .hero-note { margin-top: 1rem; font-size: 0.85rem; color: rgba(255,255,255,.65); }

  /* CAROUSEL */
  .carousel { margin-top: 3.5rem; overflow: hidden; -webkit-mask-image: linear-gradient(90deg, transparent, #000 5% 95%, transparent); mask-image: linear-gradient(90deg, transparent, #000 5% 95%, transparent); }
  .carousel-track { display: flex; gap: 1.25rem; width: max-content; animation: scroll-left 42s linear infinite; padding: 0 1.25rem; }
  .carousel:hover .carousel-track { animation-play-state: paused; }
  .carousel-card { width: 230px; border-radius: var(--radius-sm); box-shadow: var(--shadow-card); flex-shrink: 0; }
  @keyframes scroll-left { from { transform: translateX(0); } to { transform: translateX(-50%); } }

  /* SECTION HEADERS */
  .section-head { text-align: center; max-width: 44rem; margin: 0 auto 3rem; }
  .section-head h2 { font-size: clamp(1.6rem, 3vw, 2.3rem); }
  .section-head p { margin-top: 1rem; color: var(--cinza); font-size: 1.02rem; }
  .dark .section-head p { color: rgba(255,255,255,.75); }

  /* FEATURE CARDS */
  .feature-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; margin-top: 3rem; }
  .feature-card { background: var(--branco); border: 1px solid var(--borda); border-radius: var(--radius-md); padding: 1.75rem 1.5rem; box-shadow: var(--shadow-card); }
  .feature-icon { font-size: 1.6rem; width: 3rem; height: 3rem; display: flex; align-items: center; justify-content: center; border-radius: 0.9rem; margin-bottom: 1.1rem; }
  .feature-card h4 { font-size: 1.02rem; margin-bottom: 0.5rem; }
  .feature-card p { font-size: 0.92rem; color: var(--cinza); line-height: 1.5; margin: 0; }

  .showcase-img { margin: 3rem auto 0; display: block; width: 100%; max-width: 56rem; border-radius: var(--radius-lg); box-shadow: var(--shadow-card); }
  .showcase-img.small { max-width: 26rem; }

  /* CHECKLIST CARD */
  .checklist-card { background: var(--branco); border: 1px solid var(--borda); border-radius: var(--radius-lg); box-shadow: var(--shadow-card); max-width: 44rem; margin: 3rem auto 0; overflow: hidden; }
  .checklist-card li { list-style: none; display: flex; align-items: center; gap: 0.9rem; padding: 1.15rem 1.75rem; border-bottom: 1px solid var(--borda); font-size: 0.98rem; }
  .checklist-card li:last-child { border-bottom: none; }
  .checklist-card ul { margin: 0; padding: 0; }
  .check-round { flex-shrink: 0; width: 1.4rem; height: 1.4rem; border-radius: 9999px; background: var(--azul); color: var(--branco); display: flex; align-items: center; justify-content: center; font-size: 0.8rem; }

  /* PRINT SPECS */
  .print-stack { position: relative; max-width: 28rem; margin: 3.5rem auto 4rem; aspect-ratio: 1 / 0.95; }
  .print-stack img { position: absolute; border-radius: var(--radius-sm); box-shadow: var(--shadow-card); border: 1px solid rgba(255,255,255,.15); }
  .print-stack img:nth-child(1) { width: 78%; top: 0; left: 0; transform: rotate(-7deg); }
  .print-stack img:nth-child(2) { width: 78%; top: 7%; right: 0; transform: rotate(6deg); }
  .print-stack img:nth-child(3) { width: 86%; bottom: 0; left: 50%; transform: translateX(-50%); z-index: 2; }

  .spec-list { max-width: 40rem; margin: 0 auto; display: flex; flex-direction: column; gap: 1.1rem; }
  .spec-list li { list-style: none; display: flex; gap: 0.85rem; align-items: flex-start; font-size: 1rem; color: rgba(255,255,255,.9); }
  .spec-list .check-round { background: var(--branco); color: var(--azul-profundo); margin-top: 0.15rem; }

  /* MODULE CARDS */
  .module-list-wrap { display: flex; flex-direction: column; gap: 1.25rem; margin-top: 3rem; }
  .module-card { background: var(--branco); border: 1px solid var(--borda); border-radius: var(--radius-lg); padding: 1.75rem 2rem; box-shadow: 0 1px 2px rgba(20,40,45,.04), 0 10px 30px rgba(20,40,45,.05); }
  .module-head { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.75rem; border-bottom: 1px solid var(--borda); padding-bottom: 1.1rem; margin-bottom: 1.1rem; }
  .module-head-left { display: flex; align-items: center; gap: 0.85rem; flex-wrap: wrap; }
  .module-head h3 { font-size: 1.15rem; }
  .module-badge { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; background: hsl(36, 87%, 92%); color: hsl(30, 70%, 38%); padding: 0.3rem 0.75rem; border-radius: 9999px; }
  .module-count { font-size: 0.85rem; color: var(--cinza); white-space: nowrap; }
  .module-list { list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.65rem 1.5rem; }
  .module-list li { display: flex; align-items: center; gap: 0.6rem; font-size: 0.92rem; color: hsl(200,15%,30%); }
  .module-list .check { color: var(--azul); font-weight: 700; flex-shrink: 0; }

  /* BONUSES */
  .bonus-head { text-align: center; font-size: clamp(1.3rem, 2.4vw, 1.8rem); font-weight: 800; margin: 4rem 0 2.5rem; }
  .bonus-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
  .bonus-item { display: flex; gap: 1.25rem; background: var(--creme); border-radius: var(--radius-md); padding: 1.5rem 1.75rem; }
  .bonus-num { font-family: 'Instrument Serif', serif; font-style: italic; font-size: 2.1rem; color: var(--laranja); flex-shrink: 0; line-height: 1; }
  .bonus-item h4 { font-size: 1rem; margin-bottom: 0.4rem; }
  .bonus-item p { margin: 0; font-size: 0.9rem; color: var(--cinza); line-height: 1.5; }

  /* PRICING */
  .pricing-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.75rem; max-width: 52rem; margin: 3.5rem auto 0; align-items: start; }
  .price-card { position: relative; background: hsl(193, 55%, 18%); border: 1px solid rgba(255,255,255,.12); border-radius: var(--radius-lg); padding: 2.25rem 2rem; }
  .price-card.featured { background: var(--branco); color: var(--grafite); border-color: var(--branco); box-shadow: 0 25px 50px -12px rgba(0,0,0,.35); }
  .best-seller { position: absolute; top: -14px; left: 50%; transform: translateX(-50%); background: var(--laranja); color: hsl(30,60%,18%); font-size: 0.7rem; font-weight: 800; letter-spacing: 0.06em; text-transform: uppercase; padding: 0.4rem 1rem; border-radius: 9999px; white-space: nowrap; }
  .price-card h3 { font-size: 1.15rem; margin-bottom: 1.25rem; }
  .price-label { font-size: 0.7rem; letter-spacing: 0.08em; text-transform: uppercase; opacity: .65; margin-bottom: 0.35rem; }
  .price-value { font-size: 2.6rem; font-weight: 800; margin-bottom: 1.5rem; }
  .price-card ul { list-style: none; margin: 0 0 1.75rem; padding: 0; display: flex; flex-direction: column; gap: 0.85rem; }
  .price-card li { display: flex; gap: 0.65rem; align-items: flex-start; font-size: 0.92rem; line-height: 1.4; }
  .price-card .check-round { background: var(--azul); color: var(--branco); width: 1.2rem; height: 1.2rem; font-size: 0.68rem; margin-top: 0.1rem; }
  .price-card.featured .check-round { background: var(--azul-profundo); }
  .plan-btn { display: block; text-align: center; width: 100%; padding: 0.95rem; border-radius: 9999px; font-weight: 700; font-size: 0.85rem; letter-spacing: 0.02em; border: none; cursor: pointer; background: transparent; color: var(--branco); border: 1.5px solid rgba(255,255,255,.4); text-decoration: none; }
  .price-card.featured .plan-btn { background: var(--azul-profundo); color: var(--branco); border-color: var(--azul-profundo); }
  .price-note { text-align: center; font-size: 0.82rem; color: rgba(255,255,255,.6); margin-top: 1rem; }
  .trust-line { text-align: center; margin-top: 3rem; font-size: 0.88rem; color: rgba(255,255,255,.75); }

  /* REVIEWER */
  .reviewer { max-width: 40rem; margin: 0 auto; text-align: center; }
  .reviewer-avatar { width: 4.5rem; height: 4.5rem; border-radius: 9999px; background: var(--creme); margin: 0 auto 1.25rem; display: flex; align-items: center; justify-content: center; font-size: 1.6rem; color: var(--azul-profundo); font-weight: 700; }
  .reviewer h3 { font-size: 1.15rem; margin-bottom: 0.2rem; }
  .reviewer .credential { font-size: 0.85rem; color: var(--cinza); margin-bottom: 1.5rem; }
  .reviewer p { font-size: 0.95rem; color: var(--cinza); line-height: 1.65; margin: 0 0 1rem; }
  .reviewer p.disclaimer { font-size: 0.85rem; color: hsl(218,10%,55%); }

  /* FAQ */
  .faq-list { max-width: 44rem; margin: 3rem auto 0; display: flex; flex-direction: column; gap: 0.85rem; }
  .faq-item { border: 1px solid var(--borda); border-radius: var(--radius-md); padding: 1.15rem 1.5rem; background: var(--branco); }
  .faq-item summary { list-style: none; cursor: pointer; display: flex; align-items: center; justify-content: space-between; gap: 1rem; font-weight: 600; font-size: 0.98rem; }
  .faq-item summary::-webkit-details-marker { display: none; }
  .faq-icon { flex-shrink: 0; width: 1.6rem; height: 1.6rem; border-radius: 9999px; background: var(--creme); color: var(--azul-profundo); display: flex; align-items: center; justify-content: center; font-size: 1rem; transition: transform .15s ease; }
  .faq-item[open] .faq-icon { transform: rotate(45deg); }
  .faq-item p { margin: 0.9rem 0 0; color: var(--cinza); font-size: 0.92rem; line-height: 1.6; }

  /* STICKY BAR */
  .sticky-bar { position: fixed; bottom: 0; left: 0; right: 0; background: var(--branco); border-top: 1px solid var(--borda); box-shadow: 0 -8px 24px rgba(0,0,0,.06); padding: 0.9rem 1.5rem; display: flex; align-items: center; justify-content: space-between; gap: 1rem; z-index: 50; }
  .sticky-bar .info h4 { font-size: 1rem; margin-bottom: 0.15rem; }
  .sticky-bar .info p { margin: 0; font-size: 0.82rem; color: var(--cinza); }
  .sticky-bar .cta-btn { margin-top: 0; padding: 0.85rem 1.75rem; font-size: 0.85rem; }

  @media (max-width: 860px) {
    .feature-grid { grid-template-columns: repeat(2, 1fr); }
    .module-list { grid-template-columns: repeat(2, 1fr); }
    .bonus-grid { grid-template-columns: 1fr; }
    .pricing-grid { grid-template-columns: 1fr; }
    section { padding: 3.5rem 0; }
    .sticky-bar .info p { display: none; }
  }
  @media (max-width: 520px) {
    .module-list { grid-template-columns: 1fr; }
  }





  


    


      

150 flashcards for veterinary pharmacology with the dose, route, and contraindication of every drug


      

Dog, cat, horse, and cattle — the dose for every species, ready to check in seconds.


      I WANT MY FLASHCARDS
      

Instant download · PDF for phone and print · One-time payment



      


        


          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
        


      


    



  


    


      


        Veterinary Pharmacology Flashcards
        

From the PDF to your coat pocket


        

Every flashcard follows the same structure. Learn to read one, and you already know how to read them all.


      



      

      


        

Inside a flashcard


      


      

      


        


          

🎯


          

Prescribe with confidence


          

The right dose, route, and contraindication for each species, all in one place.


        


        


          

⏱️


          

Look it up in seconds


          

One drug per flashcard. No scrolling, no searching, no opening the textbook.


        


        


          

🛡️


          

Lower risk at the point of care


          

The species alert sits right in front of you, before you calculate the dose.


        


        


          

📚


          

Works for exams too


          

The same material you use on rotation is what you review for exams and residency.


        


      



      


        Made for you if you want to
        

Built for anyone who freezes up on pharmacology


      



      


        


          

✓Calculate a dose without freezing in front of the patient


          

✓Check the cat’s dose without assuming it’s the same as the dog’s


          

✓Know instantly what’s prohibited in each species


          

✓Show up to rotation understanding what’s being prescribed


          

✓Review pharmacology for exams and residency without rereading the whole textbook


        


      


    



  


    


      Ready to print
      

8 flashcards per sheet — just cut them out


      

The material comes pre-laid out on A4 sheets with cut marks. Print it, cut it, laminate it — no assembly required.



      


        
        
        
      



      


        

✓6.7 × 10 cm flashcard — fits in your coat pocket and badge holder


        

✓Cut marks on the margins, so you can cut edge-to-edge with a ruler


        

✓19 sheets cover the entire set


      



      I WANT THE FLASHCARDS
    



  


    


      


        Full table of contents
        

All 150 flashcards, listed one by one


        

No “and much more.” Everything is listed below, one by one, before you buy.


      



      


        


          


            


              

Fundamentals & Dose Calculation


              MODULE 01
            


            12 flashcards
          


          


            

✓How to Calculate the Dose


            

✓Volume from Concentration


            

✓The Rule of Three in Practice


            

✓Concentration Conversion


            

✓Routes of Administration


            

✓Prescription Abbreviations


            

✓How to Write a Prescription


            

✓Special Control Prescription Forms


            

✓Prohibited Drugs in Food-Producing Animals


            

✓Withdrawal Period


            

✓Pharmacokinetics (ADME)


            

✓Why Cats Metabolize Differently


          


        



        


          


            


              

Anesthesia, Sedation & Premedication


              MODULE 02
            


            18 flashcards
          


          


            

✓Acepromazine


            

✓Xylazine


            

✓Detomidine


            

✓Dexmedetomidine


            

✓Diazepam


            

✓Midazolam


            

✓Ketamine


            

✓Propofol


            

✓Alfaxalone


            

✓Tiletamine + Zolazepam


            

✓Etomidate


            

✓Isoflurane


            

✓Sevoflurane


            

✓Lidocaine


            

✓Bupivacaine


            

✓Atropine


            

✓Premedication Protocols


            

✓Locoregional Blocks


          


        



        


          


            


              

Analgesia — Opioids, NSAIDs & Adjuvants


              MODULE 03
            


            20 flashcards
          


          


            

✓Morphine


            

✓Methadone


            

✓Fentanyl


            

✓Buprenorphine


            

✓Butorphanol


            

✓Tramadol


            

✓Meperidine (Pethidine)


            

✓Meloxicam


            

✓Carprofen


            

✓Firocoxib


            

✓Ketoprofen


            

✓Flunixin Meglumine


            

✓Dipyrone (Metamizole)


            

✓Phenylbutazone


            

✓Robenacoxib


            

✓Grapiprant


            

✓Gabapentin


            

✓Bedinvetmab


            

✓Frunevetmab


            

✓Multimodal Pain Management


          


        



        


          


            


              

Antimicrobials


              MODULE 04
            


            30 flashcards
          


          


            

✓Penicillin G


            

✓Amoxicillin


            

✓Amoxicillin + Clavulanate


            

✓Ampicillin


            

✓Cephalexin


            

✓Cefovecin


            

✓Ceftriaxone


            

✓Ceftiofur


            

✓Gentamicin


            

✓Amikacin


            

✓Doxycycline


            

✓Oxytetracycline


            

✓Azithromycin


            

✓Tylosin


            

✓Clindamycin


            

✓Tulathromycin


            

✓Enrofloxacin


            

✓Marbofloxacin


            

✓Ciprofloxacin


            

✓Sulfa + Trimethoprim


            

✓Metronidazole


            

✓Chloramphenicol


            

✓Florfenicol


            

✓Rifampin


            

✓Nitrofurantoin


            

✓Itraconazole


            

✓Ketoconazole


            

✓Fluconazole


            

✓Terbinafine


            

✓Rational Use & Resistance


          


        



        


          


            


              

Antiparasitics


              MODULE 05
            


            16 flashcards
          


          


            

✓Ivermectin


            

✓Moxidectin


            

✓Milbemycin Oxime


            

✓Selamectin


            

✓Doramectin


            

✓Fipronil


            

✓Fluralaner


            

✓Afoxolaner


            

✓Sarolaner


            

✓Lotilaner


            

✓Imidacloprid


            

✓Praziquantel


            

✓Fenbendazole


            

✓Albendazole


            

✓Pyrantel


            

✓Toltrazuril


          


        



        


          


            


              

Cardiovascular & Diuretics


              MODULE 06
            


            14 flashcards
          


          


            

✓Furosemide


            

✓Spironolactone


            

✓Hydrochlorothiazide


            

✓Benazepril


            

✓Enalapril


            

✓Pimobendan


            

✓Digoxin


            

✓Diltiazem


            

✓Atenolol


            

✓Sildenafil


            

✓Amlodipine


            

✓Clopidogrel


            

✓Mannitol


            

✓ACVIM Staging


          


        



        


          


            


              

GI & Antiemetics


              MODULE 07
            


            10 flashcards
          


          


            

✓Maropitant


            

✓Metoclopramide


            

✓Ondansetron


            

✓Omeprazole


            

✓Famotidine


            

✓Sucralfate


            

✓Misoprostol


            

✓Cisapride


            

✓Lactulose


            

✓Butylscopolamine


          


        



        


          


            


              

Endocrine & Corticosteroids


              MODULE 08
            


            10 flashcards
          


          


            

✓Prednisolone


            

✓Dexamethasone


            

✓Hydrocortisone


            

✓Triamcinolone


            

✓Corticosteroid Equivalence


            

✓Insulin


            

✓Levothyroxine


            

✓Methimazole


            

✓Trilostane


            

✓Oxytocin


          


        



        


          


            


              

Dermatology & Allergy


              MODULE 09
            


            6 flashcards
          


          


            

✓Oclacitinib


            

✓Lokivetmab


            

✓Cyclosporine


            

✓Diphenhydramine


            

✓Chlorhexidine


            

✓Atopic Dermatitis


          


        



        


          


            


              

Emergencies, Antidotes & Fluid Therapy


              MODULE 10
            


            14 flashcards
          


          


            

✓Epinephrine


            

✓CPR Protocol


            

✓Anaphylaxis Management


            

✓Fluid Therapy: Maintenance


            

✓Fluid Therapy: Shock


            

✓Fluid Choice


            

✓Naloxone


            

✓Atipamezole


            

✓Flumazenil


            

✓N-acetylcysteine


            

✓Vitamin K1


            

✓Methylene Blue


            

✓Activated Charcoal


            

✓Poisonings & Antidotes


          


        


      



      

Plus 5 bonuses included in the Complete Plan


      


        


          01
          


            

Ready-to-Use Dose & Dilution Conversion Chart


            

From mg/kg to mL, with the most common dilutions — calculate without errors.


          


        



        


          02
          


            

Printable A4 Poster of Drugs Prohibited by Species


            

Print it and pin it up on the clinic or lab wall.


          


        



        


          03
          


            

Checklist of the 10 Most Common Veterinary Prescription Errors


            

What causes the most dosing errors, and how to avoid each one.


          


        



        


          04
          


            

20 Annotated Clinical Cases on Therapeutic Choice


            

Puppies/kittens, pregnant, cardiac, and renal patients, solved step by step.


          


        



        


          05
          


            

7-Day Study Schedule Using the Flashcards


            

For anyone using the material for exams or residency.


          


        


      


    



  


    


      


        The offer
        

PUT THE FLASHCARDS in your pocket


        

One-time payment on both plans. No subscription, no monthly fee.


      



      


        


          

Basic Plan


          

One-time payment


          

$17.90


          


            

✓150 veterinary pharmacology flashcards


            

✓Print-ready A4 version


            

✓Free updates whenever the label or regulatory registration changes


            

✓30-day guarantee


          


          I WANT JUST THE BASIC PLAN
          

There’s a better deal right next to this one


        



        


          Best seller
          

Complete Plan


          

One-time payment


          

$27.90


          


            

✓150 veterinary pharmacology flashcards


            

✓Print-ready A4 version


            

✓Free updates whenever the label or regulatory registration changes


            

✓🎁 Dose & Dilution Conversion Chart


            

✓🎁 A4 Poster of Drugs Prohibited by Species


            

✓🎁 Checklist of the 10 Most Common Prescription Errors


            

✓🎁 20 Annotated Clinical Cases


            

✓🎁 7-Day Study Schedule


            

✓30-day guarantee


          


          I WANT THE COMPLETE PLAN
        


      



      

🛡️ 30-day guarantee · Secure payment · Instant download


    



  


    


      Technical review
      

Dr. Rafael Mendes Carvalho


      

CRMV‑SP 58.742


      

All 150 veterinary pharmacology flashcards were reviewed for indication, drug class and mechanism of action, route, dose per species, precautions, and contraindications.


      

A quick-reference tool built from approved drug labels and recognized therapeutic formularies. It does not replace the package insert, your institution’s protocol, or the clinical judgment of the veterinarian responsible for the patient.


    



  


    


      


        Frequently asked questions
        

Still have questions?


      


      


        
          
            What are the payment methods?
            +
          
          

Credit card or Pix.


        

        
          
            Is the payment secure?
            +
          
          

Yes, 100% secure — we use one of the largest sales platforms in the world.


        

        
          
            Is there a guarantee?
            +
          
          

Yes, an unconditional 30-day guarantee. If you don’t like it, we refund you, no questions asked.


        

        
          
            How will I get access to the material?
            +
          
          

As soon as your payment is approved, you’ll receive an email and a WhatsApp message with your access details.


        

        
          
            Are the doses up to date?
            +
          
          

Yes. Every dose was checked against a recognized veterinary formulary and official drug labeling. Whenever a label or registration changes, you get the updated version at no extra cost.


        

        
          
            Is this for students, or only for licensed veterinarians?
            +
          
          

Both. The flashcard is a quick-reference tool — it works whether you’re in vet school, on clinical rotation, or already in practice.


        

        
          
            Is this a printed product?
            +
          
          

It’s digital, in PDF format, with instant access. It comes with a print-ready A4 version so you can print the part you use most.


        

        
          
            Who reviewed the content?
            +
          
          

The material went through technical review by a licensed veterinarian (Dr. Rafael Mendes Carvalho, CRMV-SP 58.742) covering indication, route, dose per species, and contraindications.


        

        
          
            Does this replace the drug label or a therapeutic formulary?
            +
          
          

No. It’s a quick-reference tool built from official sources. The final dose, indication, and clinical decision always rest with the veterinarian responsible for the patient.


        
      


    



  


    


      

150 flashcards


      

Complete Plan for $27.90 · one-time payment


    






Recrie esta página exatamente como está neste HTML — mesmo layout, mesmas cores, mesmo texto, sem redesenhar nada. Pode adaptar para React/Tailwind, mas preserve a estrutura e o visual originais.  coloque efeito de pulsar no botoes.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/6a564ef6-5c7f-4345-87a9-e936219db85f).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
