import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Card, Rank, Suit } from "../types/game";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Simple seeded random number generator (LCG)
export class SeededRandom {
  private seed: number;

  constructor(seed: string) {
    // Hash the string seed to a number
    let h = 0xdeadbeef;
    for (let i = 0; i < seed.length; i++) {
      h = Math.imul(h ^ seed.charCodeAt(i), 2654435761);
    }
    this.seed = (h ^ h >>> 16) >>> 0;
  }

  // Returns a float between 0 and 1
  next(): number {
    this.seed = (this.seed * 1664525 + 1013904223) % 4294967296;
    return this.seed / 4294967296;
  }
}

export const SUITS: Suit[] = ['spades', 'hearts', 'clubs', 'diamonds'];

export function createDeck(): Card[] {
  const deck: Card[] = [];
  const suitsToUse: Suit[] = [];

  // Always 1 suit (Spades) - 8 sets of Spades
  for(let i=0; i<8; i++) suitsToUse.push('spades');

  suitsToUse.forEach((suit, suitIndex) => {
    for (let rank = 1; rank <= 13; rank++) {
      deck.push({
        id: `${suit}-${rank}-${suitIndex}`, // Unique ID
        suit,
        rank: rank as Rank,
        faceUp: false,
      });
    }
  });

  return deck;
}

export function shuffleDeck(deck: Card[], seed: string): Card[] {
  const rng = new SeededRandom(seed);
  const shuffled = [...deck];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(rng.next() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function getRankString(rank: Rank): string {
    switch(rank) {
        case 1: return 'A';
        case 11: return 'J';
        case 12: return 'Q';
        case 13: return 'K';
        default: return rank.toString();
    }
}
