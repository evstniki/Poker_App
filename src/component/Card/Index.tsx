import { Box } from "@mui/material";
import "./Card.css";

interface CardProps {
  title: string;
}

const Card: React.FC<CardProps> = ({ title }) => {
  return (
    <Box>
      <div className='card'>{title}</div>
    </Box>
  );
};

export default Card;
