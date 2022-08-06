import {
  Dashboard,
  BoardCenter,
  BoardLeft,
  BoardRight,
} from "../Assets/muiStyles/MaterialStyles";
import VerticalNav from "../Layout/navigation/VerticalNav";
import StreamTabs from "../Layout/tabs/StreamTabs"

function StreamPage() {
  return (
    <Dashboard>
      <BoardLeft>
        <VerticalNav />
      </BoardLeft>
      <BoardCenter>
        <StreamTabs />
      </BoardCenter>
      <BoardRight></BoardRight>
    </Dashboard>
  );
}

export default StreamPage;
