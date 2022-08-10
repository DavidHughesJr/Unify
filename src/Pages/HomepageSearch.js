import { Dashboard, BoardLeft, BoardHero, BoardBottom, DetailsBoard, BoardCenter, BoardRight, Board } from "../Components/muiStyles/PageStyles";
import VerticalNav from "../Layout/navigation/VerticalNav";
import PopularCategory from "../Components/popular/PopularInfoRightRow";
import SearchInput from "../Components/common/SearchInput";
import SearchResultsTabs from "../Layout/tabs/SearchResultsTabs.js";

function HomepageSearch({ setHomepageSearch, homepageSearch }) {

    return (
        <Dashboard>
            <BoardLeft>
                <VerticalNav />
            </BoardLeft>
            <BoardCenter>
                <SearchResultsTabs homepageSearch={homepageSearch} />
            </BoardCenter>
            <BoardRight>
                <SearchInput setHomepageSearch={setHomepageSearch} homepageSearch={homepageSearch} />
                <PopularCategory />
            </BoardRight>
        </Dashboard>
    );
}

export default HomepageSearch;
