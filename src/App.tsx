import React, { useState } from "react";
import "./App.css";
import Card from "./component/Card/Index";
import { createDeck, shuffleDeck } from "./utils/deck";
import { dealCards, determineWinner, Player } from "./utils/poker";

const App: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [winner, setWinner] = useState<Player | null>(null);

  const startGame = () => {
    let deck = createDeck();
    deck = shuffleDeck(deck);
    const dealtPlayers = dealCards(deck, 2, 5);
    setPlayers(dealtPlayers);
    const gameWinner = determineWinner(dealtPlayers);
    setWinner(gameWinner);
  };

  return (
    <div className='app'>
      <button onClick={startGame}>Start Game</button>
      <div className='cards-container'>
        {players.map((player) => (
          <div key={player.id}>
            <h2>Player {player.id}</h2>
            {player.hand.map((card, index) => (
              <Card key={index} title={`${card.rank} of ${card.suit}`} />
            ))}
          </div>
        ))}
      </div>
      {winner && <h2>Winner: Player {winner.id}</h2>}
    </div>
  );
};

export default App;
