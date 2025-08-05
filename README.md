# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Portfolio Website

A responsive portfolio website showcasing my work as a web developer. Built with clean design principles and optimized for performance across all devices.

## 🚀 Live Demo

[View Live Site](https://yourname.github.io/portfolio-website)

## 📸 Screenshots

![Homepage](./screenshots/homepage.png)
![Projects Section](./screenshots/projects.png)
![Contact Page](./screenshots/contact.png)

## 🛠️ Built With

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Framework:** React.js
- **Styling:** Tailwind CSS / Styled Components
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** GitHub Pages / Netlify / Vercel

## ✨ Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Dark/Light Mode** - Toggle between themes
- **Smooth Animations** - Engaging micro-interactions
- **Project Showcase** - Interactive project cards with live demos
- **Contact Form** - Functional contact form with email integration
- **SEO Optimized** - Meta tags and structured data
- **Fast Loading** - Optimized images and code splitting

## 🏃‍♂️ Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm start
# or
yarn start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📂 Project Structure

```
portfolio-website/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── Projects/
│   │   ├── About/
│   │   └── Contact/
│   ├── assets/
│   │   ├── images/
│   │   └── icons/
│   ├── styles/
│   ├── utils/
│   └── App.js
├── screenshots/
└── README.md
```

## 🎨 Customization

### Colors
Update the color palette in `src/styles/globals.css`:
```css
:root {
  --primary-color: #3b82f6;
  --secondary-color: #1e40af;
  --accent-color: #f59e0b;
}
```

### Content
- Edit personal information in `src/data/profile.js`
- Update project data in `src/data/projects.js`
- Modify skills and experience in `src/data/skills.js`

### Images
- Add your profile photo to `src/assets/images/profile.jpg`
- Update project screenshots in `src/assets/images/projects/`

## 🚀 Deployment

### GitHub Pages
1. Update `homepage` in `package.json`:
```json
"homepage": "https://yourusername.github.io/portfolio-website"
```

2. Deploy:
```bash
npm run deploy
```

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist` or `build`

### Vercel
1. Connect your GitHub repository to Vercel
2. Deploy automatically on every push to main branch

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

Your Name - [@yourusername](https://twitter.com/yourusername) - your.email@example.com

Project Link: [https://github.com/yourusername/portfolio-website](https://github.com/yourusername/portfolio-website)

## 🙏 Acknowledgments

- [React Documentation](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Unsplash](https://unsplash.com/) for stock photos
- [Lucide](https://lucide.dev/) for icons

## 📊 Performance

- **Lighthouse Score:** 95+ on all metrics
- **Page Load Time:** < 2 seconds
- **Mobile Friendly:** 100% responsive
- **SEO Score:** 95+

---

⭐ Star this repo if you found it helpful!