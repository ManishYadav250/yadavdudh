# 🥛 Yadav Dudh — Gaon Ka Shudh Dudh, Rozana Aapke Dwaar

गांव से सीधा आपके घर तक शुद्ध गाय-भैंस का दूध, देसी घी, दही, पनीर और मक्खन की डिलीवरी का बिज़नेस वेबसाइट।

**Website features:**
- 🛍️ Product catalog — Gai ka Dudh, Bhains ka Dudh, Desi Ghee, Dahi, Paneer, Makhan (with prices)
- 📅 Monthly subscription plans (Half-Litre / 1-Litre / 2-Litre daily)
- 💬 WhatsApp ordering — form भरते ही order WhatsApp पर message के रूप में चला जाता है (no backend needed!)
- ❓ FAQ accordion, customer testimonials, animated stats
- 📱 Fully responsive — mobile, tablet, desktop
- ♿ Accessible — keyboard navigation, ARIA labels, `prefers-reduced-motion` support
- ⚡ Zero dependencies — pure HTML/CSS/JS, कोई framework नहीं, कोई build step नहीं

## 🚀 Local Preview

कोई install नहीं चाहिए — बस folder को किसी static server से serve करें:

```bash
# Option 1: Python (pre-installed on most systems)
python3 -m http.server 8080

# Option 2: Node.js
npx serve .

# Option 3: VS Code → "Live Server" extension → index.html पर right-click → Open with Live Server
```

फिर ब्राउज़र में खोलें: **http://localhost:8080**

> ⚠️ `index.html` को सीधे double-click से भी खुल जाता है, लेकिन local server बेहतर है (paths + caching के लिए)।

## 📁 Project Structure

```
yadavdudh/
├── index.html          # Main page (single-page website)
├── css/
│   └── style.css       # Complete styling (custom design system, no framework)
├── js/
│   └── main.js         # Product rendering, WhatsApp order, FAQ, animations
├── images/
│   ├── logo.svg        # Brand logo (inline SVG, scalable)
│   ├── hero-milk.jpg   # Hero image (AI-generated)
│   ├── farm.jpg        # About section farm image (AI-generated)
│   └── products/       # Product photos (AI-generated)
├── README.md
└── .gitignore
```

## ✏️ Owner ke liye — kaise customize karein

| Kya badalna hai | Kahaan |
|---|---|
| WhatsApp number | `js/main.js` → `WA_NUMBER` (और `index.html` में `wa.me/919876543210` links) |
| Prices / products | `js/main.js` → `PRODUCTS` array |
| Monthly plans | `js/main.js` → `PLANS` array |
| Phone / address / email | `index.html` → footer + Order section |
| Product images | `images/products/` folder में same name से replace करें |
| Colors / branding | `css/style.css` → `:root` variables |

> ⚠️ **Placeholder नोट:** Phone number (`+91 98765 43210`), address (Village Bhogapur, Phagwara), email (hello@yadavdudh.in) और FSSAI number अभी **sample** हैं — जिन्हें real details से replace करना है।

## 🌐 Deployment (free)

1. **GitHub Pages:** Repo → Settings → Pages → Source: `main` branch, `/ (root)` → Save. Website live हो जाएगी `https://manishyadav250.github.io/yadavdudh/` पर।
2. **Netlify / Vercel:** Repo import करें — no build command, publish directory = root.
3. किसी भी shared hosting (Hostinger, etc.) पर `index.html` + folders upload कर दें।

## 🖥️ Antigravity (Google Antigravity IDE) pe kaise kholein

Antigravity me terminal kholkar repo clone karein:

```bash
git clone https://github.com/ManishYadav250/yadavdudh.git
cd yadavdudh
python3 -m http.server 8080
```

या Antigravity ka **"Open Folder / Clone Repository"** option use karein और ऊपर वाला GitHub URL paste करें।

**Is branch ka direct clone (agar abhi main me merge nahi hua):**

```bash
git clone -b arena/e506e210-yadavdudh https://github.com/ManishYadav250/yadavdudh.git
```

> Browser me `http://localhost:8080` kholein — website chal padegi. Antigravity ke AI agent se keh sakte hain: *"Run this static site and preview it"*.

## 🛠️ Tech Stack

- HTML5 + CSS3 (custom design system — CSS variables, Grid, Flexbox, clamp() typography)
- Vanilla JavaScript (ES6+, no frameworks, no build tools)
- [Baloo 2](https://fonts.google.com/specimen/Baloo+2) + [Inter](https://fonts.google.com/specimen/Inter) fonts
- WhatsApp Click-to-Chat API (`wa.me`) for order delivery
- AI-generated product & hero photography

---
Made with ❤️ in Punjab — **Yadav Dudh**, 2014 se shudh doodh ka bharosa.
