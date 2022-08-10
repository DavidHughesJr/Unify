import { Dashboard, BoardLeft, BoardCenter, BoardRight, Board, MobileBoard } from "../Components/muiStyles/PageStyles";
import VerticalNav from "../Layout/navigation/VerticalNav";
import PopularCategory from "../Components/popular/PopularInfoRightRow";
import SearchInput from "../Components/common/SearchInput";
import SearchResultsTabs from "../Layout/tabs/SearchResultsTabs.js.js";
import ResponsiveAppBar from "../Layout/navigation/AppBar";

function Search({ setSearch, search}) {

    return (
        <Board>
            <Dashboard>
                    <MobileBoard>
                        <ResponsiveAppBar setSearch={search} /> 
                    </MobileBoard>
                <BoardLeft>
                    <VerticalNav />
                </BoardLeft>
                <BoardCenter>
                    <SearchResultsTabs search={search} />
                </BoardCenter>
                <BoardRight>
                    <SearchInput setSearch={setSearch} />
                    <PopularCategory />
                </BoardRight>
            </Dashboard>
        </Board>
       
    );
}

export default Search;
