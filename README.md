# Spider Solitaire

![Spider Solitaire](public/spider.svg)

A modern, open-source implementation of the classic Spider Solitaire card game, built with React, TypeScript, and Tailwind CSS.

## Features

- **Classic Gameplay**: Authentic Spider Solitaire rules and mechanics.
- **Modern UI**: Clean, responsive interface designed with Tailwind CSS.
- **Smart Features**:
  - **Undo System**: Unlimited undo functionality to help you strategize.
  - **Smart Hints**: Intelligent move suggestions when you're stuck.
  - **Auto-Complete**: Automatically detects and handles obvious moves.
- **Progress Tracking**:
  - Detailed statistics (Win rate, Streaks, Best Score, Best Time).
  - Daily Challenges.
  - Move counter and timer.
- **Customization**:
  - Multiple color themes/schemes.
  - Customizable card backs.
- **Persistence**: Game state and statistics are automatically saved locally.

## Tech Stack

- **Frontend**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Utilities**: [date-fns](https://date-fns.org/), [clsx](https://github.com/lukeed/clsx)

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/spider-solitaire.git
   cd spider-solitaire
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal).

### Building for Production

To create an optimized production build:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Open Source

This project is open source software. We believe in the power of community and transparent development.

- **Learn**: Explore the source code to see how a modern React game is architected.
- **Contribute**: Bug reports, feature requests, and pull requests are welcome!
- **Modify**: Feel free to fork the repository and customize the game to your liking.

## License

This project is available under the [MIT License](LICENSE).
