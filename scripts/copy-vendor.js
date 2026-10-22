// ينسخ مكتبة Supabase (و Leaflet) من node_modules إلى www/vendor بعد npm install
const fs = require('fs');
const path = require('path');
const out = path.join(__dirname, '..', 'www', 'vendor');
fs.mkdirSync(out, { recursive: true });
const files = [
  ['@supabase/supabase-js/dist/umd/supabase.js', 'supabase.js'],
  ['leaflet/dist/leaflet.js', 'leaflet.js'],
  ['leaflet/dist/leaflet.css', 'leaflet.css'],
];
for (const [from, to] of files) {
  const src = path.join(__dirname, '..', 'node_modules', from);
  if (fs.existsSync(src)) { fs.copyFileSync(src, path.join(out, to)); console.log('vendor:', to); }
  else console.warn('missing:', from);
}
