# Aura AI Analytics Dashboard

A React + TypeScript dashboard built with HeroUI and Tailwind CSS.

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── icons/           # Icon components
│   │   ├── BellIcon.tsx
│   │   ├── ChartIcon.tsx
│   │   ├── CompareIcon.tsx
│   │   ├── ShareIcon.tsx
│   │   ├── StarIcon.tsx
│   │   ├── TrendIcon.tsx
│   │   └── index.tsx
│   ├── AuraLogo.tsx     # Animated gradient logo
│   ├── ExampleCard.tsx  # Example suggestion cards
│   ├── Header.tsx       # Top navigation header
│   ├── SearchInput.tsx  # AI search input
│   └── index.tsx
├── pages/               # Page components
│   ├── WelcomePage.tsx  # Main welcome/landing page
│   └── index.tsx
├── App.tsx              # Main app component
├── main.tsx             # Entry point with HeroUI provider
└── index.css            # Global styles with Tailwind
```

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **HeroUI (NextUI)** - Component library
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animations

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Opens the app at [http://localhost:5173](http://localhost:5173)

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Features

- ✅ Clean, responsive layout
- ✅ HeroUI components (Input, Card, Button)
- ✅ Custom gradient Aura logo
- ✅ Interactive example cards
- ✅ Hover states and transitions
- ✅ Consistent typography and spacing

## Design Details

### Colors

- **Primary Purple**: `#A855F7`
- **Primary Pink**: `#EC4899`
- **Background**: `#F8F9FB`
- **Text Primary**: `#1F2937`
- **Text Secondary**: `#6B7280`

### Typography

- System UI font stack
- Font sizes follow Tailwind defaults
- Proper heading hierarchy

## Code Quality

- TypeScript for type safety
- Component-based architecture
- Clean separation of concerns
- Reusable icon components
- Proper file organization
  tseslint.configs.stylisticTypeChecked,

        // Other configs...
      ],
      languageOptions: {
        parserOptions: {
          project: ['./tsconfig.node.json', './tsconfig.app.json'],
          tsconfigRootDir: import.meta.dirname,
        },
        // other options...
      },

  },
  ])

````

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
````
