# GSAP Cocktails 🍹

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)  
[![Stars](https://img.shields.io/github/stars/Aayush-Ash/gsap-cocktails?style=social)]()

> A fun, animated cocktail menu built with GSAP and modern web tools.  
> Mix & match drinks, animations, and transitions — all in the browser.

---

## 🎥 Demo

Check out the live demo or view the animation in action:

![demo-gif](./assets/demo.gif)  
Live Demo: `https://your-demo-link.com` *(replace with actual URL)*

---

## ✨ Features

- ✅ Smooth animations & transitions using **GSAP**  
- ✅ Interactive drink selection & animations  
- ✅ Modular code structure (components, constants)  
- ✅ Responsive & performant  
- ✅ Easy to extend with new cocktails, animations, themes  

---

## 🧰 Tech Stack

| Layer        | Technology               |
|--------------|---------------------------|
| UI / Anim    | HTML, CSS, JavaScript     |
| Animation    | GSAP (GreenSock)          |
| Build Tool   | Vite                      |
| Linting      | ESLint                    |
| Hosting      | Static / SPA ready        |

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14+)  
- npm or yarn  

### Installation & Running Locally

```bash
# Clone the repo
git clone https://github.com/Aayush-Ash/gsap-cocktails.git
cd gsap-cocktails

# Install dependencies
npm install       # or `yarn`

# Start development server
npm run dev       # or `yarn dev`

# Build for production
npm run build
```

---

## 🧩 Usage & Examples

Here’s a minimal usage example (if applicable):

```html
<div id="cocktail-menu"></div>
<script type="module">
  import { initMenu } from './src/index.js';

  initMenu({
    container: document.getElementById('cocktail-menu'),
    drinks: [
      { name: 'Mojito', color: '#a8e6cf' },
      { name: 'Cosmopolitan', color: '#ff8b94' },
    ]
  });
</script>
```

*(Adapt based on how your module/API is structured.)*

---

## ⚙️ Configuration & Customization

- **/constants**: define drink names, colors, animation durations  
- **/src**: core logic, animations, UI components  
- **CSS / styling**: override or extend themes & styles  
- **Vite config**: for path aliases, build tweaks  

Feel free to add new drinks or animation variations by editing the constants and hooking into the animation engine.

---

## 🧪 Testing & Quality

- Run linters & formatters:  
  ```bash
  npm run lint
  npm run format
  ```

- (Optional) Add unit tests or snapshot tests with your favorite test runner (e.g. Jest, Vitest).

---

## 🔁 CI / Deployment

If you set up GitHub Actions or similar CI, consider:

- Lint & test on PR  
- Auto-deploy to GitHub Pages / Netlify / Vercel  
- Version bump & release tagging  

Here’s a sample stub for `.github/workflows/ci.yml`:

```yaml
name: CI

on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Install Dependencies
        run: npm install
      - name: Lint
        run: npm run lint
      - name: Build
        run: npm run build
```

---

## 🛠️ Roadmap

- Add more cocktail animations & variants  
- Theme / color customization  
- Export animations as GIF / video  
- Mobile / touch optimization  
- Accessibility enhancements  

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!  
1. Fork the repository  
2. Create your feature branch: `git checkout -b feature/foo`  
3. Commit your changes: `git commit -m "Add foo"`  
4. Push to the branch: `git push origin feature/foo`  
5. Open a Pull Request  

Please follow the code style and ensure lint checks pass before submitting.

---

## 📜 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 📬 Contact

- Author: Aayush Ash  
- GitHub: [Aayush-Ash](https://github.com/Aayush-Ash)  
- Email: kashyapaayush3331@gmail.com  

---

## 🙏 Acknowledgements

- GSAP — for its powerful animation engine  
- Vite & the frontend ecosystem  
- Open source libraries & inspirations  
