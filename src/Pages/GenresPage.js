import {
    Dashboard,
    BoardCenter,
    BoardLeft,
    BoardRight,
} from "../Assets/muiStyles/MaterialStyles";
import VerticalNav from "../Layout/navigation/VerticalNav";
import Genres from "../Components/genres/Genres";

function GenresPage() {
    return (
        <Dashboard>
            <BoardLeft>
                <VerticalNav />
            </BoardLeft>
            <BoardCenter>
                <Genres />
            </BoardCenter>
            <BoardRight></BoardRight>
        </Dashboard>
    );
}

export default GenresPage;
