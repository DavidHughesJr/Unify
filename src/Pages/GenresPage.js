import { Dashboard, BoardLeft, BoardCenter, BoardRight, Board, MobileBoard } from "../Components/muiStyles/PageStyles";
import VerticalNav from "../Layout/navigation/VerticalNav";
import Genres from "../Components/genres/Genres";
import TrendingCategory from "../Components/common/Trending";
import ResponsiveAppBar from "../Layout/navigation/AppBar";
import SearchInput from "../Components/common/SearchInput";

function GenresPage({setSearch}) {
    return (
        <Board>
            <MobileBoard>
                <ResponsiveAppBar setSearch={setSearch} />
            </MobileBoard>
            <Dashboard>
                <BoardLeft>
                    <VerticalNav />
                </BoardLeft>
                <BoardCenter>
                    <Genres />
                </BoardCenter>
                <BoardRight>
                    <SearchInput setSearch={setSearch} />
                    <TrendingCategory />
                </BoardRight>
            </Dashboard>
        </Board>
        
    );
}

export default GenresPage;
