// Fuorisalone 2026 — Event-Daten
// Koordinaten sind Approximationen basierend auf Straßenadressen (Milan)
// days: Array der Tage 20–26, an denen das Event geöffnet ist

const EVENTS = [
  // ============ BRERA ============
  {
    id: "brera-grandseiko", name: "Grand Seiko", exhibition: "The Nature of Time",
    venue: "Galleria Il Castello", address: "Via Brera 16",
    district: "Brera", coords: [45.4722, 9.1880], pin: "⏱",
    description: "Immersiver Parcours mit 3 jap. Künstlern (Shindo, Kawahara, Abe) zu Washi-Papier, Atmosphäre & CG-Film — Zeit als Naturerfahrung.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false, link: null }, infoLink: "https://www.fuorisalone.it/it/2026/eventi/6402/The-Nature-of-Time"
  },
  {
    id: "brera-valcucine", name: "Valcucine", exhibition: "Crafting Forward",
    venue: "Valcucine Milano Brera", address: "Corso Garibaldi 99",
    district: "Brera", coords: [45.4790, 9.1860], pin: "🍳",
    description: "Showroom-Reinszenierung Zanellato/Bortotto: Industrie trifft Handwerk, Küche als evolutives Ökosystem.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false }, infoLink: "https://www.breradesigndistrict.it/en/news/brera-design-week/valcucine-crafting-forward/"
  },
  {
    id: "brera-baccarat", name: "Baccarat", exhibition: "Crystal Crypt",
    venue: "Via Marco Formentini 10", address: "Via Marco Formentini 10",
    district: "Brera", coords: [45.4715, 9.1875], pin: "💎",
    description: "Sci-Fi-Kathedrale kuratiert von Emmanuelle Luciani mit Bethan Laura Wood (Mille Fleurs / Zénith-Leuchter).",
    days: [20, 21, 22, 23, 24, 25, 26], highDemand: true,
    reservation: { required: false, note: "empfohlen — lange Schlangen" },
    infoLink: "https://www.dezeen.com/eventsguide/2026/04/baccarat-crystal-crypt-milan-2026/"
  },
  {
    id: "brera-veuveclicquot", name: "Veuve Clicquot × Yinka Ilori", exhibition: "Chasing the Sun",
    venue: "Mediateca Santa Teresa", address: "Via della Moscova 28",
    district: "Brera", coords: [45.4795, 9.1875], pin: "☀",
    description: "Farbintensive Ode an Sonne / Joie de Vivre: Sun Holder, Sun Totems, Clicquot Café.",
    days: [20, 21, 22, 23, 24, 25, 26], highDemand: true,
    reservation: { required: true, link: "https://www.veuveclicquot.com/en-int/TeaserChasingtheSun.html", note: "Pre-Registration" }
  },
  {
    id: "brera-glo", name: "glo™ × Numero Cromatico", exhibition: "Your Own Universe / glo for art",
    venue: "Palazzo Moscova", address: "Via della Moscova 18",
    district: "Brera", coords: [45.4790, 9.1878], pin: "🌀",
    description: "Interaktives Portal aus Licht, Sound, Düften & KI-Oracle im Innenhof.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false }, infoLink: "https://www.breradesigndistrict.it/en/news/brera-design-week/glo-for-art/"
  },
  {
    id: "brera-nilufar-gallery", name: "Nilufar Gallery", exhibition: "La Casa Magica",
    venue: "Galleria Nilufar", address: "Via della Spiga 32",
    district: "Brera", coords: [45.4705, 9.1960], pin: "🪄",
    description: "Ritualistische Hausarchäologie (Studio Vedèt / Space Caviar) — Gallery-Teil.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false, link: "https://nilufar.com/exhibitions-and-fairs/milan-design-week-2026/" }
  },
  {
    id: "brera-nilufar-depot", name: "Nilufar Depot", exhibition: "Grand Hotel",
    venue: "Nilufar Depot", address: "Viale Vincenzo Lancetti 34",
    district: "Brera", coords: [45.4935, 9.1845], pin: "🏨",
    description: "Fiktives Hotel mit 4 Designer-Suiten (david/nicolas, Carandini, Hicks, Wood). Abseits (N Porta Garibaldi).",
    days: [20, 21, 22, 23, 24, 25, 26], highDemand: true,
    reservation: { required: true, link: "https://nilufar.com/exhibitions-and-fairs/milan-design-week-2026/", note: "Slot-Buchung Depot" }
  },
  {
    id: "brera-fornasetti", name: "Fornasetti", exhibition: "Forever Fornasetti: New Encounters + Fornasetti Fiori",
    venue: "Fornasetti Flagship", address: "Corso Venezia 21A / Via Senato 2",
    district: "Brera", coords: [45.4690, 9.1965], pin: "🌸",
    description: "Neu gestalteter Flagship als 'living archive' + Floral-Residency mit Fjura.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false }, infoLink: "https://www.dezeen.com/eventsguide/2026/04/forever-fornasetti-new-encounters-milan-2026/"
  },
  {
    id: "brera-acdf", name: "ACDF Uzbekistan", exhibition: "When Apricots Blossom",
    venue: "Palazzo Citterio", address: "Via Brera 12",
    district: "Brera", coords: [45.4728, 9.1871], pin: "🌺",
    description: "Immersive Schau zu Textil, Food, Shelter — 12 Designer (Wood, Laposse, Rusak) + Aral-See-Film.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: true, link: "https://www.fuorisalone.it/en/2026/events/6482/When-Apricots-Blossom", note: "empfohlen" }
  },
  {
    id: "brera-hermes", name: "Hermès", exhibition: "Objektkollektion Home 2026",
    venue: "La Pelota Jai Alai", address: "Via Palermo 10",
    district: "Brera", coords: [45.4741, 9.1862], pin: "🧡",
    description: "Neue Möbel, Textilien, Home-Objekte in Szenografie von Macaux Perelman / Fabry — urbane Leichtigkeit. Lange Wartezeit einplanen.",
    days: [22, 23, 24, 25, 26], highDemand: true,
    reservation: { required: false, note: "Walk-in, aber 1–3 h Schlange" }
  },
  {
    id: "brera-linaghotmeh", name: "MoscaPartners Variations", exhibition: "Metamorphosis in Motion by Lina Ghotmeh",
    venue: "Palazzo Litta", address: "Corso Magenta 24",
    district: "Brera", coords: [45.4655, 9.1815], pin: "🏛",
    description: "Rosa Stoff-Labyrinth im Ehrenhof — Besucher als Architektur-Elemente (Ghotmehs erstes ital. Outdoor-Solo).",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false }, infoLink: "https://www.dezeen.com/eventsguide/2026/04/metamorphosis-in-motion-lina-ghotmeh-milan-2026/"
  },
  {
    id: "brera-orto", name: "Orto Botanico di Brera", exhibition: "INTERNI Materiae: Garden of the Hesperides + L'Armonia è qui",
    venue: "Orto Botanico", address: "Via Brera 28",
    district: "Brera", coords: [45.4725, 9.1882], pin: "🌿",
    description: "Hölzerner Portikus / Sonnenuhr + märchenhafter Bewässerungsgarten.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false, note: "freier Eintritt" }
  },
  {
    id: "brera-eataly", name: "Eataly × Smeraldo", exhibition: "CASA von Giotto Calendoli",
    venue: "Eataly Smeraldo", address: "Piazza XXV Aprile 10",
    district: "Brera", coords: [45.4810, 9.1895], pin: "🍝",
    description: "Installation zur emotionalen Dimension des Essens + Limited-Edition Spaghetti.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false }
  },
  {
    id: "brera-casabrera", name: "Casa Brera Hotel", exhibition: "Margherita Maccapani Missoni Pop-up",
    venue: "Casa Brera Hotel", address: "Piazzetta Maurilio Bossi 2",
    district: "Brera", coords: [45.4712, 9.1875], pin: "🏨",
    description: "Co-Branded Limited Editions im Living Dehors + Tour privater Residenzen (inkl. Casa Fornasetti, ticketpflichtig).",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false, link: "https://www.breradesigndistrict.it/en/location/casa-brera/", note: "Residenz-Touren ticketpflichtig" }
  },
  {
    id: "brera-ecal-google", name: "ECAL × Google", exhibition: "A Message From Tomorrow",
    venue: "Spazio Orso 16", address: "Via dell'Orso 16",
    district: "Brera", coords: [45.4693, 9.1862], pin: "📱",
    description: "Master Product Design-Studierende der ECAL entwickeln mit Googles Industrial-Design-Team konzeptionelle mobile Hardware rund um alltägliche Rituale.",
    days: [21, 22, 23, 24, 25],
    reservation: { required: false, note: "21.–25.4., 10–20 h" }
  },

  // ============ TORTONA / BOVISA ============
  {
    id: "tortona-samsung", name: "Samsung", exhibition: "Design is an Act of Love",
    venue: "Superstudio+", address: "Via Tortona 27",
    district: "Tortona", coords: [45.4515, 9.1695], pin: "💙",
    description: "Immersives Labor — experimentelle Konzepte + Serienprodukte, 'Human Side of Tech'. 2–3 h Schlange erwartbar.",
    days: [20, 21, 22, 23, 24, 25, 26], highDemand: true,
    reservation: { required: false, link: "https://www.dezeen.com/eventsguide/2026/04/design-is-an-act-of-love-samsung-milan-2026/", note: "empfohlen" }
  },
  {
    id: "tortona-moooi", name: "Moooi", exhibition: "25 & Promising (SuperNova)",
    venue: "Superstudio Più", address: "Via Tortona 27",
    district: "Tortona", coords: [45.4513, 9.1693], pin: "◆",
    description: "1.000 m² silbern verkleidete Jubiläumsschau von Marcel Wanders — Icons reengineered.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false, link: "https://www.moooi.com/en/story/milan-design-week-2026", note: "empfohlen" }
  },
  {
    id: "tortona-iqos", name: "IQOS × Devialet", exhibition: "Soundsorial Design",
    venue: "Opificio 31", address: "Via Tortona 31",
    district: "Tortona", coords: [45.4512, 9.1692], pin: "🔊",
    description: "Wasser, Bewegung, menschliche Stimmen — sensorisches Klang-Archiv + Limited-Capsule. ID-Check 18+.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: true, link: "https://www.dezeen.com/eventsguide/2026/04/soundsorial-design-iqos-milan-2026/" }
  },
  {
    id: "tortona-swatch", name: "Swatch", exhibition: "AI-DADA Laboratory",
    venue: "Opificio 31", address: "Via Tortona 31",
    district: "Tortona", coords: [45.4511, 9.1694], pin: "⌚",
    description: "KI generiert live aus 40 Jahren Swatch-Archiv ein einzigartiges New-Gent-Design.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false, note: "Walk-in (10–21 h)" },
    infoLink: "https://www.swatchgroup.com/en/services/archive/2026/swatch-ai-dada"
  },
  {
    id: "tortona-geberit", name: "Geberit", exhibition: "Flow.Form.Function / RŌS",
    venue: "Opificio 31", address: "Via Tortona 31",
    district: "Tortona", coords: [45.4513, 9.1691], pin: "💧",
    description: "800 m² permanentes Experience Center + Atelier Oï-Installation mit 300 Stahlfedern + Wassertropfen.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false, link: "https://www.geberit.com/en/milan-design-week", note: "empfohlen" }
  },
  {
    id: "tortona-base", name: "BASE Milano × Continental", exhibition: "Sound of Premium",
    venue: "BASE", address: "Via Bergognone 34",
    district: "Tortona", coords: [45.4537, 9.1680], pin: "🎧",
    description: "Immersive Listening-Experience (WOA Studio) in 3 Akten: Chaos, Harmonie, Stille — Reifen-Technologie als Stadtklang.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false, note: "frei" }, infoLink: "https://base.milano.it/en/series/design-week-base-2026/"
  },
  {
    id: "tortona-supercity", name: "Superstudio Maxi (Barona)", exhibition: "SuperCity (Cassina, Moroso, Zanotta, Living Divani, Cappellini)",
    venue: "Superstudio Maxi", address: "Via Moncucco 35",
    district: "Tortona", coords: [45.4395, 9.1420], pin: "🏙",
    description: "Ideale multikulturelle Stadt mit 15 Projekten + ICFF. Abseits, nur Uber/Tram.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false, link: "https://design.superstudioevents.com/supercity/", note: "empfohlen" }
  },
  {
    id: "tortona-bovisa", name: "Superstudio Village (Bovisa)", exhibition: "SuperPlayground / Graphic Days",
    venue: "Superstudio Village", address: "Via Pericle Negrotto 59",
    district: "Tortona", coords: [45.5007, 9.1700], pin: "🎨",
    description: "33 junge Studios aus 30 Ländern + Graphic Days Turin (Posterheroes, Print-Workshops). Bovisa, weit.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false, link: "https://design.superstudioevents.com/superplayground/", note: "empfohlen" }
  },

  // ============ 5VIE ============
  {
    id: "5vie-candotto", name: "Denny Candotto", exhibition: "IN-HABIT-OUT",
    venue: "Via Cesare Correnti 14 (Wandvitrinen)", address: "Via Cesare Correnti 14",
    district: "5VIE", coords: [45.4608, 9.1800], pin: "5",
    description: "5 Wand-Vitrinen als Miniatur-Architekturen zu Milaneser Wohnepochen (innen / bewohnen / aussen).",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false }
  },
  {
    id: "5vie-lewis", name: "Elizabeth Lewis × SWING Gallery", exhibition: "Cosmic Meadow",
    venue: "SWING Design Gallery", address: "Via Nerino 3",
    district: "5VIE", coords: [45.4613, 9.1822], pin: "🌾",
    description: "Biomorphe Keramikvasen/-skulpturen (australische Künstlerin) — Mythologie + natürlicher Zerfall.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false }
  },
  {
    id: "5vie-vettese", name: "Giuditta Vettese", exhibition: "La Fiamma che non Brucia",
    venue: "Cavallerizze, Museo Scienza", address: "Via Olona 6 / Via San Vittore 21",
    district: "5VIE", coords: [45.4615, 9.1712], pin: "🔥",
    description: "Glasurkeramik-Skulptur (80 cm) als Hausaltar + Performances mit Wasser-/Körper-Sensorik (Komponist Jacopo Gino).",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false }
  },
  {
    id: "5vie-hub", name: "5VIE Hub", exhibition: "10 Neuproduktionen (Sara Ricciardi, Noe Kuremoto u.a.)",
    venue: "Cavallerizze, Museo Scienza", address: "Via San Vittore 21 (Zugang Via Olona 4)",
    district: "5VIE", coords: [45.4615, 9.1715], pin: "5",
    description: "Haupt-Hub des Distrikts — kompakt ablaufbar; Talks, Live-Performances, Editionen.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false }, infoLink: "https://www.fuorisalone.it/en/2026/itinerary/189/5vie-design-week-3"
  },
  {
    id: "5vie-masterly", name: "Masterly – The Dutch", exhibition: "10. Jubiläum",
    venue: "Palazzo dei Giureconsulti", address: "Piazza Mercanti 2",
    district: "5VIE", coords: [45.4651, 9.1880], pin: "🇳🇱",
    description: "25 Räume / 100+ niederländische Aussteller (Wanders, Mecanoo, Byborre, Rituals) + Edelkoort Wunderkammer.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: true, link: "https://www.dezeen.com/eventsguide/2026/04/masterly-the-dutch-milan-2026/", note: "Ticket/Registrierung" }
  },

  // ============ ISOLA ============
  {
    id: "isola-gallery", name: "Isola Design Gallery", exhibition: "Baguette Studio, Moldovan × Arbore, Sarkar",
    venue: "Fabbrica Sassetti (Hauptvenue)", address: "Via Filippo Sassetti 31",
    district: "Isola", coords: [45.4872, 9.2032], pin: "I",
    description: "7. Edition Collectible Design · In Situ (Moldovan/Arbore) · Rasa (Indian Collective).",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: true, link: "https://isola.design/rsvp-isoladesignfestival2026", note: "Festival-RSVP (kostenlos)" }
  },
  {
    id: "isola-nowaste", name: "No Space for Waste", exhibition: "reEdit, Müller, Geometry of Waste",
    venue: "Fabbrica Sassetti", address: "Via Filippo Sassetti 31",
    district: "Isola", coords: [45.4872, 9.2033], pin: "♻",
    description: "reEdit Tisch-/Sitzsystem · Müller Teppichkollektion aus Textilabfällen.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: true, link: "https://isola.design/rsvp-isoladesignfestival2026", note: "Festival-RSVP" }
  },
  {
    id: "isola-nosfanzia", name: "Nosfanzia", exhibition: "OneForm",
    venue: "Fabbrica Sassetti", address: "Via Filippo Sassetti 31",
    district: "Isola", coords: [45.4873, 9.2031], pin: "👜",
    description: "Nahtlos 3D-gedruckte Taschen mit anpassbarem Design + Wechselzubehör.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: true, link: "https://isola.design/rsvp-isoladesignfestival2026", note: "Festival-RSVP" }
  },
  {
    id: "isola-casaoz", name: "Casa OZ (Anna Orlenok)", exhibition: "Living in the middle of skyscrapers",
    venue: "Privates ex-Ringhiera-Haus", address: "Via Gaetano de Castillia 24 C",
    district: "Isola", coords: [45.4842, 9.1905], pin: "🏠",
    description: "Privates ex-Ringhiera-Haus geöffnet — zeitgenössisches Refugium zwischen Wolkenkratzern.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: true, link: "https://isola.design/rsvp-isoladesignfestival2026", note: "Slot — privates Apartment" }
  },
  {
    id: "isola-brussels", name: "Brussels House", exhibition: "BE-Design-Showcase (MAD.brussels, 17 Designer)",
    venue: "Isola-Quartier", address: "Via de Castillia (Isola-Quartier)",
    district: "Isola", coords: [45.4845, 9.1908], pin: "🇧🇪",
    description: "Organische / upcycled Materialien · Möbelräume + Talks · Open Night.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false }, infoLink: "https://hub.brussels/en/blog/brussels-on-display-at-milan-design-week/"
  },

  // ============ PORTA VENEZIA — HEROES ============
  {
    id: "pv-meet", name: "MEET Digital Culture Center", exhibition: "Liquid Chimeras & Renaissance Dreams (Refik Anadol)",
    venue: "MEET Digital Culture Center", address: "Via Vittorio Veneto 2",
    district: "Porta Venezia", coords: [45.4784, 9.1996], pin: "▲",
    description: "2 parallele AI-Installationen: Renaissance Dreams (Rinascimento als GAN) + Liquid Chimeras (generative AI zu Meeres-Mikroorganismen).",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: true, link: "https://feverup.com/m/170149/en", note: "Fever-Ticket, zeitgebunden" }
  },
  {
    id: "pv-insieme", name: "INSIEME (De Sarno × Vanity Fair)", exhibition: "12 ital. Maisons",
    venue: "Piscina Cozzi", address: "Viale Tunisia 35",
    district: "Porta Venezia", coords: [45.4805, 9.2030], pin: "⭐",
    description: "Jugendstil-Schwimmbad + 12 italienische Maisons (Venini, Rubelli, Bonacina, Henraux) + JR-Fassaden-Porträts.",
    days: [21, 22, 23, 24, 25, 26],
    reservation: { required: true, link: "https://www.fuorisalone.it/it/2026/eventi/7257/INSIEME-curato-da-Sabato-De-Sarno-prodotto-e-presentato-da-Vanity-Fair", note: "kostenlos" }
  },
  {
    id: "pv-geely", name: "Geely × Jameel Motors", exhibition: "Anima Mundi. A Visionary Impulse",
    venue: "Fondazione Istituto dei Ciechi", address: "Via Vivaio 7",
    district: "Porta Venezia", coords: [45.4702, 9.2013], pin: "🌍",
    description: "Sala Barozzi: 5 monumentale Schleier reagieren auf Umweltdaten + Geely E2 Italien-Debüt.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false, note: "frei" }, infoLink: "https://www.fuorisalone.it/en/2026/events/6822/Anima-Mundi-A-Visionary-Impulse"
  },
  {
    id: "pv-ikea", name: "IKEA", exhibition: "Food For Thought",
    venue: "Spazio Maiocchi", address: "Via Achille Maiocchi 7",
    district: "Porta Venezia", coords: [45.4800, 9.2140], pin: "🍽",
    description: "Schwedische 'Saluhall'-Markthalle mit 5 Räumen · je Designer+Chef-Duo · Premiere IKEA PS 10.",
    days: [21, 22, 23, 24, 25, 26], highDemand: true,
    reservation: { required: false, note: "frei, Shuttle · lange Schlangen" },
    infoLink: "https://www.dezeen.com/eventsguide/2026/04/ikea-food-for-thought-milan-2026/"
  },
  {
    id: "pv-6am", name: "6:AM", exhibition: "Over and Over and Over and Over",
    venue: "Piscina Romano", address: "Via Ampère 24",
    district: "Porta Venezia", coords: [45.4860, 9.2280], pin: "🪩",
    description: "Mundgeblasene Glaskuben (Bottega Veneta Batch) · Paysage/Linetta mit Hannes Peer · Bar Pieno im Pool-Park.",
    days: [20, 21, 22, 23, 24, 25, 26], highDemand: true,
    reservation: { required: false }, infoLink: "https://6am.glass/mdw"
  },
  {
    id: "pv-skoda", name: "Škoda Auto", exhibition: "Ooooh, that's EpiQ!",
    venue: "Palazzo Senato", address: "Via Senato 10",
    district: "Porta Venezia", coords: [45.4698, 9.1958], pin: "🚗",
    description: "Knetmasse-Ästhetik (Ulises Studio) · interaktiver Digital-Dome · E-Auto EpiQ Premiere.",
    days: [21, 22, 23, 24, 25, 26],
    reservation: { required: false, link: "https://epiqdesignweek.com/", note: "frei · Yoga 9–10h reservierungspflichtig" }
  },
  {
    id: "pv-yoox", name: "YOOX × Keta Bart", exhibition: "YOOX CAMERINO",
    venue: "Romero Paprocki Gallery", address: "Via Lazzaro Palazzi 24",
    district: "Porta Venezia", coords: [45.4800, 9.2070], pin: "👗",
    description: "AI-Umkleidekabine in 3 Akten (Surprise / Belong / Elevate) — digitale Spiegel-Narration.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false }, infoLink: "https://www.fuorisalone.it/en/brand/3434/YOOX"
  },
  {
    id: "pv-deoron", name: "DEORON", exhibition: "Milan Design Week 2026",
    venue: "Factory Eleven", address: "Via Padova 11",
    district: "Porta Venezia", coords: [45.4925, 9.2145], pin: "🏭",
    description: "800 m² Ex-Kugellagerfabrik, 50+ Designer:innen, Bar + Daily Events.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false }, infoLink: "https://www.dezeen.com/eventsguide/2026/04/deoron-milan-2026/"
  },
  {
    id: "pv-usm", name: "USM × Snøhetta", exhibition: "Renaissance of the Real",
    venue: "Fondazione Luigi Rovati", address: "Corso Venezia 52",
    district: "Porta Venezia", coords: [45.4725, 9.2020], pin: "◻",
    description: "Textil-Kokon auf USM-Haller-Modulen · Sound/Licht/Duft · tägliche Vinyl-Sessions OJAS (17–18h).",
    days: [21, 22, 23, 24, 25, 26],
    reservation: { required: false, link: "https://www.usm.com/en-uk/stories/milan-design-week-2026", note: "Listening-Sessions evtl. RSVP" }
  },
  {
    id: "pv-molteni", name: "Molteni&C", exhibition: "Responsive Nature (Van Duysen)",
    venue: "Molteni&C", address: "Via Senato 14",
    district: "Porta Venezia", coords: [45.4698, 9.1960], pin: "M",
    description: "6 verbundene Garten-Szenerien (Elisa Ossino Studio) für Outdoor-Kollektion Van Duysen/Dordoni.",
    days: [21, 22, 23, 24, 25, 26], highDemand: true,
    reservation: { required: false }, infoLink: "https://molteni.it/en/landing/milan-design-week-2026"
  },
  {
    id: "pv-rimadesio", name: "Rimadesio", exhibition: "BECOMING (70 Jahre)",
    venue: "Palazzo Isimbardi", address: "Corso Monforte 35",
    district: "Porta Venezia", coords: [45.4640, 9.2035], pin: "R",
    description: "Site-specific Lichtinstallation im Cloister (Encor Studio) · Fresken-Saal R-Paradigm (Juma) · Palazzo erstmals öffentlich.",
    days: [21, 22, 23, 24, 25, 26],
    reservation: { required: false }, infoLink: "https://www.rimadesio.it/en/journal/preview_milano-design-week-2026/"
  },
  {
    id: "pv-kohler", name: "Kohler × Flamingo Estate", exhibition: "The Flamingo Estate Bathhouse",
    venue: "PAC — Padiglione Arte Contemporanea", address: "Via Palestro 14",
    district: "Porta Venezia", coords: [45.4728, 9.2011], pin: "🛁",
    description: "Brutalistisches Badehaus aus ungebranntem Gusseisen · Reverie-Wanne mit Kupfer-Mantel · 200 Kerzen · 4 Pollinator-Bäder.",
    days: [21, 22, 23, 24, 25, 26],
    reservation: { required: true, link: "https://www.dezeen.com/eventsguide/2026/04/the-flamingo-estate-bathhouse-kohler-milan-2026/", note: "kostenlos mit Registrierung" }
  },
  {
    id: "pv-kia", name: "KIA", exhibition: "Journey of Projection",
    venue: "Salone del Tessuto", address: "Via San Gregorio 29",
    district: "Porta Venezia", coords: [45.4790, 9.2080], pin: "🚙",
    description: "6 Concept-Cars inkl. Debüt Vision Meta Turismo · Philosophie Opposites United.",
    days: [22, 23, 24, 25, 26],
    reservation: { required: false }, infoLink: "https://www.hyundaimotorgroup.com/en/news/CONT0000000000208376"
  },
  {
    id: "pv-gaggenau", name: "Gaggenau", exhibition: "Presence (1zu33)",
    venue: "Villa Necchi Campiglio", address: "Via Mozart 14",
    district: "Porta Venezia", coords: [45.4676, 9.2024], pin: "G",
    description: "Reduzierte architektonische Pavillon-Struktur im Garten · Meditation über Raum und Essenz.",
    days: [21, 22, 23, 24, 25, 26],
    reservation: { required: true, link: "https://www.gaggenau.com/global/experience/news-and-events/milan-design-week-2026", note: "Slot-limitiert" }
  },
  {
    id: "pv-elledecor", name: "Elle Decor × Piero Lissoni", exhibition: "Sensory Landscape",
    venue: "Palazzo Bovara", address: "Corso Venezia 51",
    district: "Porta Venezia", coords: [45.4720, 9.2015], pin: "E",
    description: "5-Sinne-Parcours mit Antonio Perazzi + netsuke studio — Natur/Kunstnatur-Dialog.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false }, infoLink: "https://www.yesmilano.it/eventi/tutti-gli-eventi/elle-decor-sensory-landscape"
  },
  {
    id: "pv-appartamentospagnolo", name: "Elle Decor × Interiors From Spain × Studiopepe", exhibition: "Appartamento Spagnolo",
    venue: "Palazzo Castiglioni", address: "Corso Venezia 47",
    district: "Porta Venezia", coords: [45.4715, 9.2010], pin: "🇪🇸",
    description: "22 spanische Marken · Wohn- + Gartenräume (SKLD Studio).",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false }
  },
  {
    id: "pv-artemest", name: "Artemest", exhibition: "L'Appartamento — Italian Grandeur",
    venue: "Palazzo Donizetti", address: "Via Gaetano Donizetti 48",
    district: "Porta Venezia", coords: [45.4720, 9.2120], pin: "🏛",
    description: "5 int. Studios bespielen 5 ital. Kunststädte (Venedig/Florenz/Rom/Neapel/Palermo) im Palazzo mit elliptischer Treppe.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: true, link: "https://artemest.idloom.events/artemest-milan-design-week/register", note: "kostenlos" }
  },
  {
    id: "pv-electrolux", name: "Electrolux", exhibition: "The Swedish Home",
    venue: "Via Melzo 12", address: "Via Melzo 12",
    district: "Porta Venezia", coords: [45.4755, 9.2075], pin: "🌲",
    description: "Waldhof · Yoga / Talks / Kids-Cooking · schwedische Wellness-Werte.",
    days: [21, 22, 23, 24, 25, 26],
    reservation: { required: false, note: "einzelne Aktivitäten RSVP" }
  },
  {
    id: "pv-raffles", name: "Raffles Milano", exhibition: "In the Act of Being",
    venue: "Raffles Milano", address: "Via Felice Casati 16",
    district: "Porta Venezia", coords: [45.4818, 9.2038], pin: "✦",
    description: "Design-Plattform zu kultureller Hybridisierung (Studenten + Profis). Party 23.4. Eventbrite.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false, link: "https://www.eventbrite.it/e/biglietti-raffles-milano-party-milano-design-week-2026-1986008484840", note: "Party 23.4. Ticket" }
  },
  {
    id: "pv-zucchetti", name: "Zucchetti", exhibition: "Ensemble",
    venue: "Zucchetti Showroom", address: "Corso Venezia 29",
    district: "Porta Venezia", coords: [45.4700, 9.1990], pin: "Z",
    description: "Studioutte, Lopez Quincoces, Lys, Dapporto zu Wasser/Materie · Launch Octo X.",
    days: [21, 22, 23, 24, 25, 26],
    reservation: { required: false }, infoLink: "https://www.dezeen.com/eventsguide/2026/04/zucchetti-ensemble-milan-2026/"
  },
  {
    id: "pv-dedar", name: "Dedar", exhibition: "Versi Liberi (Studio Anne Holtrop)",
    venue: "Showroom Maria Calderara", address: "Via Lazzaretto 15",
    district: "Porta Venezia", coords: [45.4795, 9.2042], pin: "D",
    description: "70×90-Panels · Re-Interpretation von Stoffmustern des 17.–19. Jh.",
    days: [21, 22, 23, 24, 25],
    reservation: { required: false }, infoLink: "https://www.yesmilano.it/eventi/tutti-gli-eventi/dedar-presents-versi-liberi-milan-design-week-2026"
  },
  {
    id: "pv-interni-audi", name: "INTERNI × AUDI", exhibition: "Materiae — Origin",
    venue: "Portrait Milano", address: "Corso Venezia 11",
    district: "Porta Venezia", coords: [45.4685, 9.1970], pin: "A",
    description: "Zaha Hadid Architects: Licht-Architektur von Dämmerung bis Abend im Quadrilatero-Hof.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false }
  },
  {
    id: "pv-arket", name: "ARKET × Lalu Gohar", exhibition: "Installation",
    venue: "Giardino delle Arti", address: "Via Palestro 8",
    district: "Porta Venezia", coords: [45.4712, 9.2005], pin: "K",
    description: "Installation im Stadtgarten (Details folgen).",
    days: [20, 21, 22, 23, 24],
    reservation: { required: false }
  },
  {
    id: "pv-toiletpaper", name: "Toiletpaper", exhibition: "Paperchandoha (+ Enel Made of Energy)",
    venue: "Toiletpaper Apartment", address: "Via Giuseppe Balzaretti 8",
    district: "Porta Venezia", coords: [45.4860, 9.2185], pin: "🧻",
    description: "Permanentes Street-Art-Apartment + Sonderausstellung — frei.",
    days: [21, 22, 23, 24, 25, 26],
    reservation: { required: false }
  },
  {
    id: "pv-sem", name: "SEM – Spotti", exhibition: "HARDCORE (Hannes Peer · CORE)",
    venue: "Spotti Milano", address: "Viale Piave 27",
    district: "Porta Venezia", coords: [45.4735, 9.2080], pin: "S",
    description: "Massivholz · CNC + Handwerk · limitierte Kollektion.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false }
  },

  // ============ PORTA NUOVA ============
  {
    id: "pn-olivari", name: "Andrea Olivari", exhibition: "Blooming Imperfections",
    venue: "Piazza Gae Aulenti u.a.", address: "Piazza Gae Aulenti, Piazza Alvar Aalto, Piazza L. Einaudi",
    district: "Porta Nuova", coords: [45.4838, 9.1900], pin: "🌷",
    description: "Digital-Triptychon (Organe) + verteilte Installationen · Audio Gabriele Agostinelli · QR-Interaktion · 24/7 outdoor.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false, note: "24/7 outdoor" },
    infoLink: "https://www.fuorisalone.it/en/magazine/focus/article/1930/blooming-imperfections-art-design-and-connection-in-portanuova-milano-fuorisalone"
  },
  {
    id: "pn-designboom", name: "designboom", exhibition: "Room for Dreams (SolidNature × AMO/OMA, Paf atelier)",
    venue: "ME Milan Il Duca", address: "Piazza della Repubblica 13",
    district: "Porta Nuova", coords: [45.4803, 9.1975], pin: "💭",
    description: "Aldo-Rossi-Hotel-Takeover: Il Sonno Stein-Installation · Paf atelier Dream-Cinema · Talks (Ressence, La Marzocco, OPPO).",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false, link: "https://www.designboom.com/join-us-at-milan-design-week-2026/", note: "Talks/Film RSVP-Pflicht" }
  },
  {
    id: "pn-cupra", name: "CUPRA", exhibition: "Beyond the Known (Hauptsponsor)",
    venue: "CUPRA Garage Milano", address: "Corso Como 1",
    district: "Porta Nuova", coords: [45.4830, 9.1870], pin: "🏎",
    description: "Raval-EV im Garage · parametrisches Design · Own the Wheel Kunstausstellung (Garibaldi Gallery) · Lounge Gandia Blasco.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false },
    infoLink: "https://www.fuorisalone.it/en/magazine/focus/article/1976/beyond-the-known-cupras-at-design-week-2026"
  },

  // ============ CENTRO ============
  {
    id: "centro-grohe", name: "GROHE", exhibition: "GROHE SPA – Aqua Sanctuary",
    venue: "Piccolo Teatro Studio Melato", address: "Via Rivoli 6",
    district: "Centro", coords: [45.4699, 9.1830], pin: "💧",
    description: "Immersives multisensorisches Theater · 3 Sanctums (Inspiration/Curation/Reflection) · Wasser, Licht, Sound, Projektionen.",
    days: [22, 23, 24, 25, 26],
    reservation: { required: true, link: "https://www.grohe.com/en-GB/learn-discover/news-events/milan-design-week-2026", note: "empfohlen" }
  },
  {
    id: "centro-capsule", name: "Capsule Plaza", exhibition: "Hybrid Design-Fair",
    venue: "Spazio Maiocchi / Via Maiocchi 8", address: "Via Achille Maiocchi 8",
    district: "Centro", coords: [45.4800, 9.2142], pin: "▣",
    description: "Multidisziplinärer Showcase (Mode, Design, Brands + IKEA-Satellit, Talks).",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false, link: "https://capsuleplaza.com", note: "Talks teils ticketpflichtig" }
  },
  {
    id: "centro-prada-frames", name: "Prada Frames", exhibition: "In Sight (Symposium, kuratiert Formafantasma)",
    venue: "Santa Maria delle Grazie (Bramantes Sacrestia)", address: "Via Caradosso 1",
    district: "Centro", coords: [45.4655, 9.1710], pin: "📖",
    description: "5. Symposium zu Bild / Image-Making (Mensch vs. Maschine) · Night-Session mit Live-Musik · 19.–21.4.",
    days: [20, 21],
    reservation: { required: true, link: "https://www.prada.com/ww/en/pradasphere/events/2026/prada-frames-milan.html", note: "Pflicht, kostenlos" }
  },
  {
    id: "centro-bottega", name: "Bottega Veneta × Kwangho Lee", exhibition: "LIGHTFUL",
    venue: "Bottega Veneta Flagship", address: "Via Sant'Andrea 15",
    district: "Centro", coords: [45.4693, 9.1945], pin: "💡",
    description: "10 Limited-Edition-Leuchten in 6 Farbvarianten + gewobene Kordel-Skulpturen aus Leder.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false, note: "Walk-in Flagship" }
  },
  {
    id: "centro-mutina", name: "Mutina", exhibition: "Casa Mutina — Neri&Hu + Albers Foundation",
    venue: "Casa Mutina Milano", address: "Via Cernaia 1A",
    district: "Centro", coords: [45.4735, 9.1935], pin: "■",
    description: "Keramik-/Kachel-Kunst in Urquiola-gestaltetem Wohnraum.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false }, infoLink: "https://www.mutina.it/en/casa-mutina-milano"
  },
  {
    id: "centro-starck", name: "Philippe Starck", exhibition: "Albori",
    venue: "Castello Sforzesco (Sala dei Pilastri)", address: "Piazza Castello",
    district: "Centro", coords: [45.4705, 9.1795], pin: "★",
    description: "Immersive Reise durch den kreativen Prozess in 3 Phasen (Zuhören / Intuition / Komposition) mit Sound, Licht, Materie.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false }, infoLink: "https://www.fuorisalone.it/it/2026/eventi/6662/Albori"
  },
  {
    id: "centro-convey", name: "Convey (Simple Flair)", exhibition: "CONVEY BUILDING",
    venue: "Rationalist-Gebäude (Cabiati/Brambilla 1958)", address: "Piazza Velasca 5",
    district: "Centro", coords: [45.4598, 9.1904], pin: "▼",
    description: "5-stöckiges Hybrid-Fair-Gebäude · 20+ internationale Brands · 360°-Panorama-Terrasse · Networking-Hub.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false, note: "Sonder-Talks teils ticketpflichtig" },
    infoLink: "https://www.fuorisalone.it/it/2026/percorso/198/convey-2026"
  },
  {
    id: "centro-cromo", name: "CROMO", exhibition: "Secret Teahouse by CROMO",
    venue: "Torre Velasca (Dachgeschoss)", address: "Piazza Velasca 3/5",
    district: "Centro", coords: [45.4598, 9.1906], pin: "🍵",
    description: "Neue Tea-Brand · Dachgeschoss-Teahouse mit Tagesthemen (Genmaicha u.a.) · 9–13 Uhr · Invitation only / RSVP.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: true, link: "https://www.cromotea.com/mdw2026", note: "Invitation only / RSVP" }
  },

  // ============ TRIENNALE ============
  {
    id: "triennale-main", name: "Triennale Milano", exhibition: "Barber & Osgerby · Vignelli · Sottsass · Eames · Thonet · Fredericia · Kvadrat · Hyletech · Anonima Castelli",
    venue: "Triennale", address: "Viale Alemagna 6",
    district: "Triennale", coords: [45.4728, 9.1722], pin: "T",
    description: "Große Forschungs- und Retrospektivausstellungen · Casa Ultrapiega, The Eames Houses, Barber & Osgerby Alphabet, Vignelli A Language of Clarity, Sottsass Casa Lana u.v.m.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: true, link: "https://triennale.org/en/whats-on", note: "Museumsticket" }
  },

  // ============ ADI ============
  {
    id: "adi", name: "ADI Design Museum", exhibition: "XXIX Compasso d'Oro + Haruka Misawa bit by bit",
    venue: "ADI Design Museum", address: "Piazza Compasso d'Oro 1",
    district: "ADI", coords: [45.4858, 9.1718], pin: "★",
    description: "29. Edition des ältesten Designpreises + Italien-Soloschau Haruka Misawa · 10:30–21:00.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: true, link: "https://www.adidesignmuseum.org/en/", note: "Museumsticket" }
  },

  // ============ ALCOVA ============
  {
    id: "alcova-baggio", name: "Alcova — Ospedale Militare Baggio", exhibition: "11. Edition (Hauptstandort)",
    venue: "Ospedale Militare di Baggio", address: "Via Giovanni Labus 10",
    district: "Alcova", coords: [45.4584, 9.0940], pin: "⚕",
    description: "Post-WWI-Militärkrankenhaus · Kirche, Rektorat, Archiv erstmals öffentlich · int. Designer-Roster. Weit outside.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: true, link: "https://shop.alcova.xyz/pages/tickets-alcova-milano-2026", note: "gemeinsames Ticket" }
  },
  {
    id: "alcova-pestarini", name: "Alcova — Villa Pestarini (Albini)", exhibition: "11. Edition (Nebenstandort)",
    venue: "Villa Pestarini", address: "Via Mogadiscio 2/4",
    district: "Alcova", coords: [45.4938, 9.1525], pin: "A",
    description: "Albinis einzige Mailänder Villa · nach 87 Jahren erstmals öffentlich · Zeitfenster-Zugang.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: true, link: "https://shop.alcova.xyz/pages/tickets-alcova-milano-2026", note: "im Alcova-Ticket inkl." }
  },

  // ============ DROPCITY ============
  {
    id: "dropcity", name: "Dropcity", exhibition: "The White House: Domestic Propaganda",
    venue: "Dropcity (unter Stazione Centrale)", address: "Via Sammartini 56",
    district: "Centro", coords: [45.4850, 9.2050], pin: "🏛",
    description: "Politecnico-Analyse Weißes Haus als politisches Device + Central Saint Martins Material Futures, Prison Times, Bruther.fbx.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false, note: "Talks ggf. RSVP" }, infoLink: "https://www.dropcity.org/"
  },

  // ============ FEATURED ============
  {
    id: "feat-visteria", name: "Visteria Foundation", exhibition: "Polish Modernism. A Struggle for Beauty",
    venue: "Torre Velasca, 16. Stock", address: "Piazza Velasca 5",
    district: "Featured", coords: [45.4598, 9.1908], pin: "🇵🇱",
    description: "Polnischer Nachkriegsmodernismus im Dialog mit zeitgenössischer Produktion · Möbel aus Nationalmuseum Warschau.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: true, link: "https://www.fuorisalone.it/en/2026/events/6516/Polish-Modernism-A-Struggle-for-Beauty", note: "Höhenzugang limitiert" }
  },
  {
    id: "feat-dopir", name: "Haute Charpenterie / DOPIR (KV Design)", exhibition: "Bulgarisches Holz-Kollektiv",
    venue: "Casa Bagatti Valsecchi (Innenhof)", address: "Via Santo Spirito 10",
    district: "Featured", coords: [45.4700, 9.1945], pin: "🌳",
    description: "Bulgarisches Kollektiv · Holz-Zimmermannskunst im neorenaissance Haus-Museum.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false, link: "https://hc.kvdesign-bg.com/", note: "Hausmuseum-Ticket separat" }
  },
  {
    id: "feat-marimekko", name: "Marimekko", exhibition: "Osteria Fiori di Marimekko",
    venue: "Osteria Grand Hotel", address: "Via Ascanio Sforza 75 (Navigli)",
    district: "Navigli", coords: [45.4473, 9.1797], pin: "🌼",
    description: "Textil-Installation mit Kukasta kukkaan-Print · Keramik-Shop · finnisch-italienische Blumen-Aperitivi · Bocce. Nur 19.–22.4.",
    days: [20, 21, 22],
    reservation: { required: false, link: "https://www.marimekko.com/gb_en/m/milan-design-week-2026", note: "Essen reservieren" }
  },
  {
    id: "feat-bocci", name: "Bocci", exhibition: "Light as Medium (Omer Arbel)",
    venue: "Bocci Milan", address: "Via Rovani 20",
    district: "Featured", coords: [45.4538, 9.1595], pin: "💡",
    description: "Neue / neu-interpretierte Werke von Omer Arbel (kuratiert David Alhadeff) · Licht als künstlerisches Medium.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false, note: "Opening evtl. RSVP" },
    infoLink: "https://www.dezeen.com/eventsguide/2026/04/light-as-medium-milan-2026/"
  },

  // ============ BRERA — Mode & Luxus (NEU) ============
  {
    id: "brera-gucci", name: "Gucci", exhibition: "Gucci Memoria (Demna-Debüt)",
    venue: "Chiostri di San Simpliciano", address: "Piazza Paolo VI 6",
    district: "Brera", coords: [45.4745, 9.1870], pin: "G",
    description: "Demnas Fuorisalone-Debüt als Creative Director · Immersive Inszenierung von 105 Jahren Gucci-Geschichte als lebendiger Organismus · Raum- und Bildschichtung.",
    days: [21, 22, 23, 24, 25, 26], highDemand: true,
    reservation: { required: true, note: "Pflicht" }
  },
  {
    id: "brera-dior", name: "Dior Maison", exhibition: "Corolle (Noé Duchaufour-Lawrance)",
    venue: "Palazzo Landriani", address: "Via Borgonuovo 25",
    district: "Brera", coords: [45.4712, 9.1890], pin: "D",
    description: "Neue Lampenkollektion — Muranoglas und Bambusfaser, inspiriert vom Cannage-Motiv + New Look (Lampe als skulpturaler Rock).",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false }
  },
  {
    id: "brera-jilsander", name: "Jil Sander × Apartamento", exhibition: "Reference Library",
    venue: "Via Beltrami Showroom", address: "Via Beltrami",
    district: "Brera", coords: [45.4715, 9.1865], pin: "J",
    description: "Pop-up-Bibliothek mit 60 kuratierten Büchern von Simone Bellotti, gestaltet von studioutte · 20.–24.4.",
    days: [20, 21, 22, 23, 24],
    reservation: { required: false }
  },
  {
    id: "brera-miumiu", name: "Miu Miu", exhibition: "Literary Club (3. Edition)",
    venue: "Circolo Filologico Milanese", address: "Via Clerici 10",
    district: "Brera", coords: [45.4680, 9.1882], pin: "M",
    description: "Literarischer Salon zu Annie Ernaux und Ama Ata Aidoo.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false, note: "RSVP empfohlen" }
  },
  {
    id: "brera-loropiana", name: "Loro Piana", exhibition: "Studies – Chapter I: On the Plaid",
    venue: "Cortile della Seta", address: "Via della Moscova 33",
    district: "Brera", coords: [45.4793, 9.1895], pin: "L",
    description: "23 Plaid-Studien als eigenständige Designobjekte — Material, Technik, Konstruktion in Variationen von Faser, Garn und Endprodukt.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false }
  },
  {
    id: "brera-valextra", name: "Valextra", exhibition: "Soft & Tender Topographies",
    venue: "Valextra Showroom", address: "Via Manzoni 3",
    district: "Brera", coords: [45.4685, 9.1905], pin: "V",
    description: "Lederdesign trifft Raumgestaltung.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false }
  },

  // ============ BRERA — Automobil (NEU) ============
  {
    id: "brera-bmw", name: "BMW", exhibition: "Vibrant Transitions",
    venue: "Palazzo Borromeo d'Adda", address: "Via Manzoni 41",
    district: "Brera", coords: [45.4715, 9.1935], pin: "🚘",
    description: "Immersive Installation zur Zukunft der Mobilität.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false, note: "10–20 h" }
  },
  {
    id: "brera-mini", name: "MINI × Paul Smith", exhibition: "A Garden of Curiosity",
    venue: "Palazzo Borromeo d'Adda (Garten)", address: "Via Manzoni 41",
    district: "Brera", coords: [45.4716, 9.1936], pin: "🪴",
    description: "Colour Theory Room + Listening Room · neuer MINI Cooper Cabrio Paul Smith Edition (Nottingham Green) + historische Paul-Smith-Minis.",
    days: [21, 22, 23, 24, 25, 26],
    reservation: { required: false }
  },
  {
    id: "brera-nio", name: "NIO Firefly", exhibition: "Glow Rod Garage",
    venue: "Firefly Garage", address: "Via Palermo 8",
    district: "Brera", coords: [45.4740, 9.1860], pin: "⚡",
    description: "Chinesische EV-Marke NIO zeigt Sub-Brand Firefly — leuchtende Garage-Experience (Fuorisalone-Debüt).",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false }
  },

  // ============ BRERA — Design/Möbel (NEU Highlights) ============
  {
    id: "brera-ingomaurer", name: "Ingo Maurer", exhibition: "Here We YaYaHo Again",
    venue: "Ingo Maurer Showroom", address: "Via Varese 13",
    district: "Brera", coords: [45.4790, 9.1770], pin: "💡",
    description: "Neue Evolution des legendären YaYaHo-Niederspannungs-Lichtsystems.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false }
  },
  {
    id: "brera-preciosa", name: "Preciosa Lighting", exhibition: "Drifting Lights",
    venue: "Galleria Tempesta", address: "Foro Buonaparte 68",
    district: "Brera", coords: [45.4715, 9.1810], pin: "✨",
    description: "60 mundgeblasene Glaspaneele als schwebende Installation.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false }
  },
  {
    id: "brera-laufen", name: "Laufen × Konstantin Grcic", exhibition: "When Time Becomes Material",
    venue: "Laufen Showroom", address: "Via Manzoni 23",
    district: "Brera", coords: [45.4700, 9.1915], pin: "L",
    description: "Bad-/Material-Ausstellung kuratiert von Konstantin Grcic.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false }
  },
  {
    id: "brera-poltronafrau", name: "Poltrona Frau × Shepard Fairey", exhibition: "True Over Time + Dezza 60. Jubiläum",
    venue: "Poltrona Frau Showroom", address: "Via Manzoni 30",
    district: "Brera", coords: [45.4708, 9.1920], pin: "P",
    description: "Neue Kollektionen + Street-Art-Kooperation mit Shepard Fairey · Gio-Ponti-Dezza-Jubiläum.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false }
  },
  {
    id: "brera-flexform", name: "Flexform", exhibition: "The Private Lives of Objects",
    venue: "Flexform Flagship", address: "Via Moscova 33",
    district: "Brera", coords: [45.4793, 9.1897], pin: "F",
    description: "Zwei Installationen im Flagshipstore.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false }
  },

  // ============ BRERA — Kunst ============
  {
    id: "brera-amex-ricciardi", name: "American Express × Sara Ricciardi", exhibition: "Serotonin",
    venue: "Loggiato, Pinacoteca di Brera", address: "Via Brera 28 (Loggiato)",
    district: "Brera", coords: [45.4720, 9.1882], pin: "🎈",
    description: "Riesige aufblasbare Volumina, die Schönheit und Glück als chemische Formeln inszenieren.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false }
  },
  {
    id: "brera-aiweiwei", name: "Ai Weiwei × Rubelli", exhibition: "About Silk",
    venue: "Rubelli Showroom", address: "Via Fatebenefratelli 9",
    district: "Brera", coords: [45.4750, 9.1895], pin: "🕊",
    description: "Ai Weiweis erste Arbeit in Seide · ortsspezifische Goldfaden-Lampas · Motive: Überwachungskameras, Handschellen, Twitter-Vogel, Alpakas · Ai-Weiwei-Sofa · 16.4.–15.5.",
    days: [20, 21, 22, 23, 24, 25, 26], highDemand: true,
    reservation: { required: false, note: "evtl. RSVP" }
  },

  // ============ BRERA — Länderpavillons ============
  {
    id: "brera-saudi", name: "Saudi-Arabien", exhibition: "Jusoor Design Collections",
    venue: "Pinacoteca di Brera", address: "Via Brera 28",
    district: "Brera", coords: [45.4722, 9.1880], pin: "🇸🇦",
    description: "5 saudische Designer × int. Partner · Limited-Edition-Sammlerobjekte (Kurator Samer Yamani).",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false }
  },
  {
    id: "brera-austria", name: "Österreich", exhibition: "Design Palazzo Austria",
    venue: "Palazzo Confalonieri", address: "Via Romagnosi 8",
    district: "Brera", coords: [45.4738, 9.1845], pin: "🇦🇹",
    description: "10. Teilnahme · 30+ Aussteller · Tiefblau gestaltetes Ausstellungskonzept (Vasku & Klug).",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false }
  },
  {
    id: "brera-swiss", name: "Schweiz", exhibition: "Shared Matter",
    venue: "SPAZIOVENTO", address: "Via Pinamonte da Vimercate 4",
    district: "Brera", coords: [45.4770, 9.1905], pin: "🇨🇭",
    description: "Pro Helvetia + Presence Switzerland · Akuto Chord Machine, iiode Re27-LED, Paper Glasses.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false }
  },

  // ============ TORTONA — NEU ============
  {
    id: "tortona-lexus", name: "Lexus", exhibition: "SPACE — Weltpremiere LS Concept",
    venue: "Superstudio Più", address: "Via Tortona 27",
    district: "Tortona", coords: [45.4514, 9.1695], pin: "🚗",
    description: "Weltpremiere Lexus LS Concept + 4 Co-Creation-Werke *Discover Together 2026* (Random Studio Amsterdam, Guardini Ciuffreda u.a.).",
    days: [21, 22, 23, 24, 25, 26],
    reservation: { required: false }
  },
  {
    id: "tortona-hyundai", name: "Hyundai", exhibition: "Unfold Stories — Ioniq 3 Weltdebüt",
    venue: "Torneria Tortona", address: "Via Tortona 32",
    district: "Tortona", coords: [45.4510, 9.1688], pin: "🚙",
    description: "Weltdebüt Ioniq 3 (elektrisches Hatchback) · Immersive Designgeschichte + Workshop Sarah Illenberger.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false }
  },
  {
    id: "tortona-fiat", name: "FIAT", exhibition: "Ciao Futuro!",
    venue: "Magna Pars", address: "Via Tortona 15",
    district: "Tortona", coords: [45.4520, 9.1720], pin: "🚘",
    description: "Immersive Zeitreise: Nuova 500 (1957) + Panda (1980er) · Mobilitätsgeschichte als Erlebnis.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false }
  },
  {
    id: "tortona-lotus", name: "Lotus", exhibition: "In Progress",
    venue: "Opificio 31", address: "Via Tortona 31",
    district: "Tortona", coords: [45.4512, 9.1694], pin: "🏁",
    description: "Theory-1-Konzeptfahrzeug + legendärer Type 72 F1-Bolide.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false }
  },
  {
    id: "tortona-mcdonalds", name: "McDonald's × Damien Hirst", exhibition: "POOL – Ti sblocco un ricordo",
    venue: "POOL-Venue", address: "Via Tortona 58",
    district: "Tortona", coords: [45.4505, 9.1660], pin: "🍔",
    description: "Popkultur-Installation zum 40-jährigen Italien-Jubiläum (Kurator Nicolas Ballario) · Werke von Damien Hirst + KI-Zeitmaschine.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false }
  },

  // ============ INTERNI MATERIAE — Università Statale ============
  {
    id: "statale-big-artemide", name: "BIG × Artemide", exhibition: "Light Knot Progression (280 m Licht)",
    venue: "Università Statale, Loggiato Est", address: "Via Festa del Perdono 7",
    district: "INTERNI Materiae", coords: [45.4605, 9.1970], pin: "◊",
    description: "280 Meter Licht in 11 Bögen · Aluminiumknoten + LED-Bänder · Progression von einfach zu komplexen chinesischen Knoten-Mustern.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false, note: "frei · INTERNI MATERIAE" }
  },
  {
    id: "statale-sony", name: "Sony × Setsu & Shinobu Ito", exhibition: "Esquisse",
    venue: "Università Statale, Aula Magna", address: "Via Festa del Perdono 7",
    district: "INTERNI Materiae", coords: [45.4607, 9.1972], pin: "◼",
    description: "Original Blended Material — umweltfreundliches Papier aus Bambus + Zuckerrohr · Möbel und räumliche Elemente.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false }
  },
  {
    id: "statale-mad-canva", name: "MAD Architects × Canva", exhibition: "Kaleido",
    venue: "Università Statale, Aula Magna", address: "Via Festa del Perdono 7",
    district: "INTERNI Materiae", coords: [45.4606, 9.1974], pin: "◇",
    description: "15 m hohe immersive Kaleidoskop-Installation mit KI-gestützten Kreativwerkzeugen.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false }
  },
  {
    id: "statale-sanlorenzo", name: "Sanlorenzo × Piero Lissoni", exhibition: "UN_Material (Yacht SHE 1:1)",
    venue: "Università Statale, Cortile del '700", address: "Via Festa del Perdono 7",
    district: "INTERNI Materiae", coords: [45.4604, 9.1972], pin: "⛴",
    description: "1:1-Querschnitte der Yacht SHE in semi-transparentem Stoff auf schwarzen Metallprofilen · 10 × 21,5 × 6 m · tagsüber Wolke, nachts leuchtender Phantom.",
    days: [20, 21, 22, 23, 24, 25, 26], highDemand: true,
    reservation: { required: false }
  },
  {
    id: "statale-holcim-scandurra", name: "Holcim × Alessandro Scandurra", exhibition: "Mater (16 m Kreis aus Bauschutt)",
    venue: "Università Statale, Cortile d'Onore", address: "Via Festa del Perdono 7",
    district: "INTERNI Materiae", coords: [45.4605, 9.1973], pin: "○",
    description: "16-Meter-Kreis aus Bauschutt — Kreislauf der Baumaterialien.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false }
  },
  {
    id: "statale-navone-parmigiano", name: "Parmigiano Reggiano × Paola Navone", exhibition: "I Suoni della Materia",
    venue: "Università Statale, Cortile d'Onore", address: "Via Festa del Perdono 7",
    district: "INTERNI Materiae", coords: [45.4606, 9.1973], pin: "🎵",
    description: "Sensorisches Käse-Instrument — Klang als Materialerfahrung.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false }
  },

  // ============ DURINI / SAN BABILA — Lighting Mile ============
  {
    id: "durini-flos", name: "Flos × Formafantasma", exhibition: "SuperWire",
    venue: "Flos Showroom / Palazzo Visconti", address: "Corso Monforte 15",
    district: "Durini", coords: [45.4655, 9.2025], pin: "F",
    description: "Neue Formafantasma-Kollektion — reduzierte Drahtleuchten · Eines der meistdiskutierten Produkte der Woche.",
    days: [20, 21, 22, 23, 24, 25, 26], highDemand: true,
    reservation: { required: false }
  },
  {
    id: "durini-artemide", name: "Artemide × Giulia Foscari", exhibition: "Criosfera",
    venue: "Artemide Showroom", address: "Corso Monforte 19",
    district: "Durini", coords: [45.4660, 9.2030], pin: "A",
    description: "Neue Leuchte Criosfera (Giulia Foscari) · BIG-Kooperation bei Università Statale.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false }
  },
  {
    id: "durini-foscarini", name: "Foscarini", exhibition: "Knitted Light + Allumette",
    venue: "Foscarini Showroom", address: "Corso Monforte 13",
    district: "Durini", coords: [45.4658, 9.2028], pin: "◒",
    description: "Forschung Licht × 3D-Stricktechniken · neue asymmetrische skulpturale Leuchte Allumette.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false }
  },
  {
    id: "durini-bb", name: "B&B Italia", exhibition: "Museale Neuheiten + Portraits",
    venue: "B&B Italia Store", address: "Via Durini 14",
    district: "Durini", coords: [45.4630, 9.1970], pin: "B",
    description: "Museale Indoor/Outdoor-Neuheiten + Dialoge zwischen italienischen Marken und Designlegenden (Superstudio Maxi).",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false }
  },
  {
    id: "durini-kartell", name: "Kartell", exhibition: "Outdoor in innovativen Materialien",
    venue: "Kartell Flagship", address: "Via Carlo Porta 1",
    district: "Durini", coords: [45.4700, 9.1950], pin: "K",
    description: "Outdoor-Neuheiten in innovativen Materialien.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false }
  },
  {
    id: "durini-poliform", name: "Poliform", exhibition: "Multitude — neuer Flagship ex-Trussardi",
    venue: "Piazza della Scala (ex-Palazzo Trussardi)", address: "Piazza della Scala 5",
    district: "Durini", coords: [45.4673, 9.1895], pin: "P",
    description: "Immersive Installation eines verborgenen urbanen Gartens · 3-stöckiger neuer Flagship.",
    days: [20, 21, 22, 23, 24, 25, 26], highDemand: true,
    reservation: { required: false }
  },
  {
    id: "durini-baxter", name: "Baxter", exhibition: "Baxter Cinema",
    venue: "Baxter Cinema", address: "Largo Augusto 1",
    district: "Durini", coords: [45.4630, 9.1950], pin: "🎬",
    description: "Kinoreifes immersives Showroom-Erlebnis, dreiteilige Präsentation.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false }
  },
  {
    id: "durini-cctapis", name: "CC-Tapis × Fornasetti", exhibition: "(META)FISICA",
    venue: "CC-Tapis Showroom", address: "Piazza S. Stefano 10",
    district: "Durini", coords: [45.4615, 9.1930], pin: "C",
    description: "Handgeknüpfte Teppiche · neue Kollektion mit Fornasetti *(META)FISICA*.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false }
  },
  {
    id: "sanbabila-polypiù", name: "PolyPiù", exhibition: "Luminous Skin (10 leuchtende Türme)",
    venue: "Piazza San Babila + Corso Europa/Monforte", address: "Piazza San Babila",
    district: "Durini", coords: [45.4645, 9.1970], pin: "|",
    description: "10 leuchtende Türme als urbane Installation entlang des Distrikts.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false }
  },
  {
    id: "sanbabila-kaldewei", name: "KALDEWEI × Parasite 2.0", exhibition: "Bubbles of Time",
    venue: "Palazzo Crespi", address: "Corso Matteotti 1",
    district: "Durini", coords: [45.4663, 9.1955], pin: "○",
    description: "Badezimmer-Neuinterpretation mit Parasite 2.0 + Forgotten Architecture.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false }
  },

  // ============ CENTRO — Mode Quadrilatero (NEU) ============
  {
    id: "centro-lv", name: "Louis Vuitton", exhibition: "Objets Nomades + Signature Collection",
    venue: "Palazzo Serbelloni + neuer Flagship Via Montenapoleone", address: "Corso Venezia 16",
    district: "Centro", coords: [45.4685, 9.1980], pin: "LV",
    description: "Debüt komplette LV-Home-Kollektion · Urquiola, Patrick Jouin, Cristián Mohaded · Nendo-Porzellan · Estúdio Campana Tischfußball · Charlotte Perriand *La Maison au Bord de l'Eau*.",
    days: [20, 21, 22, 23, 24, 25, 26], highDemand: true,
    reservation: { required: true, note: "Invitation / Appointment" }
  },
  {
    id: "centro-fendi", name: "Fendi Casa", exhibition: "Fendi Design Prize 2026 + cc-tapis-Teppiche",
    venue: "Fendi Casa", address: "Piazza della Scala (Ecke Via Verdi)",
    district: "Centro", coords: [45.4673, 9.1893], pin: "F",
    description: "Fendi Design Prize 2026 + neue Teppichlinie mit cc-tapis.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false, note: "RSVP empfohlen" }
  },
  {
    id: "centro-ferragamo", name: "Ferragamo", exhibition: "Floating Silk Garden",
    venue: "Ferragamo Boutique", address: "Via Montenapoleone 3",
    district: "Centro", coords: [45.4688, 9.1945], pin: "F",
    description: "Schwebende Foulards und Seidenkissen verwandeln Boutique in ätherischen Garten · botanische Prints Seta-Pre-Fall-2026.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false }
  },
  {
    id: "centro-giorgetti", name: "Giorgetti × Maserati", exhibition: "Automotive-Design-Crossover",
    venue: "Giorgetti (4 Etagen)", address: "Via della Spiga 31",
    district: "Centro", coords: [45.4705, 9.1960], pin: "G",
    description: "Neue Kooperation mit Maserati — Automotive-Design-Crossover.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false }
  },
  {
    id: "centro-armanicasa", name: "Giorgio Armani / Armani Casa", exhibition: "Borgonuovo-Spieltisch + Origins & Icons",
    venue: "Armani Casa Flagship", address: "Corso Venezia 14",
    district: "Centro", coords: [45.4680, 9.1975], pin: "A",
    description: "Neue Kollektion + Origins & Icons-Retrospektive.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false }
  },
  {
    id: "centro-issey", name: "Issey Miyake × Ensamble Studio", exhibition: "The Paper Log: Shell and Core",
    venue: "Issey Miyake Boutique", address: "Via Bagutta 12",
    district: "Centro", coords: [45.4680, 9.1955], pin: "I",
    description: "Skulpturale Papierformen aus Faltresten.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false }
  },
  {
    id: "centro-marni", name: "Marni × RedDuo Studio", exhibition: "Modular-Installation + Spritz-Menüs",
    venue: "Pasticceria Cucchi", address: "Corso Genova 1",
    district: "Centro", coords: [45.4600, 9.1775], pin: "M",
    description: "Modular-Installationen, custom Interior, Spritz-Menüs in Mailänder Kult-Pasticceria.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false }
  },
  {
    id: "centro-asics", name: "ASICS × Studio NUOVA", exhibition: "Kinetic Playscape (Fuorisalone-Debüt)",
    venue: "Garage 21", address: "Garage 21 (Corso di Porta Nuova area)",
    district: "Centro", coords: [45.4800, 9.1920], pin: "🏃",
    description: "5 immersive Umgebungen, die an Körperzustände gekoppelt sind.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false }
  },
  {
    id: "centro-bo-antolini", name: "Bang & Olufsen × Antolini", exhibition: "From Quarry to Garden",
    venue: "Antolini Stoneroom", address: "Piazza Fontana",
    district: "Centro", coords: [45.4637, 9.1928], pin: "🔊",
    description: "Preview Outdoor-Speaker Beosound Balance Natura · 16 Limited Custom-Speaker aus Quarz + versteinertem Holz.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false }
  },
  {
    id: "centro-frattini", name: "Gianfranco Frattini 1926–2026", exhibition: "Retrospektive zum 100. Geburtstag",
    venue: "Castello Sforzesco", address: "Piazza Castello",
    district: "Centro", coords: [45.4707, 9.1797], pin: "★",
    description: "Editionen von Artemide, Cassina, CB2, Gubi, Poltrona Frau, Tacchini, Torri Lana.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false }
  },
  {
    id: "centro-dimorestudio", name: "Dimorestudio / Dimoregallery", exhibition: "Neuer Galerieraum + Interni-Venosta",
    venue: "Palazzo Olivazzi + Via S. Vittore al Teatro 1/3", address: "Via Bigli 21",
    district: "Centro", coords: [45.4680, 9.1925], pin: "D",
    description: "Eröffnung neuer zweigeschossiger Galerieraum (ex-Bankgewölbe) + Interni-Venosta-Ausstellung im neoklassizistischen Palazzo.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false }
  },
  {
    id: "centro-tomdixon-hotel", name: "Tom Dixon", exhibition: "Mua Mua Hotel",
    venue: "Mua Mua Hotel (1929er Chiodi/Gio-Ponti-Gebäude)", address: "Via Aosta 2 (nahe Centrale)",
    district: "Centro", coords: [45.4870, 9.2005], pin: "🏨",
    description: "12-Zimmer-Mikrohotel · Vorschau AW26-Leuchten, Möbel, Accessoires.",
    days: [21, 22, 23, 24, 25, 26],
    reservation: { required: false, note: "Hotel-Eingang" }
  },
  {
    id: "centro-tomdixon-axis", name: "Tom Dixon × Cosentino", exhibition: "AXIS + Axis Talks",
    venue: "Casa Manzoni", address: "Via Gerolamo Morone 1",
    district: "Centro", coords: [45.4680, 9.1905], pin: "X",
    description: "5 konzeptuelle Räume + neue Axis-Tischkollektion + 8 internationale Designer-Talks · 20.–25.4.",
    days: [20, 21, 22, 23, 24, 25],
    reservation: { required: false, note: "RSVP für Talks" }
  },

  // ============ 5VIE — H&M etc. ============
  {
    id: "5vie-hm-wearstler", name: "H&M Home × Kelly Wearstler", exhibition: "Fuorisalone-Debüt beider",
    venue: "Palazzo Acerbi (Barock-Palazzo 17. Jh.)", address: "Corso di Porta Romana 3",
    district: "5VIE", coords: [45.4582, 9.1905], pin: "H",
    description: "13 Schlüsselstücke einer 29-teiligen Kollektion (Modularmöbel, Leuchten, Accessoires in Holz, Metall, Marmor, Keramik) · 21.–26.4.",
    days: [21, 22, 23, 24, 25, 26], highDemand: true,
    reservation: { required: false }
  },
  {
    id: "5vie-dongfeng", name: "Dongfeng", exhibition: "Two Natures. Infinite Scapes",
    venue: "Teatro Alcione", address: "Piazza Vetra 7",
    district: "5VIE", coords: [45.4595, 9.1820], pin: "🚘",
    description: "Voyah Passion L + MHero 1 EV-SUV · *Klinge des Lichts* symbolisiert Gleichgewicht zwischen Gegensätzen.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false }
  },
  {
    id: "5vie-bosa-cibic", name: "Bosa × Matteo Cibic", exhibition: "FLORESTA FUTURISTICA (50. Jubiläum)",
    venue: "Hotel Senato Milano (Garten)", address: "Via Senato 22",
    district: "5VIE", coords: [45.4685, 9.1995], pin: "🌳",
    description: "Futuristische Keramikwald-Installation zum 50-jährigen Bosa-Jubiläum.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false }
  },

  // ============ ISOLA — NEU ============
  {
    id: "isola-materially", name: "Materially", exhibition: "The New State of Materials (Panasonic u.v.m.)",
    venue: "Stecca3", address: "Via G. De Castillia 26",
    district: "Isola", coords: [45.4845, 9.1908], pin: "⚗",
    description: "Materialinnovationen · Panasonic, Balena, Caracol AM, Polymaker, Impact Acoustic, SMUSH u.v.m.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: true, link: "https://isola.design/rsvp-isoladesignfestival2026", note: "Festival-RSVP" }
  },
  {
    id: "isola-studioazzurro", name: "Studio Azzurro", exhibition: "Light Our Fire (INTERNI MATERIAE)",
    venue: "Urban Up/Unipol", address: "Via De Castillia 23",
    district: "Isola", coords: [45.4842, 9.1905], pin: "◉",
    description: "Kinetische Leuchtfassade · 37 m Durchmesser, 492 Paneele.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false }
  },
  {
    id: "isola-india-rasa", name: "Indien — Rasa", exhibition: "The Indian Collective",
    venue: "Fabbrica Sassetti", address: "Via Sassetti 31",
    district: "Isola", coords: [45.4872, 9.2033], pin: "🇮🇳",
    description: "Indische Handwerkstradition, zeitgenössisch reinterpretiert (Nidhi Chandak & Varun E S).",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: true, link: "https://isola.design/rsvp-isoladesignfestival2026", note: "Festival-RSVP" }
  },

  // ============ TRIENNALE — NEU ============
  {
    id: "triennale-branzi", name: "Andrea Branzi × Toyo Ito × Fondation Cartier", exhibition: "Continuous Present (400+ Werke)",
    venue: "Triennale Milano", address: "Viale Alemagna 6",
    district: "Triennale", coords: [45.4728, 9.1722], pin: "B",
    description: "Retrospektive konzipiert von Toyo Ito, co-produziert mit Fondation Cartier · 400+ Werke von Archizoom über Memphis bis anthropologisches Design · 19.3.–4.10.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: true, link: "https://triennale.org/en/whats-on", note: "Museumsticket" }
  },

  // ============ DROPCITY / NoLo — NEU ============
  {
    id: "nolo-nike", name: "Nike", exhibition: "NikeAir_Lab (Archiv Frank Rudy)",
    venue: "Dropcity", address: "Via Sammartini 56",
    district: "Centro", coords: [45.4850, 9.2050], pin: "👟",
    description: "Offenes Archiv zur Air-Technologie von Frank Rudy · Originalprototypen, Workshops, Talks.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false }
  },
  {
    id: "nolo-rovereto", name: "Roberto Sironi × Sansui", exhibition: "Future Memories",
    venue: "Stazione Rovereto (M1, verlassen)", address: "Stazione Rovereto (M1)",
    district: "Centro", coords: [45.4890, 9.2180], pin: "🚇",
    description: "Verlassene Metrostation als Frühstücks- / Ausstellungsort · täglich 9–12 h.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false, note: "9–12 h" }
  },

  // ============ PORTA NUOVA — NEU ============
  {
    id: "pn-truedesign", name: "True Design", exhibition: "Giada Montomoli + Adinne/Ahkka/Aura",
    venue: "True Design Showroom", address: "Viale della Liberazione 15",
    district: "Porta Nuova", coords: [45.4820, 9.1985], pin: "T",
    description: "Ortsspezifische Installation von Giada Montomoli + neue Kollektionen (Adinne, Ahkka, Aura).",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false }
  },
  {
    id: "pn-greenisland", name: "Green Island", exhibition: "INTO THE WOOD",
    venue: "Tiger Stazione Garibaldi", address: "Piazza Freud 1",
    district: "Porta Nuova", coords: [45.4830, 9.1880], pin: "🪵",
    description: "Handgefertigte Holzobjekte.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false }
  },

  // ============ LAMBRATE (NEU) ============
  {
    id: "lambrate-pet", name: "PET Design District (Erstausgabe)", exhibition: "Tierdesign / Mensch-Tier-Beziehungen",
    venue: "GreenHub", address: "Via Feltre 28/6",
    district: "Featured", coords: [45.4920, 9.2320], pin: "🐾",
    description: "Erster Designdistrikt 2026 für Tierdesign, Tierwohl und Mensch-Tier-Beziehungen · vollständig neues Format.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false }
  },

  // ============ MAGENTA / ROSSANA ORLANDI (NEU) ============
  {
    id: "magenta-orlandi", name: "Rossana Orlandi", exhibition: "RoCollectible 2026 — The Door",
    venue: "Galleria Rossana Orlandi", address: "Via Matteo Bandello 14/16",
    district: "Featured", coords: [45.4635, 9.1650], pin: "🚪",
    description: "Sammelbare und zeitgenössische Design-Panorama · Türen als archetypisches Design-/Symbolelement · 9:30–20 h.",
    days: [20, 21, 22, 23, 24, 25, 26], highDemand: true,
    reservation: { required: true, link: "https://www.rossanaorlandi.com", note: "Anmeldung" }
  },

  // ============ CROSS-DISTRICT ============
  {
    id: "cross-casartisti", name: "Doppia Firma + Homo Faber + Mazda", exhibition: "Handwerker-Designer-Kooperationen",
    venue: "Casa degli Artisti", address: "Corso Garibaldi (Via Tommaso da Cazzaniga)",
    district: "Brera", coords: [45.4790, 9.1855], pin: "H",
    description: "Doppia Firma *Grand Tour in Italy* (12 Designer-Handwerker) + Homo Faber Fellowship (22 Duos, Art-Dir. Bodino) + Mazda *Design & Art Experience*.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false }
  },
  {
    id: "cross-imperfetto", name: "Imperfettolab", exhibition: "SONNAMBULO LUCIDO",
    venue: "10 Corso Como", address: "Corso Como 10",
    district: "Porta Nuova", coords: [45.4822, 9.1870], pin: "☁",
    description: "Cumuliforme Aggregationsinstallation.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: false }
  },
  {
    id: "cross-kia-permanente", name: "Kia", exhibition: "Resonance of Opposites (Vision Meta Turismo)",
    venue: "Museo della Permanente", address: "Via Turati 34",
    district: "Centro", coords: [45.4755, 9.1965], pin: "K",
    description: "Kia Vision Meta Turismo-Konzept — Cross-District-Auftritt neben Salone dei Tessuti.",
    days: [22, 23, 24, 25, 26],
    reservation: { required: false }
  },
  {
    id: "cross-korea-adi", name: "Südkorea", exhibition: "Seoul Life 2026 – Heritage Reimagined (Soban)",
    venue: "ADI Design Museum", address: "Piazza Compasso d'Oro 1",
    district: "ADI", coords: [45.4858, 9.1719], pin: "🇰🇷",
    description: "Koreanischer Soban (tragbarer Esstisch) als zentrales Medium · immersives koreanisches Zuhause + Multimedia-Wand über zeitgenössisches Seoul.",
    days: [20, 21, 22, 23, 24, 25, 26],
    reservation: { required: true, link: "https://www.adidesignmuseum.org/en/", note: "Museumsticket" }
  }
];
