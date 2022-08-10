import { Dashboard, BoardLeft, BoardCenter, BoardRight, Board, MobileBoard } from "../Components/muiStyles/PageStyles";
import VerticalNav from "../Layout/navigation/VerticalNav";
import Genres from "../Components/genres/Genres";
import TrendingCategory from "../Components/common/Trending";
import ResponsiveAppBar from "../Layout/navigation/AppBar";

function GenresPage() {
    return (
        <Board>
            <MobileBoard>
                <ResponsiveAppBar />
            </MobileBoard>
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
        </Board>
        
    );
}

export default GenresPage;
