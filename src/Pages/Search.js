import { Dashboard, BoardLeft, BoardHero, BoardBottom, DetailsBoard, BoardCenter, BoardRight, Board } from "../Components/muiStyles/PageStyles";
import VerticalNav from "../Layout/navigation/VerticalNav";
import PopularCategory from "../Components/popular/PopularInfoRightRow";
import SearchInput from "../Components/common/SearchInput";
import SearchResultsTabs from "../Layout/tabs/SearchResultsTabs.js.js";

function Search({ setSearch, search}) {

    return (
        <Dashboard>
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
    );
}

export default Search;
