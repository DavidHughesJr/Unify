import { Dashboard, BoardCenter, BoardLeft, BoardRight } from "../Components/MaterialStyles";
import VerticalNav from "../Components/VerticalNav";
import PopularCategory from "../Components/PopularSubcategory";
import SearchInput from "../Components/SearchInput";
import SearchResultsTabs from "../Components/SearchResultsTabs.js";

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
