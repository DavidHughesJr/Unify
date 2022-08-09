import {
    Dashboard,
    BoardCenter,
    BoardLeft,
    BoardRight,
} from "../Assets/muiStyles/MaterialStyles";
import VerticalNav from "../Layout/navigation/VerticalNav";
import Genres from "../Components/genres/Genres";
import TrendingCategory from "../Components/common/Trending";


function GenresPage() {
    return (
        <Dashboard>
            <BoardLeft>
                <VerticalNav />
            </BoardLeft>
            <BoardCenter>
                <Genres />
            </BoardCenter>
            <BoardRight>
                <TrendingCategory />
            </BoardRight>
        </Dashboard>
    );
}

export default GenresPage;
