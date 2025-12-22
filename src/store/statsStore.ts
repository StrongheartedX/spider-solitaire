import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface GameStats {
  gamesPlayed: number;
  gamesWon: number;
  currentStreak: number;
  bestStreak: number;
  bestScore: number;
  bestTime: number | null; // null if no win yet
  leastMoves: number | null;
  dailyChallengesCompleted: string[]; // dates 'yyyy-MM-dd'
}

interface StatsStore extends GameStats {
  recordGameStart: () => void;
  recordWin: (score: number, time: number, moves: number) => void;
  recordLoss: () => void; // Called when starting a new game without winning the previous one?
  markDailyChallengeCompleted: (date: string) => void;
  resetStats: () => void;
}

export const useStatsStore = create<StatsStore>()(
  persist(
    (set) => ({
      gamesPlayed: 0,
      gamesWon: 0,
      currentStreak: 0,
      bestStreak: 0,
      bestScore: 0,
      bestTime: null,
      leastMoves: null,
      dailyChallengesCompleted: [],

      recordGameStart: () => {
        set(state => ({ gamesPlayed: state.gamesPlayed + 1 }));
      },

      recordWin: (score, time, moves) => {
        set(state => {
          const newStreak = state.currentStreak + 1;
          return {
            gamesWon: state.gamesWon + 1,
            currentStreak: newStreak,
            bestStreak: Math.max(state.bestStreak, newStreak),
            bestScore: Math.max(state.bestScore, score),
            bestTime: state.bestTime === null ? time : Math.min(state.bestTime, time),
            leastMoves: state.leastMoves === null ? moves : Math.min(state.leastMoves, moves)
          };
        });
      },

      recordLoss: () => {
         set({ currentStreak: 0 });
      },

      markDailyChallengeCompleted: (date: string) => {
          set(state => {
              if (state.dailyChallengesCompleted.includes(date)) return {};
              return { dailyChallengesCompleted: [...state.dailyChallengesCompleted, date] };
          });
      },

      resetStats: () => {
        set({
          gamesPlayed: 0,
          gamesWon: 0,
          currentStreak: 0,
          bestStreak: 0,
          bestScore: 0,
          bestTime: null,
          leastMoves: null,
          dailyChallengesCompleted: [],
        });
      }
    }),
    {
      name: 'spider-solitaire-stats',
    }
  )
);
