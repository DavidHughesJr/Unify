import { Dashboard, BoardLeft, BoardHero, BoardBottom, DetailsBoard, BoardCenter, BoardRight, Board } from "../Components/muiStyles/PageStyles";
import VerticalNav from "../Layout/navigation/VerticalNav";
import PopularCategory from "../Components/popular/PopularInfoRightRow";
import SearchInput from "../Components/common/SearchInput";
import PopularTabs from "../Layout/tabs/PopularTabs.js";
import TrendingCategory from "../Components/common/Trending";


function PopularPage({ setSearch, search }) {

    return (
        <Dashboard>
            <BoardLeft>
                <VerticalNav />
            </BoardLeft>
            <BoardCenter>
                <PopularTabs />
            </BoardCenter>
            <BoardRight>
                <SearchInput setSearch={setSearch} search={search} />
                <TrendingCategory />
            </BoardRight>
        </Dashboard>
    );
}

export default PopularPage;
