import { Dashboard, BoardCenter, BoardLeft, BoardRight } from "../Assets/muiStyles/MaterialStyles";
import VerticalNav from "../Layout/navigation/VerticalNav";
import PopularCategory from "../Components/popular/PopularInfoRightRow";
import SearchInput from "../Components/common/SearchInput";
import PopularTabs from "../Layout/tabs/PopularTabs.js";
import TrendingCategory from "../Components/common/Trending";


function PopularPage({ setHomepageSearch, homepageSearch }) {

    return (
        <Dashboard>
            <BoardLeft>
                <VerticalNav />
            </BoardLeft>
            <BoardCenter>
                <PopularTabs /> 
            </BoardCenter>
            <BoardRight>
                <SearchInput setHomepageSearch={setHomepageSearch} homepageSearch={homepageSearch} />
                <TrendingCategory />
            </BoardRight>
        </Dashboard>
    );
}

export default PopularPage;
