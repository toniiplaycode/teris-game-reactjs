import { StyledCell } from "./styles/StyledCell";
import { TETROMINOS, randomTetromino } from "./tetromios";

const Cell = ({type}) => {
    return(
        <StyledCell type={type} color={TETROMINOS[type].color}/>
    )
}

export default Cell;