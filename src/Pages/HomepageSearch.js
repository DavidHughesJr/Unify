import { Dashboard, BoardCenter, BoardLeft, BoardRight } from "../Assets/muiStyles/MaterialStyles";
import VerticalNav from "../Layout/navigation/VerticalNav";
import PopularCategory from "../Components/movieCategories/PopularMoviesContent";
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
