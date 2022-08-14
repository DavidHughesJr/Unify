import { Dashboard, BoardLeft, BoardCenter, BoardRight, Board, MobileBoard } from "../Components/muiStyles/PageStyles";
import VerticalNav from "../Layout/navigation/VerticalNav";
import TrendingCategory from "../Components/common/Trending";
import SavesList from "../Components/saves/SavesList"
import ResponsiveAppBar from "../Layout/navigation/AppBar";
import SearchInput from "../Components/common/SearchInput";

function SavesPage({ saves, setSearch }) {
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
                    <SavesList saves={saves} />
                </BoardCenter>
                <BoardRight>
                    <SearchInput setSearch={setSearch} />
                    <TrendingCategory />
                </BoardRight>
            </Dashboard>
        </Board>

    );
}

export default SavesPage;
