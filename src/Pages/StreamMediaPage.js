import { Dashboard, BoardLeft, BoardCenter, BoardRight, Board, MobileBoard } from "../Components/muiStyles/PageStyles";
import VerticalNav from "../Layout/navigation/VerticalNav";
import StreamTabs from "../Layout/tabs/StreamTabs"
import TrendingCategory from "../Components/common/Trending";
import ResponsiveAppBar from "../Layout/navigation/AppBar";


function StreamMediaPage({ setSearch }) {
    return (
        <Board>
            <MobileBoard setSearch={setSearch}>
                <ResponsiveAppBar />
            </MobileBoard>
            <Dashboard>
                <BoardLeft>
                    <VerticalNav />
                </BoardLeft>
                <BoardCenter>
                    <StreamTabs />
                </BoardCenter>
                <BoardRight>
                    <TrendingCategory />
                </BoardRight>
            </Dashboard>
        </Board>

    );
}

export default StreamMediaPage
