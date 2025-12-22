import { useEffect } from 'react';
import { Game } from './components/Game';
import { useGameStore } from './store/gameStore';

function App() {
  const colorScheme = useGameStore((state) => state.colorScheme);

  useEffect(() => {
    const themes = ['theme-red', 'theme-green', 'theme-purple', 'theme-orange', 'theme-dark'];
    document.body.classList.remove(...themes);
    
    if (colorScheme !== 'default') {
      document.body.classList.add(`theme-${colorScheme}`);
    }
  }, [colorScheme]);

  return (
    <Game />
  );
}

export default App;
