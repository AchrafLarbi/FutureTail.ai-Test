# Aura AI Analytics Dashboard

A modern React + TypeScript AI analytics dashboard built with HeroUI and Tailwind CSS, featuring a collapsible sidebar, dark mode support, and an intelligent assistant interface.

## 🚀 Features

- ✅ **Dark Mode** - Toggle between light and dark themes with localStorage persistence
- ✅ **Collapsible Sidebar** - Space-efficient navigation with smooth animations
- ✅ **AI Assistant Selector** - Choose from multiple AI assistants (GPT-4, Claude, Gemini)
- ✅ **Chat History** - Track and manage conversation threads
- ✅ **Dashboard Management** - Multiple customizable dashboards
- ✅ **User Profile & Settings** - Complete user menu with settings access
- ✅ **Responsive Design** - Works seamlessly on all screen sizes
- ✅ **Custom Animations** - Smooth transitions and hover effects
- ✅ **HeroUI Components** - Beautiful, accessible UI components

## 📁 Project Structure

```
src/
├── assets/                    # Static assets
│   └── icon/                  # App icons and images
│       ├── aura_sidebar.png
│       └── avatar.png
├── components/                # Reusable UI components
│   ├── home/                  # Home page components
│   │   ├── AuraLogo.tsx       # Animated gradient logo
│   │   ├── ExampleCard.tsx    # Example suggestion cards
│   │   ├── Header.tsx         # Top navigation header
│   │   ├── SearchInput.tsx    # AI search input with assistant dropdown
│   │   └── index.tsx
│   ├── icons/                 # Icon components
│   │   ├── home/              # Home-specific icons
│   │   │   ├── BellIcon.tsx
│   │   │   ├── ChartIcon.tsx
│   │   │   ├── CompareIcon.tsx
│   │   │   ├── InfoIcon.tsx
│   │   │   ├── RobotIcon.tsx
│   │   │   ├── SendIcon.tsx
│   │   │   ├── ShareIcon.tsx
│   │   │   ├── StarIcon.tsx
│   │   │   ├── TrendIcon.tsx
│   │   │   └── index.tsx
│   │   ├── shared/            # Shared icons
│   │   │   ├── ChevronDownIcon.tsx
│   │   │   ├── PlusIcon.tsx
│   │   │   ├── SettingsIcon.tsx
│   │   │   └── index.tsx
│   │   ├── sidebar/           # Sidebar icons
│   │   │   ├── ChatIcon.tsx
│   │   │   ├── CrownIcon.tsx
│   │   │   ├── DashboardChartIcon.tsx
│   │   │   ├── DashboardTrendIcon.tsx
│   │   │   ├── GridIcon.tsx
│   │   │   ├── HelpIcon.tsx
│   │   │   ├── HistoryIcon.tsx
│   │   │   ├── LogOutIcon.tsx
│   │   │   ├── MoonIcon.tsx
│   │   │   ├── SearchIcon.tsx
│   │   │   ├── SidebarCollapseIcon.tsx
│   │   │   └── index.tsx
│   │   └── index.tsx
│   ├── sidebar/               # Sidebar components
│   │   ├── Sidebar.tsx        # Main sidebar with navigation
│   │   └── index.tsx
│   └── index.tsx
├── context/                   # React Context providers
│   ├── DarkModeContext.tsx    # Dark mode state management
│   └── index.tsx
├── pages/                     # Page components
│   ├── home/
│   │   ├── WelcomePage.tsx    # Main welcome/landing page
│   │   └── index.tsx
│   └── index.tsx
├── App.tsx                    # Main app component with providers
├── App.css                    # App-specific styles
├── main.tsx                   # Entry point with HeroUI provider
└── index.css                  # Global styles with Tailwind
```

## 🛠️ Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Fast build tool and dev server
- **HeroUI** - Modern component library
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher) or **yarn** (v1.22.0 or higher)
- **Git**

## 🚀 Getting Started

### Clone the Repository

```bash
# Clone the repository
git clone https://github.com/your-username/FutureTailai.git

# Navigate to the project directory
cd FutureTailai
```

### Install Dependencies

```bash
# Using npm
npm install

# Or using yarn
yarn install
```

### Start Development Server

```bash
# Using npm
npm run dev

# Or using yarn
yarn dev
```

The application will open at [http://localhost:5173](http://localhost:5173)

### Build for Production

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

## 🎨 Design System

### Colors

| Color          | Light Mode | Dark Mode            |
| -------------- | ---------- | -------------------- |
| Background     | `#F9FAFB`  | `#030712` (gray-950) |
| Sidebar        | `#FFFFFF`  | `#111827` (gray-900) |
| Primary Purple | `#AD46FF`  | `#AD46FF`            |
| Primary Pink   | `#F6339A`  | `#F6339A`            |
| Text Primary   | `#1F2937`  | `#FFFFFF`            |
| Text Secondary | `#6B7280`  | `#9CA3AF`            |

### Typography

- **Font Family**: Inter, system-ui, sans-serif
- **Heading**: Bold, responsive sizing
- **Body**: Regular weight, optimized line-height

## 🌙 Dark Mode

Dark mode can be toggled via:

1. Click on **Dashboard 1** in the sidebar
2. Click on **Dark Mode** in the user menu
3. Use the toggle switch to enable/disable

The preference is automatically saved to localStorage and respects system preferences on first load.

## 📝 Available Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Build for production     |
| `npm run preview` | Preview production build |
| `npm run lint`    | Run ESLint               |

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.
