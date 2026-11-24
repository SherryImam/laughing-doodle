/* =========================================================
   HALO SHEA — store content (concept build, fictional brand)
   The shop owner only edits this file: products, prices,
   bundle and shipping threshold. Pages update themselves.
   ========================================================= */
var STORE = {
  name: "Halo Shea",
  currency: "$",
  freeShippingOver: 60,
  products: [
    { id: "body-butter", name: "Whipped Shea Body Butter", short: "Deep moisture for dry skin, 48 hours.", price: 28, size: "200 ml", type: "jar", color: "#e9d3b5", accent: "#b9875a", rating: 4.9, reviews: 1284, badge: "Bestseller",
      benefits: ["Raw Ghanaian shea, whipped light", "Melts in, never greasy", "Fragrance: vanilla & orange peel"],
      ingredients: "Shea butter, cocoa butter, coconut oil, vitamin E, vanilla extract, sweet orange oil." },
    { id: "face-oil", name: "Baobab Glow Face Oil", short: "Lightweight oil for an all-day glow.", price: 34, size: "30 ml", type: "dropper", color: "#f0c36a", accent: "#b7791f", rating: 4.8, reviews: 842, badge: "New",
      benefits: ["Absorbs in 60 seconds", "Evens tone with daily use", "Non-comedogenic"],
      ingredients: "Baobab seed oil, marula oil, rosehip oil, vitamin E." },
    { id: "cleanser", name: "Black Soap Gentle Cleanser", short: "Clears without stripping.", price: 18, size: "150 ml", type: "pump", color: "#45423c", accent: "#d9c7a3", rating: 4.7, reviews: 1033,
      benefits: ["Plantain-ash African black soap", "pH balanced", "Safe for daily use"],
      ingredients: "African black soap, aloe vera, glycerin, tea tree oil." },
    { id: "toning-mist", name: "Hibiscus Toning Mist", short: "Hydrate and refresh, anytime.", price: 22, size: "100 ml", type: "spray", color: "#d65a7f", accent: "#7d1d3f", rating: 4.8, reviews: 516,
      benefits: ["Hibiscus + rose water", "Sets makeup, refreshes skin", "Alcohol-free"],
      ingredients: "Hibiscus flower water, rose water, glycerin, niacinamide." },
    { id: "night-cream", name: "Moringa Night Cream", short: "Repair while you sleep.", price: 38, size: "50 ml", type: "jar", color: "#9db67d", accent: "#4b6b2f", rating: 4.9, reviews: 677,
      benefits: ["Moringa + peptides", "Wake up to softer skin", "Rich but breathable"],
      ingredients: "Moringa oil, shea butter, peptides, squalane, ceramides." },
    { id: "body-scrub", name: "Coffee & Shea Body Scrub", short: "Smooth, bright skin in one shower.", price: 24, size: "250 ml", type: "jar", color: "#7a5236", accent: "#e7c9a5", labelInk: "#7a5236", rating: 4.8, reviews: 921,
      benefits: ["Fair-trade coffee grounds", "Polishes + moisturises", "Smells like a café"],
      ingredients: "Coffee grounds, brown sugar, shea butter, coconut oil." }
  ],
  bundle: { id: "glow-ritual", name: "The Glow Ritual", items: ["cleanser", "face-oil", "night-cream"], price: 75 }
};

/* ---------- helpers (no need to edit below) ---------- */
function money(n) { return STORE.currency + (Math.round(n * 100) / 100).toFixed(n % 1 ? 2 : 0); }
function getProduct(id) { for (var i = 0; i < STORE.products.length; i++) if (STORE.products[i].id === id) return STORE.products[i]; return null; }
function stars(r) { var s = ""; for (var i = 1; i <= 5; i++) s += i <= Math.round(r) ? "★" : "☆"; return s; }

function productArt(p, big) {
  var c = p.color, a = p.accent, w = 200, h = 220, fs = p.type === "jar" ? 11 : 7.6, ls = p.type === "jar" ? 2 : 0.8,
    label = '<text x="100" y="#Y" text-anchor="middle" font-family="Georgia,serif" font-size="' + fs + '" fill="' + (p.labelInk || a) + '" letter-spacing="' + ls + '">HALO SHEA</text>';
  var body = "";
  if (p.type === "jar") {
    body = '<rect x="45" y="78" width="110" height="20" rx="6" fill="' + a + '"/>' +
      '<rect x="40" y="96" width="120" height="96" rx="18" fill="' + c + '"/>' +
      '<rect x="56" y="124" width="88" height="40" rx="4" fill="#fffaf2"/>' + label.replace("#Y", "149");
  } else if (p.type === "dropper") {
    body = '<rect x="88" y="34" width="24" height="34" rx="10" fill="' + a + '"/><rect x="84" y="64" width="32" height="18" rx="3" fill="#2b2b2b"/>' +
      '<rect x="62" y="80" width="76" height="114" rx="16" fill="' + c + '" opacity=".92"/>' +
      '<rect x="70" y="118" width="60" height="40" rx="4" fill="#fffaf2"/>' + label.replace("#Y", "143");
  } else if (p.type === "pump") {
    body = '<rect x="96" y="22" width="8" height="28" fill="#2b2b2b"/><rect x="78" y="18" width="40" height="10" rx="4" fill="#2b2b2b"/><rect x="86" y="48" width="28" height="16" rx="3" fill="#2b2b2b"/>' +
      '<rect x="64" y="62" width="72" height="132" rx="14" fill="' + c + '"/>' +
      '<rect x="72" y="112" width="56" height="44" rx="4" fill="' + a + '"/>' + label.replace("#Y", "139").replace('fill="' + (p.labelInk || a) + '" letter', 'fill="#2b2b2b" letter');
  } else {
    body = '<rect x="86" y="30" width="28" height="22" rx="4" fill="#f4f4f4" stroke="#ddd"/><rect x="112" y="36" width="12" height="6" rx="2" fill="#ddd"/><rect x="88" y="50" width="24" height="14" fill="#e8e8e8"/>' +
      '<rect x="62" y="62" width="76" height="132" rx="20" fill="' + c + '"/>' +
      '<rect x="70" y="112" width="60" height="42" rx="4" fill="#fffaf2"/>' + label.replace("#Y", "137");
  }
  var name = '<text x="100" y="#Y2" text-anchor="middle" font-family="-apple-system,Segoe UI,sans-serif" font-size="7.5" fill="#6b6257">' + p.size + '</text>';
  var y2 = p.type === "jar" ? 158 : p.type === "dropper" ? 152 : p.type === "pump" ? 148 : 146;
  return '<svg viewBox="0 0 ' + w + ' ' + h + '" role="img" aria-label="' + p.name + '" xmlns="http://www.w3.org/2000/svg">' +
    '<ellipse cx="100" cy="200" rx="70" ry="8" fill="rgba(0,0,0,.08)"/>' + body + name.replace("#Y2", y2) + '</svg>';
}

/* Cart: kept in memory, with a best-effort save in the browser */
var CART = (function () {
  var items = [];
  try { items = JSON.parse(localStorage.getItem("haloCart") || "[]"); } catch (e) { items = []; }
  function save() { try { localStorage.setItem("haloCart", JSON.stringify(items)); } catch (e) {} render(); }
  function add(id, qty, label, price) {
    for (var i = 0; i < items.length; i++) if (items[i].id === id) { items[i].qty += qty; save(); open(); return; }
    items.push({ id: id, qty: qty, label: label, price: price }); save(); open();
  }
  function change(id, d) {
    for (var i = 0; i < items.length; i++) if (items[i].id === id) { items[i].qty += d; if (items[i].qty <= 0) items.splice(i, 1); break; }
    save();
  }
  function subtotal() { var t = 0; items.forEach(function (it) { t += it.price * it.qty; }); return t; }
  function count() { var t = 0; items.forEach(function (it) { t += it.qty; }); return t; }
  function open() { document.body.classList.add("cart-open"); }
  function close() { document.body.classList.remove("cart-open"); }
  function render() {
    var c = document.getElementById("cartCount"); if (c) c.textContent = count();
    var list = document.getElementById("cartItems"); if (!list) return;
    if (!items.length) { list.innerHTML = '<p class="empty">Your bag is empty.</p>'; }
    else list.innerHTML = items.map(function (it) {
      return '<div class="ci"><div><b>' + it.label + '</b><span>' + money(it.price) + '</span></div>' +
        '<div class="qty"><button onclick="CART.change(\'' + it.id + '\',-1)" aria-label="Remove one">−</button><span>' + it.qty + '</span><button onclick="CART.change(\'' + it.id + '\',1)" aria-label="Add one">+</button></div></div>';
    }).join("");
    var st = subtotal(), left = STORE.freeShippingOver - st;
    document.getElementById("cartSubtotal").textContent = money(st);
    document.getElementById("shipMsg").textContent = left > 0 ? "You're " + money(left) + " away from free shipping" : "You've unlocked free shipping ✓";
    document.getElementById("shipBar").style.width = Math.min(100, st / STORE.freeShippingOver * 100) + "%";
  }
  return { add: add, change: change, open: open, close: close, render: render };
})();

function cartDrawerHTML() {
  return '<div class="scrim" onclick="CART.close()"></div>' +
    '<aside class="drawer" aria-label="Shopping bag"><div class="dh"><b>Your bag</b><button onclick="CART.close()" aria-label="Close">✕</button></div>' +
    '<div class="ship"><span id="shipMsg"></span><div class="track"><i id="shipBar"></i></div></div>' +
    '<div id="cartItems" class="items"></div>' +
    '<div class="df"><div class="row"><span>Subtotal</span><b id="cartSubtotal"></b></div>' +
    '<button class="btn dark full" onclick="document.getElementById(\'coMsg\').textContent=\'Demo store: checkout is turned off.\'">Checkout</button>' +
    '<p id="coMsg" class="tiny" role="status"></p><p class="tiny">Shipping and taxes calculated at checkout.</p></div></aside>';
}
