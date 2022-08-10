import { Dashboard, BoardLeft, BoardHero, BoardBottom, DetailsBoard, BoardCenter, BoardRight, Board } from "../Components/muiStyles/PageStyles";
import VerticalNav from "../Layout/navigation/VerticalNav";
import StreamTabs from "../Layout/tabs/StreamTabs"
import TrendingCategory from "../Components/common/Trending";


function StreamPage() {
  return (
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
  );
}

export default StreamPage;
