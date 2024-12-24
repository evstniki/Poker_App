import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Player } from "../utils/poker";

interface GameState {
  players: Player[];
  winner: Player | null;
}

const initialState: GameState = {
  players: [],
  winner: null,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setPlayers(state, action: PayloadAction<Player[]>) {
      state.players = action.payload;
    },
    setWinner(state, action: PayloadAction<Player | null>) {
      state.winner = action.payload;
    },
  },
});

export const { setPlayers, setWinner } = gameSlice.actions;

export default gameSlice.reducer;
