# Spider Solitaire

<img src="public/spider.svg" width="200" alt="Spider Solitaire" />

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

## Docker Deployment

This application can be easily deployed using Docker. The image is automatically built and pushed to Docker Hub and GitHub Container Registry (GHCR) on every update to the main branch.

### Using Docker Compose (Recommended)

A `compose.yaml` file is included in the repository for quick deployment.

1. Run the application:
   ```bash
   docker compose up -d
   ```

2. Open your browser and navigate to `http://localhost:8080`.

### Using Docker CLI

You can also run the container directly using the Docker CLI.

**From Docker Hub:**
```bash
docker run -d -p 8080:80 --name spider-solitaire lklynet/spider-solitaire:latest
```

**From GitHub Container Registry:**
```bash
docker run -d -p 8080:80 --name spider-solitaire ghcr.io/lklynet/spider-solitaire:latest
```

### Automated Builds

This repository is configured with GitHub Actions to automatically build and push the Docker image to:
- Docker Hub: `lklynet/spider-solitaire`
- GitHub Container Registry: `ghcr.io/lklynet/spider-solitaire`

These builds occur whenever changes are pushed to the `main` branch.

## Open Source

This project is open source software. We believe in the power of community and transparent development.

- **Learn**: Explore the source code to see how a modern React game is architected.
- **Contribute**: Bug reports, feature requests, and pull requests are welcome!
- **Modify**: Feel free to fork the repository and customize the game to your liking.

## License

This project is available under the [MIT License](LICENSE).
