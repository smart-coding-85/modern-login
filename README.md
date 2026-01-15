# Login & Register UI

A beautiful, modern authentication UI built with React, TypeScript, and Tailwind CSS. Features stunning visual effects, dark mode support, and responsive design.

![React](https://img.shields.io/badge/React-19.1.0-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-06B6D4?logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?logo=vite)

## ✨ Features

- **Modern Login & Register Forms** - Clean, professional authentication pages
- **Dark/Light Theme Toggle** - Seamless theme switching with system preference support
- **Social Login Buttons** - Apple, Google, and GitHub OAuth integration ready
- **Animated Visual Panel** - Floating shapes, spinning rings, and pulsing effects
- **Testimonials Carousel** - Auto-rotating customer testimonials
- **Responsive Design** - Works perfectly on desktop and mobile devices
- **Form Validation** - Built-in input validation with visual feedback
- **Password Visibility Toggle** - Show/hide password functionality

## 🛠️ Tech Stack

- **Framework:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Build Tool:** Vite
- **Routing:** React Router v7
- **Icons:** Lucide React
- **HTTP Client:** Axios

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/smart-coding-85/login-image.git
cd login-image
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check code formatting |

## 📁 Project Structure

```
src/
├── components/
│   └── ui/
│       ├── button.tsx        # Button component
│       ├── card.tsx          # Card component
│       ├── field.tsx         # Form field components
│       ├── input.tsx         # Input component
│       ├── login-form.tsx    # Login form with visual panel
│       ├── register-form.tsx # Register form with visual panel
│       └── theme-toggle.tsx  # Dark/Light mode toggle
├── hooks/
│   └── use-theme.ts          # Theme management hook
├── lib/
│   └── utils.ts              # Utility functions (cn)
├── page/
│   ├── login.tsx             # Login page
│   └── register.tsx          # Register page
├── utils/
│   ├── constants.ts          # App constants
│   └── theme.ts              # Theme utilities
├── App.tsx                   # Main app with routing
├── main.tsx                  # Entry point
└── index.css                 # Global styles
```

## 🎨 UI Highlights

- **Glass Morphism Effects** - Frosted glass cards with backdrop blur
- **Gradient Backgrounds** - Beautiful gradient overlays
- **Micro-interactions** - Hover effects, scale transitions, and smooth animations
- **Custom Checkboxes** - Styled form elements
- **Stats Cards** - Displaying uptime and encryption info

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

Made with ❤️ using React + TypeScript + Tailwind CSS
