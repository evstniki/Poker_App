import { Card, Rank } from "./deck";

export interface Player {
  id: number;
  hand: Card[];
}

export const dealCards = (
  deck: Card[],
  numPlayers: number,
  cardsPerPlayer: number
): Player[] => {
  const players: Player[] = [];
  for (let i = 0; i < numPlayers; i++) {
    players.push({ id: i + 1, hand: [] });
  }

  for (let i = 0; i < cardsPerPlayer; i++) {
    players.forEach((player) => {
      player.hand.push(deck.pop() as Card);
    });
  }

  return players;
};

export const determineWinner = (players: Player[]): Player => {
  // Simplified logic for determining the winner based on the highest card
  const rankOrder: { [key in Rank]: number } = {
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "10": 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14,
  };

  let winner = players[0];
  players.forEach((player) => {
    const playerMaxRank = Math.max(
      ...player.hand.map((card) => rankOrder[card.rank])
    );
    const winnerMaxRank = Math.max(
      ...winner.hand.map((card) => rankOrder[card.rank])
    );
    if (playerMaxRank > winnerMaxRank) {
      winner = player;
    }
  });

  return winner;
};
