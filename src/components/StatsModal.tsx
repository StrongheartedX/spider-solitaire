import React from 'react';
import { useStatsStore } from '../store/statsStore';
import { X, Trophy, Flame, Timer, Move, Trash2, Gamepad2, Percent, Crown, Zap } from 'lucide-react';
import { cn } from '../lib/utils';

interface StatsModalProps {
  isOpen: boolean;
  onClose: () => void;
  gameWon?: boolean;
  score?: number;
  moves?: number;
  time?: number;
  onPlayAgain?: () => void;
}

export const StatsModal: React.FC<StatsModalProps> = ({ 
    isOpen, 
    onClose, 
    gameWon, 
    score, 
    moves, 
    time, 
    onPlayAgain 
}) => {
  console.log('StatsModal Render:', { isOpen, gameWon, score });
  const stats = useStatsStore();

  if (!isOpen) return null;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleReset = () => {
    if (confirm('Are you sure you want to reset all your statistics? This cannot be undone.')) {
        stats.resetStats();
    }
  };

  const StatItem = ({ icon: Icon, label, value, color }: { icon: any, label: string, value: string | number, color: string }) => (
    <div className={cn("flex flex-col items-center p-4 border-2 border-primary rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,0.4)] bg-popover text-primary h-full justify-between", color)}>
       <Icon className="w-8 h-8 mb-2" />
       <span className="text-xs font-bold uppercase opacity-80 text-center mb-1">{label}</span>
       <span className="text-2xl font-black">{value}</span>
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-popover w-full max-w-4xl p-8 border-4 border-primary shadow-[8px_8px_0px_0px_rgba(0,0,0,0.4)] rounded-xl relative text-primary">
        <button 
            onClick={handleReset}
            className="absolute top-6 left-6 p-3 z-10 flex items-center justify-center hover:bg-red-900/50 rounded-full border-2 border-transparent hover:border-red-500 text-red-500 transition-all"
            title="Reset Statistics"
        >
            <Trash2 className="w-6 h-6" />
        </button>

        <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-3 z-10 flex items-center justify-center hover:bg-primary/20 rounded-full border-2 border-transparent hover:border-primary transition-all text-primary"
        >
            <X className="w-6 h-6" />
        </button>

        {gameWon && (
            <div className="mb-8 pb-8 border-b-4 border-primary/20 text-center animate-in zoom-in duration-300">
                <h2 className="text-6xl font-black mb-4 text-primary drop-shadow-[4px_4px_0px_rgba(0,0,0,0.4)]">YOU WON!</h2>
                
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    <div className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-bold text-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.4)]">
                        Score: {score}
                    </div>
                    <div className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-bold text-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.4)]">
                        Moves: {moves}
                    </div>
                    <div className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-bold text-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.4)]">
                        Time: {time !== undefined ? formatTime(time) : '--:--'}
                    </div>
                </div>

                <button 
                    onClick={() => {
                        onPlayAgain?.();
                        onClose();
                    }}
                    className="neo-button bg-primary text-primary-foreground text-xl px-12 py-4 scale-110 hover:scale-115 active:scale-110"
                >
                    Play Again
                </button>
            </div>
        )}

        <h2 className="text-4xl font-black mb-8 text-center uppercase tracking-tighter drop-shadow-md">Statistics</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <StatItem icon={Gamepad2} label="Total Games Played" value={stats.gamesPlayed} color="bg-primary/10" />
            <StatItem icon={Trophy} label="Games Won" value={stats.gamesWon} color="bg-primary/20" />
            <StatItem icon={Percent} label="Win %" value={stats.gamesPlayed > 0 ? Math.round((stats.gamesWon / stats.gamesPlayed) * 100) + '%' : '0%'} color="bg-primary/10" />
            <StatItem icon={Crown} label="Best Score" value={stats.bestScore} color="bg-primary/20" />
            
            <StatItem icon={Timer} label="Best Time" value={stats.bestTime ? `${Math.floor(stats.bestTime / 60)}:${(stats.bestTime % 60).toString().padStart(2, '0')}` : '--:--'} color="bg-primary/10" />
            <StatItem icon={Move} label="Least Moves" value={stats.leastMoves || '-'} color="bg-primary/20" />
            <StatItem icon={Flame} label="Current Streak" value={stats.currentStreak} color="bg-primary/10" />
            <StatItem icon={Zap} label="Best Streak" value={stats.bestStreak} color="bg-primary/20" />
        </div>
      </div>
    </div>
  );
};
