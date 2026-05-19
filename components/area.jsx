// Service area — real interactive map using Leaflet + OpenStreetMap tiles.
const areaStyles = `
.fpc-area {
  padding: var(--section-y) var(--pad-x);
  background: var(--paper);
  position: relative;
}
.fpc-area .inner {
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
}
.fpc-area h2 {
  font-family: var(--display);
  font-style: italic;
  font-weight: 800;
  font-size: clamp(48px, 6.5vw, 104px);
  line-height: 0.9;
  margin: 12px 0 18px;
  text-transform: uppercase;
}
.fpc-area .lead {
  color: #2a2f37;
  margin: 0 0 28px;
  font-size: 17px;
  line-height: 1.6;
  max-width: 460px;
}

.zip-check {
  background: #fff;
  border: 2px solid var(--ink);
  box-shadow: 6px 6px 0 0 var(--ink);
  padding: 18px;
  display: flex;
  gap: 10px;
  align-items: center;
  max-width: 460px;
  margin-bottom: 24px;
}
.zip-check input {
  flex: 1;
  border: none;
  outline: none;
  font: 700 18px var(--body);
  padding: 6px;
  background: transparent;
  letter-spacing: 0.1em;
}
.zip-check .btn { padding: 12px 20px; }
.zip-result {
  font-family: var(--body);
  font-weight: 700;
  font-size: 14px;
  padding: 6px 0;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
.zip-result.yes  { color: #14a35a; }
.zip-result.no   { color: #c5360f; }

.area-cities {
  display: flex; flex-wrap: wrap; gap: 8px;
  margin-top: 4px;
}
.area-cities .chip {
  font: 700 italic 13px var(--body);
  letter-spacing: 0.04em;
  padding: 6px 12px;
  background: #fff;
  border: 1.5px solid var(--ink);
  color: var(--ink);
  text-transform: uppercase;
}

/* Map panel — real Leaflet map */
.map-card {
  position: relative;
  aspect-ratio: 3 / 4;
  background: #15181c;
  border: 2px solid var(--ink);
  box-shadow: 12px 12px 0 0 var(--accent);
  overflow: hidden;
}
.map-card .map {
  position: absolute;
  inset: 0;
}
.map-card .label {
  position: absolute;
  top: 14px; left: 14px;
  z-index: 500;
  font: 700 11px var(--mono);
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #fff;
  background: rgba(2,2,2,0.78);
  padding: 6px 10px;
  pointer-events: none;
}
.map-card .legend {
  position: absolute;
  bottom: 14px; left: 14px;
  z-index: 500;
  font: 600 12px var(--body);
  color: #fff;
  background: rgba(2,2,2,0.78);
  padding: 6px 10px;
  pointer-events: none;
}
.map-card .legend .swatch {
  display: inline-block; width: 8px; height: 8px;
  background: var(--accent-2); margin-right: 6px;
  border-radius: 50%; box-shadow: 0 0 8px var(--accent-2);
  vertical-align: middle;
}
.map-card .legend .swatch-mo {
  display: inline-block; width: 8px; height: 8px;
  background: #ffd60a; margin: 0 6px 0 10px;
  border-radius: 50%;
  vertical-align: middle;
}

/* Hide Leaflet's default attribution control styling, brand it minimally */
.leaflet-container {
  background: #0f1115 !important;
  font-family: var(--body) !important;
}
.leaflet-control-attribution {
  background: rgba(2,2,2,0.65) !important;
  color: rgba(255,255,255,0.5) !important;
  font-size: 9px !important;
  letter-spacing: 0.04em;
}
.leaflet-control-attribution a {
  color: rgba(255,255,255,0.7) !important;
}
.leaflet-control-zoom a {
  background: rgba(2,2,2,0.85) !important;
  color: #fff !important;
  border: 1px solid rgba(255,255,255,0.15) !important;
}
.leaflet-control-zoom a:hover {
  background: var(--accent) !important;
}

/* Custom marker styles */
.flex-pin {
  background: transparent !important;
  border: none !important;
}
.flex-pin-dot {
  width: 10px; height: 10px;
  background: #fff;
  border: 2px solid var(--accent-2);
  border-radius: 50%;
  box-shadow: 0 0 0 1px var(--ink), 0 2px 6px rgba(0,0,0,0.6);
}
.flex-pin-mo {
  background: #ffd60a;
  border-color: #ffd60a;
}
.flex-pin-hq {
  width: 18px; height: 18px;
  background: var(--accent-2);
  border: 3px solid #fff;
  box-shadow: 0 0 0 2px var(--ink), 0 0 18px rgba(53,178,255,0.8);
}
.flex-pin-hq::before {
  content: "";
  position: absolute;
  left: 50%; top: 50%;
  transform: translate(-50%, -50%);
  width: 40px; height: 40px;
  border-radius: 50%;
  border: 2px solid var(--accent-2);
  opacity: 0.6;
  animation: hq-pulse 2.6s ease-out infinite;
}
@keyframes hq-pulse {
  0%   { transform: translate(-50%, -50%) scale(0.4); opacity: 0.8; }
  100% { transform: translate(-50%, -50%) scale(2.2); opacity: 0; }
}

.flex-label {
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
  color: #fff !important;
  font: 700 11px var(--body) !important;
  letter-spacing: 0.04em;
  text-shadow:
    0 0 3px rgba(2,2,2,0.95),
    0 0 6px rgba(2,2,2,0.85),
    1px 1px 0 rgba(2,2,2,0.9);
  text-transform: uppercase;
  white-space: nowrap;
  pointer-events: none;
}
.flex-label-hq {
  font-size: 13px !important;
  color: var(--accent-2) !important;
  text-shadow:
    0 0 4px rgba(2,2,2,1),
    0 0 8px rgba(2,2,2,0.9),
    1px 1px 0 rgba(2,2,2,0.95);
}
.leaflet-tooltip-left.flex-label::before,
.leaflet-tooltip-right.flex-label::before { display: none; }

@media (max-width: 980px) {
  .fpc-area .inner { grid-template-columns: 1fr; gap: 36px; }
  .map-card { aspect-ratio: 4 / 3; }
}
`;

const CITIES_SERVED = [
  // [name, lat, lng, role, labelDir]
  ['Bentonville',   36.372, -94.209, 'HQ', 'right'],
  ['Bella Vista',   36.481, -94.275, '',   'left'],
  ['Pea Ridge',     36.453, -94.114, '',   'right'],
  ['Centerton',     36.359, -94.286, '',   'left'],
  ['Rogers',        36.332, -94.119, '',   'right'],
  ['Cave Springs',  36.262, -94.230, '',   'left'],
  ['Lowell',        36.255, -94.131, '',   'right'],
  ['Tontitown',     36.181, -94.232, '',   'left'],
  ['Springdale',    36.187, -94.129, '',   'right'],
  ['Fayetteville',  36.063, -94.158, '',   'right'],
  ['Farmington',    36.041, -94.247, '',   'left'],
  ['Siloam Springs',36.188, -94.540, '',   'right'],
  ['Pineville',     36.595, -94.385, 'MO', 'left'],
  ['Noel',          36.546, -94.486, 'MO', 'left'],
  ['Cassville',     36.677, -93.870, 'MO', 'right'],
  ['Fort Smith',    35.385, -94.398, '',   'right'],
  ['Van Buren',     35.437, -94.349, '',   'right'],
  ['Alma',          35.476, -94.221, '',   'right'],
];

const VALID_ZIPS = new Set([
  '72712','72713','72714','72715','72716','72717','72718','72719',
  '72722','72727','72730','72732','72734','72736','72738','72740',
  '72744','72745','72747','72751','72753','72756','72757','72758','72762','72764',
  '72701','72702','72703','72704','72774',
  '64856','64854','64831','64862','64873','65625','65772','64850',
  '72901','72903','72904','72908','72916','72917','72921','72956','72957','72946','72936',
]);

// Coverage polygon — traces the real AR/OK state line as drawn on the basemap.
// Northern segment runs ~ -94.57°W (with a slight eastward slant going south);
// at the Fort Smith kink (~35.43°N) the border jogs east to ~-94.43°W and
// continues south at that meridian.
const COVERAGE_POLY = [
  [36.78, -94.575],  // NW corner — MO above the tri-state
  [36.78, -93.75],   // NE corner — north of Cassville
  [36.45, -93.75],   // E of Cassville
  [36.00, -93.85],
  [35.55, -93.95],
  [35.30, -94.05],   // SE corner
  [35.28, -94.432],  // SW corner — south of the Fort Smith kink
  [35.40, -94.432],  // up to the kink
  [35.43, -94.470],  // small diagonal across the kink
  [35.50, -94.555],  // back onto the northern segment
  [36.20, -94.565],  // tracking the slight slant past Siloam Springs
  [36.50, -94.575],  // tri-state corner area
  // closes back to [36.78, -94.575]
];

function FlexMap() {
  const elRef = React.useRef(null);
  const mapRef = React.useRef(null);

  React.useEffect(() => {
    if (!elRef.current || mapRef.current) return;
    if (typeof L === 'undefined') {
      console.warn('Leaflet not loaded');
      return;
    }

    // Bounds tight around the coverage area
    const bounds = L.latLngBounds(
      [35.25, -94.95],
      [36.82, -93.55],
    );

    const map = L.map(elRef.current, {
      zoomControl: true,
      scrollWheelZoom: false,
      dragging: true,
      doubleClickZoom: true,
      attributionControl: true,
      maxBounds: bounds.pad(0.4),
      minZoom: 7,
      maxZoom: 12,
    }).fitBounds(bounds, { padding: [10, 10] });

    mapRef.current = map;

    // CartoDB Dark Matter tiles — free, dark, matches the brand
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OSM</a> · © <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 19,
    }).addTo(map);

    // Coverage polygon
    const cov = L.polygon(COVERAGE_POLY, {
      color: 'rgba(53,178,255,0.85)',
      weight: 2.5,
      fillColor: 'rgba(53,178,255,0.18)',
      fillOpacity: 1,
      dashArray: '6 4',
    }).addTo(map);

    // Hard solid line on the AR/OK border (the western edge of coverage),
    // tracing the real state line including the Fort Smith kink.
    L.polyline(
      [
        [35.28, -94.432],
        [35.40, -94.432],
        [35.43, -94.470],
        [35.50, -94.555],
        [36.20, -94.565],
        [36.50, -94.575],
        [36.78, -94.575],
      ],
      {
        color: 'rgba(53,178,255,1)',
        weight: 4,
        opacity: 0.9,
      },
    ).addTo(map);

    // City markers
    CITIES_SERVED.forEach(([name, lat, lng, role, dir]) => {
      const isHQ = role === 'HQ';
      const isMO = role === 'MO';

      const icon = L.divIcon({
        className: 'flex-pin',
        html: `<div class="flex-pin-dot ${isHQ ? 'flex-pin-hq' : ''} ${isMO ? 'flex-pin-mo' : ''}"></div>`,
        iconSize: isHQ ? [18, 18] : [10, 10],
        iconAnchor: isHQ ? [9, 9] : [5, 5],
      });

      const marker = L.marker([lat, lng], { icon }).addTo(map);
      marker.bindTooltip(name, {
        permanent: true,
        direction: dir,
        offset: dir === 'right'
          ? [isHQ ? 12 : 8, 0]
          : [-(isHQ ? 12 : 8), 0],
        className: `flex-label ${isHQ ? 'flex-label-hq' : ''}`,
      });
    });

    // Refit on resize
    const onResize = () => {
      if (mapRef.current) mapRef.current.invalidateSize();
    };
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div className="map-card">
      <div className="label">Coverage Map</div>
      <div ref={elRef} className="map" />
      <div className="legend">
        <span className="swatch" /> HQ
        <span className="swatch-mo" /> SW Missouri
      </div>
    </div>
  );
}

function ServiceArea() {
  const [zip, setZip] = React.useState('');
  const [result, setResult] = React.useState(null);

  const check = (e) => {
    e?.preventDefault?.();
    const v = (zip || '').trim();
    if (v.length < 5) { setResult(null); return; }
    setResult(VALID_ZIPS.has(v) ? 'yes' : 'no');
  };

  return (
    <React.Fragment>
      <style>{areaStyles}</style>
      <section id="areas" className="fpc-area">
        <div className="inner">
          <div>
            <div className="eyebrow on-light">Service Area</div>
            <h2>
              All over NWA,<br />
              SW Missouri &amp;<br />
              the River Valley.
            </h2>
            <p className="lead">
              From Cassville and Pineville down through Bentonville, all the way to Fort Smith and Van Buren &mdash; if you&rsquo;re within ~45 minutes of HQ, we&rsquo;ve got you covered. Pop in your ZIP and we&rsquo;ll tell you on the spot.
            </p>

            <form className="zip-check" onSubmit={check}>
              <input
                inputMode="numeric"
                maxLength="5"
                placeholder="Enter ZIP code"
                value={zip}
                onChange={(e) => { setZip(e.target.value.replace(/\D/g, '')); setResult(null); }}
              />
              <button className="btn btn--sm" type="submit">
                Check <Ic.Arrow width="14" height="14" />
              </button>
            </form>
            {result === 'yes' && (
              <div className="zip-result yes">✓ We service {zip} &mdash; ready to roll.</div>
            )}
            {result === 'no' && (
              <div className="zip-result no">We don&rsquo;t cover {zip} yet &mdash; but call us, we&rsquo;re growing!</div>
            )}

            <div style={{ marginTop: 24 }}>
              <div className="kicker" style={{ marginBottom: 12, fontSize: 16 }}>Cities we serve</div>
              <div className="area-cities">
                {['Bentonville','Bella Vista','Pea Ridge','Rogers','Springdale','Fayetteville','Centerton','Cave Springs','Lowell','Tontitown','Farmington','Siloam Springs','Pineville, MO','Noel, MO','Cassville, MO','Fort Smith','Van Buren','Alma'].map((c) => (
                  <span className="chip" key={c}>{c}</span>
                ))}
              </div>
            </div>
          </div>

          <FlexMap />
        </div>
      </section>
    </React.Fragment>
  );
}

window.ServiceArea = ServiceArea;
