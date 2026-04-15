// Mailänder Metro-Stationen — Auswahl relevanter Stationen rund um Fuorisalone-Distrikte
// Koordinaten gerundet auf ~10 m Genauigkeit

const METRO_LINES = {
  M1: { color: "#d52b1e", name: "M1" },   // Rot
  M2: { color: "#00853e", name: "M2" },   // Grün
  M3: { color: "#f2a900", name: "M3" },   // Gelb
  M4: { color: "#009ee0", name: "M4" },   // Blau
  M5: { color: "#5b2c6f", name: "M5" },   // Lila
  FN: { color: "#7a7a7a", name: "FN" }    // Trenord/Suburban
};

const STATIONS = [
  // ===== M1 (Rot) =====
  { name: "Turro", coords: [45.5037, 9.2163], lines: ["M1"] },
  { name: "Rovereto", coords: [45.4990, 9.2180], lines: ["M1"] },
  { name: "Pasteur", coords: [45.4925, 9.2178], lines: ["M1"] },
  { name: "Loreto", coords: [45.4886, 9.2164], lines: ["M1", "M2"] },
  { name: "Lima", coords: [45.4805, 9.2072], lines: ["M1"] },
  { name: "Porta Venezia", coords: [45.4736, 9.2048], lines: ["M1"] },
  { name: "Palestro", coords: [45.4715, 9.2005], lines: ["M1"] },
  { name: "San Babila", coords: [45.4645, 9.1978], lines: ["M1", "M4"] },
  { name: "Duomo", coords: [45.4641, 9.1902], lines: ["M1", "M3"] },
  { name: "Cordusio", coords: [45.4660, 9.1865], lines: ["M1"] },
  { name: "Cairoli Castello", coords: [45.4700, 9.1825], lines: ["M1"] },
  { name: "Cadorna FN Triennale", coords: [45.4686, 9.1773], lines: ["M1", "M2", "FN"] },
  { name: "Conciliazione", coords: [45.4670, 9.1660], lines: ["M1"] },
  { name: "Pagano", coords: [45.4692, 9.1580], lines: ["M1"] },
  { name: "Buonarroti", coords: [45.4715, 9.1490], lines: ["M1"] },
  { name: "Amendola", coords: [45.4741, 9.1410], lines: ["M1"] },
  { name: "Lotto", coords: [45.4777, 9.1328], lines: ["M1", "M5"] },
  { name: "Bisceglie", coords: [45.4617, 9.1029], lines: ["M1"] },
  { name: "Bonola", coords: [45.5015, 9.1251], lines: ["M1"] },

  // ===== M2 (Grün) =====
  { name: "Famagosta", coords: [45.4378, 9.1757], lines: ["M2"] },
  { name: "Romolo", coords: [45.4443, 9.1768], lines: ["M2"] },
  { name: "Porta Genova FS", coords: [45.4527, 9.1735], lines: ["M2"] },
  { name: "Sant'Ambrogio", coords: [45.4625, 9.1728], lines: ["M2", "M4"] },
  { name: "Lanza Brera", coords: [45.4728, 9.1830], lines: ["M2"] },
  { name: "Moscova", coords: [45.4798, 9.1863], lines: ["M2"] },
  { name: "Garibaldi FS", coords: [45.4843, 9.1884], lines: ["M2", "M5"] },
  { name: "Gioia", coords: [45.4827, 9.1965], lines: ["M2"] },
  { name: "Centrale FS", coords: [45.4866, 9.2055], lines: ["M2", "M3"] },
  { name: "Caiazzo", coords: [45.4900, 9.2166], lines: ["M2"] },
  { name: "Piola", coords: [45.4795, 9.2305], lines: ["M2"] },
  { name: "Lambrate FS", coords: [45.4822, 9.2397], lines: ["M2"] },

  // ===== M3 (Gelb) =====
  { name: "Porta Romana", coords: [45.4495, 9.2005], lines: ["M3"] },
  { name: "Crocetta", coords: [45.4583, 9.1988], lines: ["M3"] },
  { name: "Missori", coords: [45.4613, 9.1920], lines: ["M3"] },
  { name: "Montenapoleone", coords: [45.4692, 9.1942], lines: ["M3"] },
  { name: "Turati", coords: [45.4754, 9.1953], lines: ["M3"] },
  { name: "Repubblica", coords: [45.4801, 9.1990], lines: ["M3"] },
  { name: "Sondrio", coords: [45.4923, 9.2028], lines: ["M3"] },
  { name: "Zara", coords: [45.4937, 9.1950], lines: ["M3", "M5"] },
  { name: "Maciachini", coords: [45.4993, 9.1874], lines: ["M3"] },
  { name: "Dergano", coords: [45.5053, 9.1838], lines: ["M3"] },
  { name: "Affori Centro", coords: [45.5127, 9.1793], lines: ["M3"] },

  // ===== M4 (Hellblau) =====
  { name: "Dateo", coords: [45.4697, 9.2152], lines: ["M4"] },
  { name: "Tricolore", coords: [45.4668, 9.2028], lines: ["M4"] },
  { name: "Sforza Policlinico", coords: [45.4589, 9.1956], lines: ["M4"] },
  { name: "Santa Sofia", coords: [45.4579, 9.1890], lines: ["M4"] },
  { name: "Vetra", coords: [45.4598, 9.1846], lines: ["M4"] },
  { name: "De Amicis", coords: [45.4599, 9.1785], lines: ["M4"] },
  { name: "San Vittore", coords: [45.4618, 9.1708], lines: ["M4"] },
  { name: "Frattini", coords: [45.4514, 9.1390], lines: ["M4"] },
  { name: "San Cristoforo FS", coords: [45.4443, 9.1270], lines: ["M4"] },
  { name: "Forlanini FS", coords: [45.4610, 9.2475], lines: ["M4"] },

  // ===== M5 (Lila) =====
  { name: "Isola", coords: [45.4849, 9.1908], lines: ["M5"] },
  { name: "Monumentale", coords: [45.4860, 9.1767], lines: ["M5"] },
  { name: "Cenisio", coords: [45.4892, 9.1700], lines: ["M5"] },
  { name: "Gerusalemme", coords: [45.4861, 9.1619], lines: ["M5"] },
  { name: "Domodossola FN", coords: [45.4835, 9.1570], lines: ["M5", "FN"] },
  { name: "Tre Torri", coords: [45.4794, 9.1546], lines: ["M5"] },
  { name: "Portello", coords: [45.4826, 9.1460], lines: ["M5"] },
  { name: "San Siro Stadio", coords: [45.4785, 9.1235], lines: ["M5"] },
  { name: "Bicocca", coords: [45.5105, 9.2120], lines: ["M5"] },

  // ===== Trenord / Suburban (FN) — relevant für Bovisa/Alcova-Baggio =====
  { name: "Milano Bovisa FN", coords: [45.5003, 9.1715], lines: ["FN"] },
  { name: "Villapizzone FS", coords: [45.4988, 9.1580], lines: ["FN"] },
  { name: "Baggio (ATM Bus 58/67)", coords: [45.4585, 9.0940], lines: ["BUS"] }
];

// Haversine-Distanz in Metern
function stationDistance(a, b) {
  const R = 6371000;
  const toRad = x => x * Math.PI / 180;
  const dLat = toRad(b[0] - a[0]);
  const dLng = toRad(b[1] - a[1]);
  const lat1 = toRad(a[0]);
  const lat2 = toRad(b[0]);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

// Gibt die nächsten Stationen zurück — max 2 innerhalb maxDist, sonst die absolut nächste
function nearestStations(coords, maxDist = 600, maxCount = 2) {
  const withDist = STATIONS.map(s => ({ ...s, dist: Math.round(stationDistance(coords, s.coords)) }));
  withDist.sort((a, b) => a.dist - b.dist);
  const within = withDist.filter(s => s.dist <= maxDist).slice(0, maxCount);
  if (within.length > 0) return within;
  return withDist.slice(0, 1); // Fallback: weiteste nächste
}

function stationLineChip(line) {
  const meta = METRO_LINES[line];
  if (meta) {
    return `<span class="line-chip" style="background:${meta.color};color:${line === 'M3' ? '#000' : '#fff'};">${meta.name}</span>`;
  }
  return `<span class="line-chip" style="background:#444;color:#fff;">${line}</span>`;
}

function formatDistance(m) {
  if (m < 950) return `${m} m`;
  return `${(m / 1000).toFixed(1)} km`;
}

function stationsLine(coords) {
  const stations = nearestStations(coords);
  return stations.map(s => {
    const lines = s.lines.map(stationLineChip).join("");
    return `${lines} <span class="station-name">${s.name}</span> <span class="station-dist">${formatDistance(s.dist)}</span>`;
  }).join("<span class='station-sep'>·</span>");
}
