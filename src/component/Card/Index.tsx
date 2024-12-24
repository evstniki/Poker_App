import { Box } from "@mui/material";
import "./Card.css";

interface CardProps {
  rank: string;
  suit: string;
}

const Card: React.FC<CardProps> = ({ rank, suit }) => {
  return (
    <Box className='card'>
      <div className='card-rank'>{rank}</div>
      <div className={`card-suit ${suit.toLowerCase()}`}>{suit}</div>
    </Box>
  );
};

export default Card;
