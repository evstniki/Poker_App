import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Card from "./component/Card/Index";
import { RootState } from "./store";
import { setPlayers, setWinner } from "./store/gameSlice";
import { createDeck, shuffleDeck } from "./utils/deck";
import { dealCards, determineWinner } from "./utils/poker";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const players = useSelector((state: RootState) => state.game.players);
  const winner = useSelector((state: RootState) => state.game.winner);

  const startGame = () => {
    let deck = createDeck();
    deck = shuffleDeck(deck);
    const dealtPlayers = dealCards(deck, 2, 5); // 2 players, 5 cards each
    dispatch(setPlayers(dealtPlayers));
    const gameWinner = determineWinner(dealtPlayers);
    dispatch(setWinner(gameWinner));
  };

  return (
    <div className='app'>
      <button onClick={startGame}>Start Game</button>
      <div className='players-container'>
        {players.map((player) => (
          <div key={player.id} className='player'>
            <h2>Player {player.id}</h2>
            <div className='hand'>
              {player.hand.map((card, index) => (
                <Card key={index} rank={card.rank} suit={card.suit} />
              ))}
            </div>
          </div>
        ))}
      </div>
      {winner && <h2 className='winner'>Winner: Player {winner.id}</h2>}
    </div>
  );
};

export default App;
