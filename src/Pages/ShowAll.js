import { Dashboard, BoardLeft, BoardCenter, BoardRight, Board, MobileBoard } from "../Components/muiStyles/PageStyles";
import VerticalNav from "../Layout/navigation/VerticalNav";
import ShowAllGenres from "../Components/genres/ShowAllGenres";
import TrendingCategory from "../Components/common/Trending";
import ResponsiveAppBar from "../Layout/navigation/AppBar";
import SearchInput from "../Components/common/SearchInput";

function ShowAllPage({setSearch}) {
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
                    <ShowAllGenres />
                </BoardCenter>
                <BoardRight>
                    <SearchInput setSearch={setSearch} />
                    <TrendingCategory />
                </BoardRight>
            </Dashboard>
        </Board>
       
    );
}

export default ShowAllPage;
