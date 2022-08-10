import { Dashboard, BoardLeft, BoardHero, BoardBottom, DetailsBoard, BoardCenter, BoardRight, Board } from "../Components/muiStyles/PageStyles";
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
