import { Dashboard, BoardLeft, BoardCenter, BoardRight, Board, MobileBoard } from "../Components/muiStyles/PageStyles";
import VerticalNav from "../Layout/navigation/VerticalNav";
import SearchInput from "../Components/common/SearchInput";
import PopularTabs from "../Layout/tabs/PopularTabs.js";
import TrendingCategory from "../Components/common/Trending";
import ResponsiveAppBar from "../Layout/navigation/AppBar";


function PopularPage({ setSearch, search }) {

    return (
        <Board>
            <MobileBoard>
                <ResponsiveAppBar /> 
            </MobileBoard>
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
        </Board>
       
    );
}

export default PopularPage;
