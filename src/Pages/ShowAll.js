import {
    Dashboard,
    BoardCenter,
    BoardLeft,
    BoardRight,
} from "../Assets/muiStyles/MaterialStyles";
import VerticalNav from "../Layout/navigation/VerticalNav";
import ShowAllGenres from "../Components/genres/ShowAllGenres";
import TrendingCategory from "../Components/common/Trending";


function ShowAllPage() {
    return (
        <Dashboard>
            <BoardLeft>
                <VerticalNav />
            </BoardLeft>
            <BoardCenter>
                <ShowAllGenres />
            </BoardCenter>
            <BoardRight>
                <TrendingCategory />
            </BoardRight>
        </Dashboard>
    );
}

export default ShowAllPage;
